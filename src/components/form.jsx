import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBookApi, getBooksApi } from '../api/bookApi';
import { startLoading, endLoading, setBooks } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const categories = ['science-fiction', 'horror', 'action', 'romance'];

  const [isLoading, setIsLoading] = useState(false);

  const [formValues, setformValues] = useState({
    title: '',
    author: '',
    categores: '',
  });

  const onInputChange = ({ target }) => {
    setformValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const fetchBooks = async () => {
    dispatch(startLoading());
    const books = await getBooksApi();
    dispatch(endLoading());
    dispatch(setBooks(books));
  };

  const postBook = async (bookData) => {
    await postBookApi(bookData);

    setformValues({
      title: '',
      author: '',
      category: '',
    });
    setIsLoading(false);
    fetchBooks();
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (
      formValues.title.trim().length <= 0
      || formValues.author.trim().length <= 0
    ) {
      return;
    }

    const bookData = {
      ...formValues,
      item_id: uuidv4(),
    };

    postBook(bookData);
  };

  if (isLoading) {
    return (
      <div className="alert alert-success loading" role="alert">
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="form-container">
        <span className="Title Text-Style-10">
          ADD NEW BOOK
        </span>

        <form className="form" onSubmit={onSubmit}>

          <div className="input-items">
            <input
              type="text"
              placeholder="book title"
              value={formValues.title}
              name="title"
              onChange={onInputChange}
            />

            <input
              type="text"
              placeholder="add Author"
              value={formValues.author}
              name="author"
              onChange={onInputChange}
              className="author-input"
            />

          </div>

          <select name="category" placeholder="Choose one..." value={formValues.category} onChange={onInputChange} className="category-selector">
            <option value="">Choose Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <button className="btn-submit" type="submit">
            <span className="ADD-BOOK Text-Style">
              ADD BOOK
            </span>
          </button>

        </form>
      </div>
    </>
  );
};

export default Form;
