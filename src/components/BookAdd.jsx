// To show book add form
import { useState } from "react";

const BookAdd = ({ addBook }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ title: inputTitle, description: inputDescription });
    setInputTitle("");
    setInputDescription("");
  };

  return (
    <form className="fixed-bottom p-2" onSubmit={handleSubmit}>
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
        Add
      </button>
    </form>
  );
};

export default BookAdd;