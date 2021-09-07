import { useSelector, useDispatch } from 'react-redux';
import { removeAction } from '../actions';
import Book from '../components/Book';

const BooksList = () => {
  const books = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(removeAction(book));
  };

  return (
    <div>
      <h2>Books List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((book) => (
              <Book
                key={book.id}
                book={book}
                removeBook={handleRemoveBook}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
