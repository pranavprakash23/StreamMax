import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) =>{
    return (
        <div className="w-screen text-white mt-4 md:mt-0 pt-8">
            <h1 className="text-sm md:text-xl font-semibold px-8">{title}</h1>
            <div className="overflow-x-scroll scrollbar-hide px-4 pt-2">
                
                <div className="flex gap-4">
                {movies?.results?.slice(0, 2).map((movie)=>{
                    return (<MovieCard key={movie.imdb_id} id={movie.imdb_id}/>)
                })}
                </div>
            </div>
        </div>
    )
}

export default MovieList;