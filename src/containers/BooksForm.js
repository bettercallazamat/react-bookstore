const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  const options = categories.map((category) => (
    <option value={category} key={category}>
      {category}
    </option>
  ));

  return (
    <form className="booksForm">
      <input type="text" className="titleInput" />
      <select>
        {options}
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BooksForm;
