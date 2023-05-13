import '../styles/modal.css';
import { useState, useEffect } from 'react';
import { RiCloseLine } from 'react-icons/ri';

const Modal = ({ setIsOpen, itemId }) => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem(`comments_${itemId}`));
    if (storedComments) {
      setCommentsList(JSON.parse(storedComments));
    }
  }, [itemId]);

  const onSubmit = (event) => {
    event.preventDefault();

    if (comment.trim() === '') {
      return;
    }

    const newComment = {
      id: itemId,
      date: Date.now(),
      text: comment.trim(),
    };

    const updatedCommentsList = [...commentsList, newComment];
    setCommentsList(updatedCommentsList);
    setComment('');

    localStorage.setItem(`comments_${itemId}`, JSON.stringify(updatedCommentsList));
  };

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Please leave any comment</h5>
          </div>
          <button type="button" className="closeBtn" onClick={() => setIsOpen(false)}>
            X
          </button>
          <div className="modalContent">

            <div className="txt-box">
              <div className="comments">
                {commentsList.map((comment) => (
                  <div key={comment.itemId}>
                    {' '}
                    {comment.date}
                    {' '}
                    -
                    {' '}
                    {comment.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div className="modalActions">
              <textarea
                className="txt-area-modal"
                name="txt-area"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
              />
              <div className="actionsContainer">
                <button type="submit" className="postBtn">
                  Post comment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
