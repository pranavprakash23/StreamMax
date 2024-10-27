import Header from './Header';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useActionMoviesDetails from '../hooks/useActionMovie';

const Browse = () => {
  useNowPlayingMovies();
  useActionMoviesDetails();
  
  return (
    <div className='w-full h-full overflow-x-hidden'>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse;