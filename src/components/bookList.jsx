import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "./form";
import BookItem from "./bookItem";
import { getBooks } from "@/redux/books/booksSlice";


const Books = () => {
  
  const { bookList, error } = useSelector((store) => store.book);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

 

  if (error) {
    return <p>{error}</p>;
  }

  const allBooks = Object.values(bookList).flat();

  return (
    <>
     
        {allBooks.map((book) => (
          <BookItem key={book.item_id} {...book} />
        ))}
      
      <Form />
    </>
  );
};

export default Books;
