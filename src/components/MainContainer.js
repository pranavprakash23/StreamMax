import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies|| !movies?.results) return;
  const mainMovie = movies?.results[1];
  const { imdb_id } = mainMovie;

  return (
    <div className="w-full h-screen">
      <VideoTitle/>
      <VideoBackground id={imdb_id}/>
    </div>
  );
};

export default MainContainer;
