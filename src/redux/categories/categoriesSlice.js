import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    categories : [],
    
}

export const categoriesSlice = createSlice({
    name:'book',
    initialState,
    reducers: {
            
            
    }
})


export const { addBook, removeBook } = categoriesSlice.actions

export default categoriesSlice.reducer