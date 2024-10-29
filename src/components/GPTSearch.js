import React from 'react'
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import LOGIN_IMG from '../images/bgCover.jpg';

const GPTSearch = () => {
  return (
    <div>
        <div id='' className="w-full h-full bg-cover bg-left absolute -z-10" style={{backgroundImage: `url(${LOGIN_IMG})`}} >

        </div>
        <GPTSearchBar/>
        <GPTMovieSuggestions/>
    </div>
  )
}

export default GPTSearch