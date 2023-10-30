import { checkValidData } from "../Utility/Validate";
import Header from "./Header"
import { useState, useRef } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utility/firebase";
import { useNavigate } from "react-router-dom";

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

        if (message) return;

        if (!isSignInForm) {
            // sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        } else {
            // sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }
        
    }
    
    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm)
    }
    
    return (
        <div>
            <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>

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