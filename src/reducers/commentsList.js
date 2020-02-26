const comments = (state = [], action) => {
  switch (action.type) {
    case "DELETE_COMMENT":
      return state.filter((item, key) => key !== action.key);

    default:
      return state;
  }
};

export default comments;
