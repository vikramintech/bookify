// To show a single book
import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, editBook, deleteBook }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleButtonEdit = () => {
    setShowEdit(true);
  };

  const handleButtonClose = () => {
    deleteBook(book.id);
  };

  return showEdit ? (
    <BookEdit book={book} editBook={editBook} setShowEdit={setShowEdit} />
  ) : (
    <div className="card mb-2">
      <div>
        <button className="btn" type="button" onClick={handleButtonEdit}>
          ✏️
        </button>
        <button className="btn" type="button" onClick={handleButtonClose}>
          ❌
        </button>
      </div>
      <div className="card-body">
        <div className="card-title">
          <h3>{book.title}</h3>
        </div>
        <div className="card-text">
          <p>{book.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookShow;