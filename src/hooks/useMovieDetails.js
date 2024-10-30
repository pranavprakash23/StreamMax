import {API_OPTION} from "../utils/constants";
import {addMovieDetails} from "../utils/moviesSlice"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const useMoviesDetails = (id) => {

    const dispatch = useDispatch();
    const url = `https://moviesminidatabase.p.rapidapi.com/movie/id/${id}`;
    API_OPTION.headers["x-rapidapi-host"] = "moviesminidatabase.p.rapidapi.com";

    const movieDetails = useSelector((store)=> store?.movies?.movieDetails)

    const getMovieDetails = async () => {
    const response = await fetch(url, API_OPTION);
    const result = await response.json();
    dispatch(addMovieDetails(result));
    };
    
    useEffect(() => {
    if(JSON.stringify(movieDetails) === '{}')getMovieDetails();
    }, []);
}

export default useMoviesDetails;