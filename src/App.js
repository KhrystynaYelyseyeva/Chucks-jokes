import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';

import {addJoke, removeJoke} from "./actions/actionCreator";

import Main from "./containers/Main/Main";
import Favorite from "./containers/Favorite/Favorite";

import './App.css';

class App extends Component {
    state = {
        menu: false,
    }

    handlerMenu = () => {
        this.setState((prevState, props) => {
            return ({menu: !prevState.menu})
        })
    };

    render() {
        const {menu} = this.state;
        const {favorite, removeJoke,addJoke} = this.props;
        const isFavoriteExist = favorite && favorite.length > 0;
        return (
            <Fragment>
                <div className="App">
                    <Main
                        addJokeToFavorite={addJoke}
                        deleteJokeToFavorite={removeJoke}
                        favoriteJokes={favorite}
                        menu={menu}
                        handlerMenu={this.handlerMenu}
                    />
                    <Favorite
                        isFavoriteExist={isFavoriteExist}
                        deleteJokeToFavorite={removeJoke}
                        favoriteJokes={favorite}
                        menu={menu}
                        handlerMenu={this.handlerMenu}
                    />
                </div>
            </Fragment>
        );
    }
}

export default connect(({favorite}) => ({
    favorite,
}), {addJoke, removeJoke})(App);
