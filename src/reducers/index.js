import { combineReducers } from "redux";
import comments from "./commentsList";
import addComment from "./addComment";

const commentsApp = combineReducers({
  comments,
  addComment
});

export default commentsApp;
