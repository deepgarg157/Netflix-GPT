import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import { BG_URL } from "../Utility/constants";

const GptSearch = ()=>{
    return(
        <div>
            <img className="absolute -z-10" src={BG_URL}></img>
           <GptSearchBar />
           <GptMoviesSuggestion />
        </div>
    )
}

export default GptSearch;