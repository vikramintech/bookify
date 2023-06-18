import { useState } from "react";

const BookEdit = ({ book, editBook, setShowEdit }) => {
  const [inputTitle, setInputTitle] = useState(book.title);
  const [inputDescription, setInputDescription] = useState(book.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    editBook(book.id, {
      title: inputTitle,
      description: inputDescription,
      id: book.id,
    });
    setInputTitle("");
    setInputDescription("");
    setShowEdit(false);
  };

  return (
    <div className="card mb-2 p-3">
      <form className="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Enter book title"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Enter book description"
            value={inputDescription}
            onChange={(e) => setInputDescription(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Edit
        </button>
      </form>
    </div>
  );
};

export default BookEdit;