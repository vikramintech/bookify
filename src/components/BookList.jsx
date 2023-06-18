// To render multiple BookShow
import BookShow from "./BookShow";

const BookList = ({ books, editBook, deleteBook }) => {
  // console.log(books);
  const renderList = books.map((book) => (
    <BookShow
      key={book.id}
      book={book}
      editBook={editBook}
      deleteBook={deleteBook}
    />
  ));

  return <div>{renderList}</div>;
};

export default BookList;