import Header from './Header';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useActionMoviesDetails from '../hooks/useActionMovie';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  useNowPlayingMovies();
  useActionMoviesDetails();

  const toggleGPTSearchView = useSelector((store)=>store?.gpt?.showGPTSearch);
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  
  
  return (
    <div className='w-full h-full overflow-x-hidden'>
      {movies && 
      <>
        <Header />
        {
        toggleGPTSearchView ? <GPTSearch/> : 
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
        }
      </>
      }
      
      
      
    </div>
  )
}

export default Browse;