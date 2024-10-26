import {API_OPTION} from "../utils/constants";
import {addMovieDetails} from "../utils/moviesSlice"
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useNowPlayingMovies = (id) => {

    const dispatch = useDispatch();
    const url = `https://moviesminidatabase.p.rapidapi.com/movie/id/${id}`;
    API_OPTION.headers["x-rapidapi-host"] = "moviesminidatabase.p.rapidapi.com";

    const getMovieDetails = async () => {
    const response = await fetch(url, API_OPTION);
    const result = await response.json();
    dispatch(addMovieDetails(result));
    };
    
    useEffect(() => {
    getMovieDetails();
    }, []);
}

export default useNowPlayingMovies;