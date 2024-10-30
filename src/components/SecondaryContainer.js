import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store)=>{ return store?.movies})

  return (
    <>
    { movies.nowPlayingMovies && movies.actionMovies && 
      <>
        <div className='flex flex-col w-full bg-black'>
          <div className='-mt-20 md:-mt-40 relative z-10 mr-2 overflow-x-hidden'>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Action"} movies={movies.actionMovies}/>
            <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
          </div>
        </div>
      </>
      }
    </>
  )
}

export default SecondaryContainer