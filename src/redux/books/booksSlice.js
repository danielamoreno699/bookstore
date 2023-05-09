import bookItems from "@/helpers/bookItems";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    bookList : bookItems,
    progress : 0
}

export const bookSlice = createSlice({
    name:'books',
    initialState,
    reducers: {
            addBook: (state, action) => {
                state.bookList.push(action.payload)
            },
            removeBook: (state, action) => {
                const itemId = action.payload
                state.bookList = state.bookList.filter((book) =>  book.item_id !== itemId)
            },
            
    }
})


export const { addBook, removeBook } = bookSlice.actions

export default bookSlice.reducer