import { useSelector } from 'react-redux';
import Book from '../components/Book';

const BooksList = () => {
  const books = useSelector((state) => state.bookReducer);
  return (
    <div>
      <h2>Books List</h2>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((book) => (
              <Book
                key={book.id}
                id={book.id}
                title={book.title}
                category={book.category}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
