import React, { useState, useEffect } from "react";
import makeApiCall from "./Service/api/common.js";
import { MOVIES_ID, KEY } from "./Constant/movies.js";
import Carousel from "./Carousel/Carousel";
import "./style.css";

export default function App() {
  const [movieList, updateMovieList] = useState([]);

  const fetchData = () => {
    Promise.allSettled(
      MOVIES_ID.map((id) => {
        return makeApiCall(`http://www.omdbapi.com/?i=${id}&apikey=${KEY}`);
      })
    ).then((e) => {
      const result = e.reduce((acc, elm) => {
        const { Title, Poster } = elm?.value.data;
        return [...acc, { Title, Poster }];
      }, []);
      updateMovieList(result);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Carousel list={movieList} />
    </div>
  );
}
