import React from "react";
import { connect } from "react-redux";
import CommentList from "../components/CommentsList";
import AddComment from "../components/AddComment";
import {
  deleteComment,
  addNewComment,
  addNewAuthor,
  addNewCommentText,
  addButton
} from "../actions/index";
import style from "../style/style.css";

let App = ({
  comments,
  deleteComment,
  addNewComment,
  addNewAuthor,
  newAuthor,
  addNewCommentText,
  newCommentText,
  addButton,
  addActive
}) => {
  return (
    <div className="comments">
      <CommentList comments={comments} deleteComment={deleteComment} />
      <AddComment
        addNewComment={addNewComment}
        addNewAuthor={addNewAuthor}
        newAuthor={newAuthor}
        addNewCommentText={addNewCommentText}
        newCommentText={newCommentText}
        addButton={addButton}
        addActive={addActive}
      />
    </div>
  );
};

const mapStateToProps = state => {
  if (JSON.parse(localStorage.getItem("commentsList")) === null) {
    localStorage.setItem("commentsList", JSON.stringify((state.comments = [])));
  } else {
    localStorage.setItem("commentsList", JSON.stringify(state.comments));
  }

  return {
    comments: state.comments,
    newAuthor: state.newAuthor,
    newCommentText: state.newCommentText,
    addActive: state.addActive
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteComment: id => dispatch(deleteComment(id)),
    addNewComment: (author, commentText) =>
      dispatch(addNewComment(author, commentText)),
    addNewAuthor: text => dispatch(addNewAuthor(text)),
    addNewCommentText: text => dispatch(addNewCommentText(text)),
    addButton: add => dispatch(addButton(add))
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
