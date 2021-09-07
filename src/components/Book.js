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
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
  removeBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: {
    id: Math.floor(Math.random() * 100),
    title: 'not defined',
    category: 'not defined',
  },
};

export default Book;
