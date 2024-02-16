import { useDispatch, useSelector } from "react-redux";
import lang from "../Utility/languageConstants";
import { useRef } from "react";
import openai from "../Utility/openai";
import { API_OPTIONS } from "../Utility/constants";
import { addGptMovieResult } from "../Utility/gptSlice";

const GptSearchBar = () => {

    const langChange = useSelector(store => store.config.lang)
    const searchText = useRef(null)
    const dispatch = useDispatch()

    // search movie in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();

        return json.results;
    };

    const handleGptSearchClick = async () => {

        // Make an API Call to GPT API and movie result
        const gptQuery =
            "Act as a Movie Recommendation system and suggest some movies for the query : " +
            searchText.current.value +
            ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        console.log(gptResults.choices);

        if (!gptResults.choices) {
            // TODO: Write Error Handling
        }

        console.log(gptResults.choices?.[0]?.message?.content);

        // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

        // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

        // For each movie I will search TMDB API

        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        // [Promise, Promise, Promise, Promise, Promise]

        const tmdbResults = await Promise.all(promiseArray);

        console.log(tmdbResults);

        dispatch(
            addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
        );
    }


    return (
        <div className="flex justify-center pt-[10%] ">
            <form className="bg-black w-10/12 md:w-1/2 grid grid-cols-12 rounded-md" onSubmit={(e) => e.preventDefault()}>
                <input ref={searchText} type="text" placeholder={lang[langChange].gptSearchPlaceholder} className="p-3 m-4 col-span-9 text-[12px] md:text-lg"></input>
                <button className="bg-red-700 px-5 py-3 mx-0 mr-3 md:mx-2 my-4 text-sm md:text-lg text-white rounded-lg col-span-3 text-2xl" onClick={handleGptSearchClick}>{lang[langChange].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;