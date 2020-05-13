import {ADD_JOKE, REMOVE_JOKE} from '../utils/constants';

//Any joke can be marked/unmarked as favourite.
export const addJoke = (id,
                        icon_url,
                        url,
                        value,
                        updated_at,
                        deleteJokeToFavorite) => ({
    type: ADD_JOKE,
    id,
    icon_url,
    url,
    value,
    updated_at,
    deleteJokeToFavorite
});


export const removeJoke = id => ({
    type: REMOVE_JOKE,
    id
});