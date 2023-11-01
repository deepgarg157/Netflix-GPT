import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../Utility/userSlice"
import moviesReducer from "../Utility/moviesSlice";
import gptReducer from "../Utility/gptSlice"
import configReducer from "../Utility/confiSlice"

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies : moviesReducer,
            gpt : gptReducer,
            config:configReducer,
        }
    }
)

export default appStore;