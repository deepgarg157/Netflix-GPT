import { createSlice } from "@reduxjs/toolkit";

const confiSlice = createSlice({
    name:"config",
    initialState : {
        lang:"en"
    },
    reducers:{
        changeLanguage:(state, action)=>{
            state.lang = action.payload;
        }
    }
})

export default confiSlice.reducer;
export const {changeLanguage} = confiSlice.actions;