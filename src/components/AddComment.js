import React from "react";
import {
  addNewComment,
  addNewAuthor,
  addNewCommentText,
  addButton
} from "../actions/index";
const AddComment = ({
  addNewComment,
  addNewAuthor,
  newAuthor,
  addNewCommentText,
  newCommentText,
  addButton,
  addActive
}) => {
  return (
    <div>
      <button
        className="btn__add-comment"
        onClick={() => {
          addNewComment(newAuthor.text, newCommentText.text);
          addNewAuthor("");
          addNewCommentText("");
          addButton(addActive.add);
        }}
      >
        Добавить комментарий
      </button>
      {addActive.add ? (
        <div className="add-comment">
          <p>Ваше имя:</p>
          <input
            type="text"
            className="comment__author"
            placeholder="Ваше имя"
            value={newAuthor.text}
            onChange={ev => {
              addNewAuthor(ev.target.value);
            }}
          />
          <p>Ваш комментарий:</p>
          <textarea
            type="text"
            className="comment__text"
            placeholder="Напишите комментарий"
            value={newCommentText.text}
            onChange={ev => {
              addNewCommentText(ev.target.value);
            }}
          ></textarea>
        </div>
      ) : null}
    </div>
  );
};

export default AddComment;
