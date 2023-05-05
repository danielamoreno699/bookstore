

const BookItem = () => {
    return (
      <div className="container-bookItem">
        <div className="book-reference">
          <div className="book-info-card">
            <div className="book-text">
              <p>Action</p>
              <h4>The Hunger Games</h4>
              <p>Suzzane Collins</p>
            </div>
            <div className="actions">
              <ul className="ul-actions">
                <li>Comments</li>
                <li>
                    <button>Delete  Book</button>
                </li>
                <li>Edit</li>
              </ul>
            </div>
          </div>
  
  
        </div>
  
        <div className="loading-status">
            <div className="loadingSpinner"></div>
            <div className="completed-status">
                <h4>64%</h4>
                <p>completed</p>
            </div>
  
          </div>
  
        <div className="book-status">
          <p>CURRENT CHAPTER</p>
          <p>Chapter 17</p>
          <button>Update Progress</button>
          
  
        </div>
  
  
      </div>
    )
  }
  
  export default BookItem;