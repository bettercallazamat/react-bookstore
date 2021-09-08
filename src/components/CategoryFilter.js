import React from 'react';
import PropTypes from 'prop-types';

const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = ({ CategoryFilter }) => {
  const options = categories.map((category) => (
    <option value={category} key={category}>
      {category}
    </option>
  ));

  return (
    <select className="CategoryFilter pointer" onChange={CategoryFilter}>
      {options}
    </select>
  );
};

CategoryFilter.propTypes = {
  CategoryFilter: PropTypes.func.isRequired,
};
export default CategoryFilter;
