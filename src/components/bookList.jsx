
import { useDispatch, useSelector } from "react-redux";
import Form from "./form";
import BookItem from "./bookItem";


const Books = () => {

  const bookInfo = {
    title: '',
    author: '',
    chapter: ''
  }


  return (
    <>
      <BookItem bookInfo={bookInfo} />
      <Form />
    </>
  );
};

export default Books;
