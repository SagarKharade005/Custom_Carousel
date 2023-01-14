import {
  SET_MOVIES,
  FEVORITE_MOVIE,
  UN_FEVORITE_MOVIE,
} from "../constants/action-types";

export const setMovies = (movies) => {
  return { type: SET_MOVIES, payLoad: movies };
};

export const fevoriteMovies = (movie) => {
  return { type: FEVORITE_MOVIE, payLoad: movie };
};

export const unfevoriteMovies = (movie) => {
  return { type: UN_FEVORITE_MOVIE, payLoad: movie };
};
