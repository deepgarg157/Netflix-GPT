import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SeconderyContainer";

const Browse = () => {

    useNowPlayingMovies()

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
            {/* 

            MainContainer
            - video background
            - movie title

            SecondaryContainer
            - movies list * n
            - movies card * n
            
            
            */}
        </div>
    )
}

export default Browse;