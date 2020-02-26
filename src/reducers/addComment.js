const addComment = (state, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        {
          author: action.author,
          commentText: action.commentText
        }
      ];
    default:
      return state;
  }
};
