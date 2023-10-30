import MovieCard from "../Components/MovieCard"

const MovieList = ({ title, movies }) => {

    if(movies === null) return;

    return (
        <div>
            <h1>{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList;