import React, { useState, useEffect } from "react";
import makeApiCall from "./Service/api/common.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fevoriteMovies } from "./Redux/reducers/moviesReducer";
import { MOVIES_ID, KEY } from "./Constant/movies.js";
import Carousel from "./Carousel/Carousel";
import "./style.css";

export default function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state);
  const onFevoriteMovieHandler = (movie) => {
    dispatch(fevoriteMovies(movie.imdbID));
  };

  // const fetchData = () => {
  //   Promise.allSettled(
  //     MOVIES_ID.map((id) => {
  //       return makeApiCall(`https://www.omdbapi.com/?i=${id}&apikey=${KEY}`);
  //     })
  //   ).then((e) => {
  //     const result = e.reduce((acc, elm) => {
  //       const { Title, Poster } = elm?.value.data;
  //       return [...acc, { Title, Poster }];
  //     }, []);
  //     updateMovieList(result);
  //   });
  // };

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div>
      <Carousel
        fevoriteMovie={(movie) => {
          onFevoriteMovieHandler(movie);
        }}
        list={movies?.Movies?.allMovies}
        selectedMovies={movies?.Movies?.selectedMovies}
      />
    </div>
  );
}
