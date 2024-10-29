import { useSelector } from "react-redux"
import lang from "../utils/languageConstants"

const GPTSearchBar = () => {

  const langSelected = useSelector((store) =>{
    return store?.config.lang;
  })
console.log(langSelected);


  return (
    <div className='pt-[20%] flex justify-center opacity-85'>
        <form className='bg-black w-1/2 grid grid-cols-12 rounded-lg border border-gray-200'>
            <input 
            type="text" 
            className='col-span-9 m-4 p-2 rounded-sm'
            placeholder={lang[langSelected].gptPlaceholder}/>
            <button className='bg-red-700 col-span-3 m-4 py-2 px-2 text-white rounded-md'>{lang[langSelected].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar