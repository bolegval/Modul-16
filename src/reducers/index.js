import { combineReducers } from "redux";
import comments from "./commentsList";
import newAuthor from "./newAuthor";
import newCommentText from "./newCommentText";
import addActive from "./addActive";

const commentsApp = combineReducers({
  comments,
  newAuthor,
  newCommentText,
  addActive
});

export default commentsApp;
