import React from "react";
import { useSelector } from "react-redux";
import useMovieDetails from "../hooks/useMovieDetails"

const VideoBackground = ({id}) => {
    useMovieDetails(id);
    const movieDetails = useSelector((store) => store.movies?.movieDetails[id]?.results);
    

  return (
    
    <div>
      <iframe 
      src={movieDetails?.trailer + "?autoplay=1&mute=1" } 
      className="w-screen aspect-video"
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin">
      </iframe>
    </div>
  );
};

export default VideoBackground;
