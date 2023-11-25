/* eslint-disable react/prop-types */
import { useState } from "react";

export default function FormData({ books, setBooks }) {
  // input field states
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pubYear, setPubYear] = useState("");

  // clear inputs
  const clearInputs = () => {
    setTitle("");
    setAuthor("");
    setIsbn("");
    setPubYear("");
  };

  // form submit event
  const handleSubmit = (e) => {
    e.preventDefault();

    // creating a book object
    const book = {
      title,
      author,
      isbn,
      pubYear,
    };
    setBooks([...books, book]);
    clearInputs();
  };

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control"
        required
      ></input>
      <br></br>
      <label>Author</label>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="form-control"
        required
      ></input>
      <br></br>
      <label>ISBN#</label>
      <input
        type="text"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
        className="form-control"
        required
      ></input>
      <br></br>
      <label>Published year</label>
      <input
        type="text"
        value={pubYear}
        onChange={(e) => setPubYear(e.target.value)}
        className="form-control"
        required
      ></input>
      <br></br>
      <button type="submit" className="btn btn-success btn-md">
        ADD BOOK
      </button>
    </form>
  );
}
