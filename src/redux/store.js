import { configureStore } from "@reduxjs/toolkit"
import bookReducer from "./books/booksSlice"
import categoriesReducer from "./categories/categoriesSlice"

export const store = configureStore({
    reducer: {

        categories: categoriesReducer,
        book: bookReducer,
    }
})