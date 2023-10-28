import { checkValidData } from "../Utility/Validate";
import Header from "./Header"
import { useState, useRef } from "react"

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // Validate form data
        // console.log(email.current.value)
        // console.log(password.current.value)

        const message = checkValidData(email.current.value, password.current.value);

        setErrorMessage(message)

    }

    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div>
            <img className="w-52 px-4 absolute" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"></img>

            <form onSubmit={(e) => e.preventDefault()} className="bg-black w-4/12 absolute top-32 left-1/3 rounded-md bg-opacity-80 text-white">
                <h1 className="text-white px-20 m-4 text-2xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                <div className="text-center flex flex-col">
                    {!isSignInForm && <input type="text" placeholder="Full Name" className="px-2 py-2 mx-24 my-5 rounded-md bg-gray-800"></input>}

                    <input ref={email} type="email" placeholder="Email or phone number" className="px-2 py-2 mx-24 rounded-md bg-gray-800"></input>

                    <input ref={password} type="password" placeholder="Password" className="px-2 py-2 mx-24 my-5 rounded-md bg-gray-800"></input>

                    <p className="text-red-700">{errorMessage}</p>

                    <button className="text-white bg-red-700 px-2 py-2 mx-24 my-5 rounded-md" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                    <p className="my-3 cursor-pointer" onClick={toggleSignIn}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already account? Sign In Now"}</p>
                </div>
            </form>

            <Header />
        </div>
    )
}

export default Login;