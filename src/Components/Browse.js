import { useDispatch, useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SeconderyContainer";

const Browse = () => {

    const showGptSearch = useSelector(store => store.gpt.showGptSearch)

    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpComingMovies()

    return (
        <div>
            <Header />
            {showGptSearch ? <GptSearch /> :
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            }
        </div>
    )
}

export default Browse;

