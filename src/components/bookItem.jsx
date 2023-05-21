import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import Modal from './modal';
import {
  startLoading, endLoading, setBooks, removeBook,
} from '../redux/books/booksSlice';
import { getBooksApi, deleteBookApi } from '../api/bookApi';

const BookItem = ({
  itemId, author, title, category,
}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [editingProgress, setEditingProgress] = useState(false);
  const [percentComplete, setPercentComplete] = useState(0);

  useEffect(() => {
    const savedPercentComplete = localStorage.getItem('percentComplete');
    if (savedPercentComplete) {
      setPercentComplete((savedPercentComplete));
    }
  }, [itemId]);

  const fetchBooks = async () => {
    dispatch(startLoading());
    const books = await getBooksApi();
    dispatch(endLoading());
    dispatch(setBooks(books));
  };

  const asyncRemove = async () => {
    try {
      await deleteBookApi(itemId);
      dispatch(removeBook(itemId));
    } catch (error) {
      return error;
    }
    return fetchBooks();
  };
  const handleDelete = () => {
    asyncRemove(itemId);
  };

  const handleProgress = () => {
    setEditingProgress(true);
    console.log('click');
  };

  const handleProgressUpdate = (e) => {
    if (e.key === 'Enter') {
      const enteredValue = e.target.value;
      if (enteredValue >= 0 && enteredValue <= 100) {
        setPercentComplete(enteredValue);
        localStorage.setItem('percentComplete', enteredValue);
      }
      setEditingProgress(false);
    }
  };

  const progressCircleStyle = {
    backgroundImage: `conic-gradient(#307bbe ${(percentComplete / 100) * 360}deg, transparent 0deg)`,

  };

  const handleEditChapter = () => {
  }

  return (
    <div className="container-bookItem">
      <div className="book-reference">
        <div className="book-info-card">
          <div className="book-text">
            <p className="category-txt">{category}</p>
            <h4 className="title-txt">{title}</h4>
            <p className="author-txt">{author}</p>
          </div>

          <ul className="ul-actions">
            <li>
              <button type="button" className="link-button" onClick={() => setIsOpen(true)}>
                Comments
              </button>
              {isOpen && <Modal setIsOpen={setIsOpen} itemId={itemId} />}

            </li>
            <div className="Line-2" />
            <li>
              <button type="button" className="link-button edit" onClick={handleEditChapter}> Edit</button>
            </li>
            <div className="Line-2" />
            <li>

              <button type="button" className="link-button" onClick={handleDelete}>
                Remove
              </button>

            </li>

          </ul>

        </div>
      </div>

      <div className="container-progress-circle">
        <div className="loading-status">

          <div className="spinner">
            <div className="Oval-2" style={progressCircleStyle} />

          </div>
          <div className="completed-status">
            <span className="-Percent-Complete">
              {percentComplete}
              %
            </span>

            <span className="Completed Text-Style-2">Completed</span>
          </div>

        </div>
        <div className="Line-3" />
        <div className="book-status">
          {
          editingProgress ? (
            <div>
              <input
                type="number"
                className="input-progress"
                placeholder="0%"
                onChange={(e) => setPercentComplete(`${e.target.value}`)}
                onKeyUp={handleProgressUpdate}
                min="0"
                max="100"
              />
              <span>%</span>
            </div>
          ) : (
            <span className="Current-Chapter Text-Style-7">
              {percentComplete}
              %
            </span>
          )
}
          <span className="Current-Lesson Text-Style-4">
            Chapter3:&ldquo;ALessonLearned&rdquo;
          </span>
          <button type="button" className="btn-update-progress" onClick={editingProgress ? handleProgressUpdate : handleProgress}>
            <span className="Update-progress">
              {editingProgress ? 'UPDATE' : 'UPDATE PROGRESS'}
            </span>
          </button>
        </div>

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
