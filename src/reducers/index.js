import {combineReducers} from 'redux';
import favorite from "./favorite";

//Favourite jokes should be available after reloading the page and stored in the browser (No need to use Back-end).

const rootReducer = combineReducers({favorite});

export default rootReducer;