import MovieList from "../Components/MovieList"
import { useSelector } from "react-redux"

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);

    return (
        <div className="bg-black">
            <div className="-mt-48 relative z-10">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                <MovieList title={"Up Coming"} movies={movies.upComingMovies} />
                <MovieList title={"Popular"} movies={movies.popularMovies} />
                <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer;