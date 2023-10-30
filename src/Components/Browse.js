import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SeconderyContainer";

const Browse = () => {

    useNowPlayingMovies()

    return (
        <div>
            <Header/>
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse;