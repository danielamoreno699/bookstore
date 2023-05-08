import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Form from "./form";
import BookItem from "./bookItem";

const Books = () => {

  const [bookInfo, SetBookInfo] = useState({
    category: "",
    title: "",
    author: "",
    chapter: "",
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
