import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getBooks, deleteBook } from '../redux/books/booksSlice';

const BookItem = ({
  itemId, author, title, category,
}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getBooks();
  }, [dispatch]);

  const handleDelete = () => {
    setIsLoading(true);
    dispatch(deleteBook(itemId)).then(() => {
      setIsLoading(false);

      dispatch(getBooks());
    }).catch(() => {
      setIsLoading(false);
    });
  };

  if (isLoading) {
    return <div className="alert alert-success loading" role="alert">Loading...</div>;
  }

  return (
    <div className="container-bookItem">
      <div className="book-reference">
        <div className="book-info-card">
          <div className="book-text">
            <p>{category}</p>
            <h4>{title}</h4>
            <p>{author}</p>
          </div>
          <div className="actions">
            <ul className="ul-actions">
              <li>
                <button type="button">Comments</button>
              </li>
              <li>
                <button type="button" onClick={handleDelete}>
                  Delete Book
                </button>
              </li>
              <li>
                <button type="button">Edit</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="loading-status">
        <div className="loadingSpinner" />
        <div className="completed-status">
          <h4> 17%</h4>
          <p>completed</p>
        </div>
      </div>

      <div className="book-status">
        <p>CURRENT CHAPTER</p>
        <p>chapter 1</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
};
BookItem.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};
export default BookItem;
