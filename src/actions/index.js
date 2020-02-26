export const deleteComment = key => {
  return {
    type: "DELETE_COMMENT",
    key
  };
};

export const addComment = (author, commentText) => {
  console.log("HI");
  return {
    type: "ADD_COMMENT",
    author,
    commentText
  };
};
