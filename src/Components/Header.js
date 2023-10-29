import smileylogo from "../Assests/netflix-smiley-logo.webp"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth";
import {auth} from "../Utility/firebase"

const Header = () => {

    const navigate = useNavigate()
    // const dispatch = useDispatch

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            navigate("/error")
        });
    }
    return (
        <div className="flex justify-between bg-gradient-to-t from-black">
            <div className="z-10">
                <img className="w-56 p-2" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"></img>
            </div>

            <div className="flex">
                <img src={smileylogo} className="w-10 my-8 mx-2"></img>
                <button className="text-white px-4" onClick={handleSignOut}>Sign out</button>
            </div>

        </div>


    )
}

export default Header;