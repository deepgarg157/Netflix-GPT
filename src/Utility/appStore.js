import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../Utility/userSlice"

const appStore = configureStore(
    {
        reducer: {
            user: userReducer
        }
    }
)

export default appStore;