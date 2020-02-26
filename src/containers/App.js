import React from "react";
import { connect } from "react-redux";
import CommentList from "../components/CommentsList";
import AddComment from "../components/AddComment";
import { deleteComment, addComment } from "../actions/index";
import style from "../style/style.css";

let App = ({ comments, deleteComment, addComment }) => {
  return (
    <div className="comments">
      <CommentList comments={comments} deleteComment={deleteComment} />
      <AddComment addComment={addComment} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteComment: key => dispatch(deleteComment(key)),
    addComment: (author, commentText) =>
      dispatch(addComment(author, commentText))
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
