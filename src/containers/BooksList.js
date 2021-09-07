import { useSelector, useDispatch } from 'react-redux';
import { removeAction, filterAction } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = () => {
  const books = useSelector((state) => state.bookReducer);
  const filter = useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(removeAction(book));
  };

  const handleFilterChange = (e) => {
    dispatch(filterAction(e.target.value));
  };

  const filteredBooks = (filter !== 'All') ? books.filter((book) => book.category === filter) : books;

  return (
    <div>
      <h2>Books List</h2>
      <div className="category-selection-container">
        <CategoryFilter CategoryFilter={handleFilterChange} />
      </div>
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
            filteredBooks.map((book) => (
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
