import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) =>{

    // console.log(movies);
    return (
        <div className="w-screen text-white pt-8">
            <h1 className="text-lg font-semibold px-4">{title}</h1>
            <div className="  overflow-x-scroll scrollbar-hide">
                
                <div className="flex gap-4">
                {movies?.results?.slice(0, 8).map((movie)=>{
                    return (<MovieCard id={movie.imdb_id}/>)
                })}
                </div>
            </div>
        </div>
    )
}

export default MovieList;