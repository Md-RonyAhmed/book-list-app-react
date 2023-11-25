/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../../utils/utils";
import FormData from "../../components/FormData";
import BooksTable from "../../components/BooksTable";

export const App = () => {
  // main array of objects state || books state || books array of objects
  const [books, setBooks] = useState(getDataFromLocalStorage());

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <div className="wrapper">
      <h1>BookList App</h1>
      <p>Add and view your books using local storage</p>
      <div className="main">
        <div className="form-container">
          <FormData books={books} setBooks={setBooks} />
        </div>
        <div className="view-container">
          <BooksTable books={books} setBooks={setBooks} />
        </div>
      </div>
    </div>
  );
};

export default App;
