import {API_OPTION} from "../utils/constants";
import {addActionMovies} from "../utils/moviesSlice"
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useActionMovies = () => {

    const dispatch = useDispatch();
    const url = `https://moviesminidatabase.p.rapidapi.com/movie/byGen/Action/`;
    API_OPTION.headers["x-rapidapi-host"] = "moviesminidatabase.p.rapidapi.com";

    const getActionMovie = async () => {
    const response = await fetch(url, API_OPTION);
    const result = await response.json();
    dispatch(addActionMovies(result));
    };
    
    useEffect(() => {
        getActionMovie();
    }, []);
}

export default useActionMovies;