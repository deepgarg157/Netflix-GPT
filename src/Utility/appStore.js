import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../Utility/userSlice"
import moviesReducer from "../Utility/moviesSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies : moviesReducer,
        }
    }
)

export default appStore;