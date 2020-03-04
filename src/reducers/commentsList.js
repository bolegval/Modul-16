const comments = (
  state = JSON.parse(localStorage.getItem("commentsList")),
  action
) => {
  switch (action.type) {
    case "ADD_NEW_COMMENT":
      if (action.author !== "" && action.commentText !== "") {
        return [
          ...state,
          {
            id: action.id,
            author: action.author,
            dateComment: action.dateComment,
            commentText: action.commentText
          }
        ];
      }
    case "DELETE_COMMENT":
      return state.filter(item => item.id !== action.id);

    default:
      return state;
  }
};

export default comments;
