const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return { books: [...state, action.payload] };

    case 'REMOVE_BOOK':
      return state.filter(({ bookID }) => bookID !== action.payload);

    default:
      return state;
  }
};

export default bookReducer;
