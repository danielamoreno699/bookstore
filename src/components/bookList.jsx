
import {  useSelector } from "react-redux";
import Form from "./form";
import BookItem from "./bookItem";


const Books = () => {
  
  const {bookList} = useSelector((store) => store.book)



  return (
    <>
      {bookList.map((book) => {
        return  <BookItem key={book.item_id}{...book} />
      })

      }
     
      <Form />
    </>
  );
};

export default Books;
