import {ADD_JOKE, REMOVE_JOKE} from '../utils/constants';
import {load} from "redux-localstorage-simple";

let JOKES = load({namespace: 'favorite-joke-container'});

if (!JOKES || !JOKES.favorite || !JOKES.favorite.length) {
    JOKES = {
        favorite: [],
    }
}

const favorite = (state = JOKES.favorite, {
    id,
    icon_url,
    url,
    value,
    updated_at,
    deleteJokeToFavorite,
    type
}) => {
    switch (type) {
        case ADD_JOKE:
            return [
                 {
                    id,
                    icon_url,
                    url,
                    value,
                    updated_at,
                    deleteJokeToFavorite
                },...state
            ];
        case  REMOVE_JOKE:
            return [...state].filter(joke => joke.id !== id);
        default:
            return state;
    }
};

export default favorite;