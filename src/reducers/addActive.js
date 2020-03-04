const addActive = (state = { add: false }, action) => {
  switch (action.type) {
    case "ADD_COMMENT_ACTIVE":
      return { add: !action.add };

    default:
      return state;
  }
};

export default addActive;
