import { IMG_CDN_URL } from "../Utility/constants";

const MovieCard =({posterPath})=>{

    return(
        <div className="w-48">
            <img alt="Movie Card" src={IMG_CDN_URL + posterPath}></img>
        </div>
    )
}

export default MovieCard;