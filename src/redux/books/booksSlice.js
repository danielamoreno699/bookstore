import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    bookList : [],
    progress : 0
}

export const bookSlice = createSlice({
    name:'book',
    initialState,
    reducers: {
            addBook: (state, action) => {
                state.push(action.payload)
            },
            removeBook: (state, action) => {
                const itemId = action.payload
                state.cartItems = state.cartItems.filter((item) =>  item.id !== itemId)
            },
            
    }
})


export const { addBook, removeBook } = bookSlice.actions

export default bookSlice.reducer