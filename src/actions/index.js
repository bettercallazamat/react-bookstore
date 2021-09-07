const createAction = (book) => ({
  type: 'CREATE_BOOK',
  book,
});

const removeAction = (book) => ({
  type: 'REMOVE_BOOK',
  book,
});

const filterAction = (filter) => ({
  type: 'CHANGE_FILTER',
  filter,
});

export { createAction, removeAction, filterAction };
