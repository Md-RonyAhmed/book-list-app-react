/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";

export default function BookRow({ book, deleteBook }) {
  const { isbn, author, title, pubYear } = book;
  return (
    <tr>
      <td>{isbn}</td>
      <td>{title}</td>
      <td>{author}</td>
      <td>{pubYear}</td>
      <td className="delete-btn" onClick={() => deleteBook(isbn)}>
        <MdDelete color="red" />
      </td>
    </tr>
  );
}
