import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openAI";
import { useRef } from "react";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const langSelected = useSelector((store) =>{
    return store?.config.lang;
  })

const handleGptSearchClick = async () => {
  console.log(searchText.current.value);
  // Make an API call to GPT API and get Movie Results

  const gptQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

  const gptResults = await openai.chat.completions.create({
    messages: [{ role: "user", content: gptQuery }],
    model: "gpt-3.5-turbo",
  });

  if (!gptResults.choices) {
    // TODO: Write Error Handling
  }

  console.log(gptResults.choices?.[0]?.message?.content);

  const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

  console.log(gptMovies);
};


  return (
    <div className='pt-[45%] md:pt-[20%] flex justify-center opacity-85 '>
        <form className='bg-black w-4/5 md:w-1/2 grid grid-cols-12 rounded-lg border border-gray-200' onSubmit={(e)=>e.preventDefault()}>

            <input 
            ref={searchText}
            type="text" 
            className='col-span-9 my-4 mx-2 md:m-4 p-2 rounded-md'
            placeholder={lang[langSelected].gptPlaceholder}/>

            <button className='bg-red-700 col-span-3 my-4 mr-2 md:m-4 py-2 px-2 text-white rounded-md' onClick={() => handleGptSearchClick()}>{lang[langSelected].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar