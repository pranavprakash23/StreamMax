import React from "react";
import { useSelector } from "react-redux";
import useMovieDetails from "../hooks/useMovieDetails"

const VideoBackground = ({id}) => {
    const movieDetails = useSelector((store) => store.movies?.movieDetails?.results);
    useMovieDetails(id);

  return (
    
    <div>
      <iframe
       width="560"
       height="315"
       src={movieDetails?.trailer}
       title="YouTube video player"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin">
       </iframe>
    </div>
  );
};

export default VideoBackground;
