import React from 'react';
import useMovieDetails from "../hooks/useMovieDetails"
import { useSelector } from 'react-redux';

const MovieCard = ({id}) => {
    useMovieDetails(id);
    const movieDetails = useSelector((store) => store.movies?.movieDetails[id]?.results);
  return (
    <div className='mt-2 border border-white w-32 md:w-40 h-48 rounded-lg bg-contain aspect-video bg-gradient-to-r from-black'>

          <img className='h-full w-full bg-contain aspect-auto rounded-lg bg-gradient-to-r from-black' src={movieDetails?.banner} alt="movieImg" />

    </div>
  )
}

export default MovieCard;