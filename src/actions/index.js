const CREATE_BOOK = book => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const REMOVE_BOOK = id => ({
  type: 'REMOVE_BOOK',
  payload: id,
});

const CHANGE_FILTER = category => ({
  type: 'CHANGE_FILTER',
  payload: category,
});

export { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER };
