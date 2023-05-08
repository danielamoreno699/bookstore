import { createSlice } from "@reduxjs/toolkit";


const initialState = []

export const bookSlice = createSlice({
    name:'book',
    initialState,
    reducers: {
            addBook: (state, action) => {
                state.push(action.payload)
            }
    }
})


export default bookSlice.reducer