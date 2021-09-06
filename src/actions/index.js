const createAction = (book) => ({
  type: 'CREATE_BOOK',
  book,
});

const removeAction = (book) => ({
  type: 'REMOVE_BOOK',
  book,
});

export { createAction, removeAction };
