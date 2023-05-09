

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
