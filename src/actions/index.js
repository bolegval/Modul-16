let commentId = 0;

let date = () => {
  const newDate = new Date();
  return newDate.toLocaleString();
};

export const addNewComment = (author, commentText) => {
  return {
    type: "ADD_NEW_COMMENT",
    id: commentId++,
    author,
    dateComment: date(),
    commentText
  };
};

export const addNewAuthor = text => {
  return {
    type: "ADD_NEW_AUTHOR",
    text
  };
};

export const addNewCommentText = text => {
  return {
    type: "ADD_NEW_COMMENT_TEXT",
    text
  };
};

export const deleteComment = id => {
  return {
    type: "DELETE_COMMENT",
    id
  };
};

export const addButton = add => {
  return {
    type: "ADD_COMMENT_ACTIVE",
    add
  };
};
