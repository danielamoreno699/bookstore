import { configureStore } from "@reduxjs/toolkit"
import bookReducer from './books/book/bookSlice'

export const store = configureStore({
    reducer: {

        book: bookReducer,
    }
})