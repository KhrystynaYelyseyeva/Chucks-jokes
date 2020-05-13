import React, {Component} from "react";
import './Main.css';

import Header from "../../components/Header/Header";
import Joke from "../../components/Joke/Joke";
import RadioButton from "../../components/RadioButton/RadioButton";
import {API_URL, RANDOM_PARAM, CATEGORY_PARAM, QUERY_PARAM} from "../../utils/api";

const RADIOBUTTON = [
    {
        name: "Random",
        value: RANDOM_PARAM,
    },
    {
        name: "From categories",
        value: CATEGORY_PARAM,
    },
    {
        name: "Search",
        value: QUERY_PARAM,
    },
];

const btnCategories = ['animal', 'career', 'celebrity', 'dev'];


class Main extends Component {
    state = {
        jokes: [],
        searchType: RANDOM_PARAM,
        query: '',
        warn: false,
    }

    componentDidMount() {
        this.fetchJokes(this.state.searchType, this.state.query);
        document.querySelector(`input[value=${RANDOM_PARAM}]`).setAttribute("checked", "true");
    };


    fetchJokes = (searchType, query) => {
        fetch(`${API_URL}${searchType}${query}`)
            .then(data => data.json())
            .then(data => {
                (searchType === RANDOM_PARAM || searchType === CATEGORY_PARAM )&&
                this.setState({jokes: [data, ...this.state.jokes]});


                searchType === QUERY_PARAM &&
                data.total !== 0 &&
                this.setState({jokes: data.result});

                searchType === QUERY_PARAM &&
                data.total === 0 &&
                alert("Chuck doesn't know jokes with your word.");

            })
            .catch(err => err)
    };

    handelSubmit = (e) => {
        e.preventDefault();

        if (this.state.searchType === CATEGORY_PARAM &&
            !btnCategories.includes(this.state.query)) {
            alert("Please select a category.");
        }else if (this.state.searchType === QUERY_PARAM &&
            this.state.query === "") {
            alert("You enter incorrect value");
        }else {
            this.fetchJokes(this.state.searchType, this.state.query);
        }
    };


    handelRadio = (searchType) => {
        this.setState({query: '', searchType: searchType});
    };

    handelInput = ({target: {value}}) => {
        value.length >= 3 && value.length <= 120 ?
            this.setState({query: value, warn: false}) :
            this.setState({warn: true});
    };

    handelCategoriesLi = (e) => {
        const buttons = document.querySelectorAll(".btn-categories");
        for (let i = 0, l = buttons.length; i < l; i++) {
            buttons[i].classList.contains("active") && buttons[i].classList.remove("active");
        }

        this.setState({query: e.target.getAttribute('value')});

        e.target.classList.add("active");
    };


    render() {
        const {
            searchType,
            jokes,
            warn,
        } = this.state;
        const {
            menu,
            handlerMenu,
            favoriteJokes,
            addJokeToFavorite,
            deleteJokeToFavorite,
        } = this.props;
        return (
            <div className={menu ? "Main Main__disable" : "Main"}>
                <div className="jokes-wrapper">
                    <Header handlerMenu={handlerMenu}/>

                    <form onSubmit={this.handelSubmit} className="search-form">
                        <fieldset className="search-form__wrap">
                            <div className="search-form__info">

                                {/*Ability to get a random joke*/}
                                <RadioButton name={RADIOBUTTON[0].name}
                                             handelRadio={this.handelRadio}
                                             value={RADIOBUTTON[0].value}/>


                                {/*Ability to get a random joke from categories (Use API to get all available categories).*/}
                                <RadioButton name={RADIOBUTTON[1].name}
                                             handelRadio={this.handelRadio}
                                             value={RADIOBUTTON[1].value}/>

                                {searchType === RADIOBUTTON[1].value &&
                                <ul className="categories__checked">
                                    {btnCategories.map((btn, key) =>
                                        <li onClick={this.handelCategoriesLi}
                                            className="btn-categories"
                                            value={btn}
                                            key={key}>{btn}</li>
                                    )}
                                </ul>}


                                {/*Ability to get jokes by free text search.*/}
                                <RadioButton name={RADIOBUTTON[2].name}
                                             handelRadio={this.handelRadio}
                                             value={RADIOBUTTON[2].value}/>

                                {searchType === RADIOBUTTON[2].value &&
                                <div className="search__checked">
                                    <input onChange={this.handelInput}
                                           className="search__checked__query"
                                           type="text"
                                           placeholder="Free text search..."
                                           autoFocus={true}/>
                                    {warn &&
                                    <p style={{"color": "red"}}>The query should be between 3 and 120 characters
                                        long.</p>}
                                </div>}


                                <button className="btn-submit" type="submit">Get a joke</button>

                            </div>
                        </fieldset>
                    </form>

                    <section className="jokes">
                        {jokes.map(joke =>
                            <Joke
                                joke={joke}
                                favoriteJokes={favoriteJokes}
                                addJokeToFavorite={addJokeToFavorite}
                                deleteJokeToFavorite={deleteJokeToFavorite}
                                id={joke.id}
                                icon_url={joke.icon_url}
                                url={joke.url}
                                value={joke.value}
                                updated_at={joke.updated_at}
                                key={joke.id}
                            />)}
                    </section>
                </div>
            </div>

        )
    }
}

export default Main;