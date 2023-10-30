import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utility/constants";
import { addTrailerVideo } from "../Utility/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (moviesId) => {
    const dispatch = useDispatch()

    const getMovieVideos = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
            moviesId +
            "/videos?language=en-US",
            API_OPTIONS
        );
        const json = await data.json()
        // console.log(json)

        const filterData = json.results.filter((trailer) => trailer.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0]
        // console.log(trailer)
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        getMovieVideos()
    }, [])
}

export default useTrailerVideo;