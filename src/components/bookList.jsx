import {  useEffect } from "react";
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

  
  const keys = Object.keys(bookList);
  const bookData = keys.map((key) => {
    const bookInfo = bookList[key][0];
    return {
      key: key,
      author: bookInfo.author,
      title: bookInfo.title,
      category: bookInfo.category,
    };
  });

  if (bookData.length === 0) {
    return (
      <>
        <p>No books found.</p>
        <Form />
      </>
    );
  }

  return (
    <>

{bookData.map((book) => (
        <BookItem key={book.key} item_id={book.key} author={book.author} title={book.title} category={book.category} />
      ))}
        
      <Form />
    </>
  );
};

export default Books;
