const CREATE_BOOK = book => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const REMOVE_BOOK = id => ({
  type: 'REMOVE_BOOK',
  payload: id,
});

export { CREATE_BOOK, REMOVE_BOOK };
