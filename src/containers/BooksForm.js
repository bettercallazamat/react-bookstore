import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAction } from '../actions/index';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  const options = categories.map((category) => (
    <option value={category} key={category}>
      {category}
    </option>
  ));

  const [book, setBook] = useState({ title: '', category: '' });
  const dispatch = useDispatch();

  let title;
  let category;

  const handleChange = (e) => {
    if (e.target.name === 'title') {
      title = e.target.value;
      setBook((state) => ({ ...state, title }));
    }
    if (e.target.name === 'category') {
      category = e.target.value;
      setBook((state) => ({ ...state, category }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAction({ ...book, id: Math.floor(Math.random() * 100) }));
    setBook({ title: '', category: '' });
    e.target.reset();
  };

  return (
    <div className="form-container">
      <h2 className="title">ADD NEW BOOK</h2>
      <form className="BooksForm" onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleChange} className="titleInput" placeholder="Book title" />
        <select name="category" onChange={handleChange}>
          {options}
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BooksForm;
