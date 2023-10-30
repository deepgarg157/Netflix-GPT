import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utility/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utility/userSlice";

const appLayout = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/browse",
        element: <Browse />
    }
])

const Body = () => {

    return (
        <div>
            <RouterProvider router={appLayout} />
        </div>
    )
}

export default Body;