import BookRow from "./BookRow";

/* eslint-disable react/prop-types */
export default function BooksTable({books,setBooks}) {
    // delete book from LocalStorage
  const deleteBook = (isbn) => {
    const filteredBooks = books.filter((book) => book.isbn !== isbn);
    setBooks(filteredBooks);
  };
  return (
    <div>
      {books.length > 0 && (
        <>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>ISBN#</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Published year</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <BookRow
                    key={book.isbn}
                    book={book}
                    deleteBook={deleteBook}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <button
            className="btn btn-danger btn-md"
            onClick={() => setBooks([])}
          >
            Remove All
          </button>
        </>
      )}
      {books.length < 1 && <div>No books are added yet!</div>}
    </div>
  );
}
