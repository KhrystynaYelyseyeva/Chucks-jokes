import React, {Component} from "react";
import './Joke.css';
import PropTypes from "prop-types";


import like from "../../img/heart.svg";
import no_like from "../../img/Vector.svg";

class Joke extends Component {
    state = {
        inFavorite: false,
    }

    render() {
        const {inFavorite} = this.state;
        const {
            joke,
            favoriteJokes,
            id,
            icon_url,
            url,
            value,
            updated_at,
            addJokeToFavorite,
            deleteJokeToFavorite,
        } = this.props;
        return (
            <div className="Joke">
                <div className="joke-container">
                    {inFavorite ?
                        <img
                            onClick={() => {
                                this.setState({
                                    inFavorite: false,
                                })
                                deleteJokeToFavorite(id);
                            }}
                            className="joke-like"
                            src={favoriteJokes.find(item => item.id === id) ? like : no_like}
                            alt="joke-like"/> :
                        <img
                            onClick={() => {
                                this.setState({
                                    inFavorite: true,
                                })
                                addJokeToFavorite(
                                    id,
                                    icon_url,
                                    url,
                                    value,
                                    updated_at,
                                    deleteJokeToFavorite
                                );
                            }}
                            className="joke-like"
                            src={favoriteJokes.find(item => item.id === id) ? like : no_like}
                            alt="joke-like"/>
                    }
                    <img className="joke-icon" src={icon_url} alt="joke-icon"/>
                    <div className="joke-container-article">
                        <a className="joke-id" href={url}>
                            ID: {id}
                        </a>
                        <article>{value}</article>
                        <div className="joke-info">
                            <p className="joke-update">Last
                                update: {Math.round((Date.now() - new Date(updated_at)) / 3600000)} hours ago</p>
                            {joke.categories[0] && <span className="joke-category">{joke.categories[0]}</span>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



Joke.propTypes = {
    joke:PropTypes.object,
    favoriteJokes:PropTypes.array,
    addJokeToFavorite: PropTypes.func,
    deleteJokeToFavorite: PropTypes.func,
    id:PropTypes.string,
    icon_url:PropTypes.string,
    url:PropTypes.string,
    value:PropTypes.string,
    updated_at:PropTypes.string,
};

Joke.defaultProps = {
    joke: {},
    favoriteJokes:[],
    id:'',
    icon_url:'',
    url:'',
    value:'',
    updated_at:'',
    addJokeToFavorite: () => {
    },
    deleteJokeToFavorite: () => {
    },
};
export default Joke;