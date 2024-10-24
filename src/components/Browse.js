import React, { useEffect } from 'react';
import Header from './Header';
import { useDispatch } from 'react-redux';
import {addNowPlayingMovies} from '../utils/moviesSlice';

const Browse = () => {

  const dispatch  = useDispatch();

  const url = 'https://newly-released-movies.p.rapidapi.com/movies';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
      'x-rapidapi-host': 'newly-released-movies.p.rapidapi.com'
    }
  };

  const nowPlayingMovies = async() =>{
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      dispatch(addNowPlayingMovies(result));
  }

  useEffect(()=>{
    nowPlayingMovies();
  }, [])


  return (
    <Header />
  )
}

export default Browse;