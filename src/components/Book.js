import PropTypes from 'prop-types';
import '../styles/Book.css';
import '../styles/circular-prog-bar.css';

function Book({ book, removeBook }) {
  return (
    <div className="Book">
      <div className="book-main">
        <span className="book-category">{book.category}</span>
        <h2>{book.title}</h2>
        <span className="book-author">Author</span>
        <ul className="books-actions">
          <li>Comments</li>
          <li><button type="button" onClick={() => removeBook(book)}>Remove</button></li>
          <li>Edit</li>
        </ul>
      </div>
      <div className="book-progress">
        <div className="book-progress-chart">
          <div className="progress-circle p64">
            <div className="left-half-clipper">
              <div className="first50-bar" />
              <div className="value-bar" />
            </div>
          </div>
          <div>
            <span className="percentage">64%</span>
            <span>Completed</span>
          </div>
        </div>
        <div className="vertical-line" />
        <div className="book-progress-chapter">
          <span className="title">CURRENT CHAPTER</span>
          <span className="chapter-num">Chapter 17</span>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
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
