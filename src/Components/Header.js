import smileylogo from "../Assests/netflix-smiley-logo.webp"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utility/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utility/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../Utility/constants";
import { toggleGptSearchView } from "../Utility/gptSlice";
import { changeLanguage } from "../Utility/confiSlice";


const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const showLanguage = useSelector(store => store.gpt.showGptSearch);

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
        });
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate("/browse")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
        });

        return () => unsubcribe();

    }, [])

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView())
    }

    const handleChangeLanguage = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    return (
        <div className="flex justify-between bg-gradient-to-l from-black w-screen">
            <div className="z-10">
                <img className="w-56 p-2" src={LOGO}></img>
            </div>

            <div className="flex">

                {showLanguage && <select className="my-8 mx-2 rounded-sm px-3" onChange={handleChangeLanguage}>
                    {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                </select>}
                
                <button className="px-4 bg-gray-500 rounded-md h-10 mt-8 text-white font-bold" onClick={handleGptSearchClick}>{showLanguage ? "Home Page" : "GPT Search"}</button>
                <img src={smileylogo} className="w-10 my-8 mx-2"></img>
                <button className="text-white px-4" onClick={handleSignOut}>Sign out</button>

            </div>

        </div>


    )
}

export default Header;