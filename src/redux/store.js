import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {

    categories: categoriesReducer,
    book: bookReducer,
  },
});

export default store;
