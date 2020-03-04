const newCommentText = (state = { text: "" }, action) => {
  switch (action.type) {
    case "ADD_NEW_COMMENT_TEXT":
      return {
        text: action.text
      };

    default:
      return state;
  }
};

export default newCommentText;
