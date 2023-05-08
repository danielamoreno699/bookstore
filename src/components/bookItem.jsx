import PropTypes from 'prop-types';
const BookItem = ({ category, title, author, chapter, progress } ) => {
   
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
                <button>Comments</button>
                </li>
                <li>
                  <button>Delete Book</button>
                </li>
                <li>
                <button>Edit</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <div className="loading-status">
          <div className="loadingSpinner"></div>
          <div className="completed-status">
            <h4>{progress}</h4>
            <p>completed</p>
          </div>
        </div>
  
        <div className="book-status">
          <p>CURRENT CHAPTER</p>
          <p>{chapter}</p>
          <button>Update Progress</button>
        </div>
      </div>
    );
  };
  BookItem.propTypes = {
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    chapter: PropTypes.string.isRequired,
    progress: PropTypes.string.isRequired,
  };
  export default BookItem;
  