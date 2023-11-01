import { useSelector } from "react-redux";
import lang from "../Utility/languageConstants";

const GptSearchBar = ()=>{

    const langChange =  useSelector(store => store.config.lang)
    return(
        <div className="flex justify-center pt-[10%] ">
            <form className="bg-black w-1/2 grid grid-cols-12 rounded-md">
                <input type="text" placeholder={lang[langChange].gptSearchPlaceholder} className="p-3 m-4 col-span-9"></input>
                <button className="bg-red-700 px-5 py-3 mx-2 my-4 text-white rounded-lg col-span-3 text-2xl">{lang[langChange].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;