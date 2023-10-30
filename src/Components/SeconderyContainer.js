import MovieList from "../Components/MovieList"
import {useSelector} from "react-redux"

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);

    return (
        <div>
            <MovieList title={"Name of the Movie"} movies={movies.nowPlayingMovies}/>
        </div>
    )
}

export default SecondaryContainer;