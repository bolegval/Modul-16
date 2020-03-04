const newAuthor = (state = { text: "" }, action) => {
  switch (action.type) {
    case "ADD_NEW_AUTHOR":
      return {
        text: action.text
      };

    default:
      return state;
  }
};

export default newAuthor;
