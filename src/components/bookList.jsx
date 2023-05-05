import Form from "./form";
import BookItem from "./bookItem";

const Books = () => {
  const bookInfo = {
    category: "action",
    title: "The Hunger Games",
    author: "Suzanne Collins",
    chapter: "Chapter 17",
    progress: "64%"
  };

  return (
    <>
      <BookItem bookInfo={bookInfo} />
      <Form />
    </>
  );
};

export default Books;
