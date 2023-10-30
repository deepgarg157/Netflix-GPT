import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

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