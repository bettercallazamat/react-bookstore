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

  let title = '';
  let category = '';

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
  };

  return (
    <form className="booksForm" onSubmit={handleSubmit}>
      <input type="text" name="title" onChange={handleChange} className="titleInput" />
      <select name="category" onChange={handleChange}>
        <option disabled hidden selected>Choose category</option>
        {options}
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BooksForm;
