import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  bookList: undefined,
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },

    endLoading: (state) => {
      state.isLoading = false;
    },

    setBooks: (state, action) => {
      state.bookList = action.payload;
    },

    addBook: (state, action) => {
      state.isLoading = false;
      state.bookList.push(action.payload);
    },
    removeBook: (state, action) => {
      const itemId = action.payload;

      if (Array.isArray(state.bookList)) {
        state.bookList = state.bookList.filter((book) => book.item_id !== itemId);
      } else if (typeof state.bookList === 'object') {
        const updatedBookList = Object.fromEntries(
          Object.entries(state.bookList).filter(
            ([book]) => book.item_id !== itemId,
          ),
        );
        state.bookList = updatedBookList;
      }
    },

  },
});

export const {
  addBook, removeBook, startLoading, setBooks, endLoading,
} = bookSlice.actions;

export default bookSlice.reducer;
