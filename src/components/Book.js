import PropTypes from 'prop-types';

function Book({ book, removeBook }) {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button type="button" onClick={() => removeBook(book)}>Delete</button>
      </td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
