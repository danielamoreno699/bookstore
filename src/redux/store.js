import { configureStore } from "@reduxjs/toolkit"
import bookReducer from './books/book/bookSlice'
import categoriesReducer from './categories/categories/categoriesSlice'

export const store = configureStore({
    reducer: {

        categories: categoriesReducer,
        book: bookReducer,
    }
})