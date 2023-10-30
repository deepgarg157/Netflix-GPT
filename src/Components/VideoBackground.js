import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";


const VideoBackground = ({ moviesId }) => {

    // fetch the movie trailer

    const trailerVideo = useSelector((store) => store.movies?.trailerVideo)

    useTrailerVideo(moviesId)

    return (
        <div>
            <iframe
            className="w-screen aspect-video z-20"
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"} title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>
        </div>
    )
}

export default VideoBackground;