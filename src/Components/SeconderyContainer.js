import MovieList from "../Components/MovieList"
import { useSelector } from "react-redux"

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);

    return (
        <div className="bg-black">
            <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
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