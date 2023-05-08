import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addBook } from "@/redux/books/booksSlice";
import Form from "./form";
import BookItem from "./bookItem";

const Books = () => {

  const [bookInfo, SetBookInfo] = useState({
    category: "",
    title: "",
    author: "",
    Currentchapter: "",
    progress: ""
  });

  return (
    <>
      <BookItem bookInfo={bookInfo} />
      <Form />
    </>
  );
};

export default Books;
