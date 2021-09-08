import { useSelector, useDispatch } from 'react-redux';
import { removeAction, filterAction } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import userIcon from '../user-icon.png';

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
    <div className="BooksList">
      <header className="flex">
        <div className="header-leftside flex">
          <h1>Bookstore CMS</h1>
          <span>BOOKS</span>
          <CategoryFilter CategoryFilter={handleFilterChange} />
        </div>
        <img src={userIcon} alt="user-icon" />
      </header>
      <main>
        {
          filteredBooks.map((book) => (
            <Book
              key={book.id}
              book={book}
              removeBook={handleRemoveBook}
            />
          ))
        }
      </main>
    </div>
  );
};

export default BooksList;
