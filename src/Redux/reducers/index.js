import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";

const rootReducer = combineReducers({ allMovies: moviesReducer });

export default rootReducer;
