import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  
  const url = "https://moviesminidatabase.p.rapidapi.com/movie/order/byPopularity/";
  API_OPTION.headers["x-rapidapi-host"] = "moviesminidatabase.p.rapidapi.com";

  const nowPlayingMovies = useSelector((store)=> store?.movies?.nowPlayingMovies)

  const getNowPlayingMovies = async () => {
    const response = await fetch(url, API_OPTION);
    const result = await response.json();
    dispatch(addNowPlayingMovies(result));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
