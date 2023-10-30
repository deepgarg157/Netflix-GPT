import { IMG_CDN_URL } from "../Utility/constants";

const MovieCard =({posterPath})=>{

    return(
        <div className="w-48 pr-3">
            <img className="cursor-pointer" alt="Movie Card" src={IMG_CDN_URL + posterPath}></img>
        </div>
    )
}

export default MovieCard;