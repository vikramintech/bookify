// Top level component
import { useState } from "react";
import BookAdd from "./components/BookAdd";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  // title and description
  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length }]);
  };

  // id and book
  const editBook = (id, book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([...filteredBooks, book]);
  };

  // id
  const deleteBook = (id) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([...filteredBooks]);
  };

  return (
    <div className="container">
      <h1 className="display-1">Books</h1>
      <BookAdd addBook={addBook} />
      <BookList books={books} editBook={editBook} deleteBook={deleteBook} />
    </div>
  );
};

export default App;