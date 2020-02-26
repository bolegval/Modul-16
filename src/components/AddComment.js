import React from "react";
import { addComment } from "../actions/index";

const AddComment = ({ addComment, author, commentText }) => {
  return (
    <div>
      <button
        className="btn__add-comment"
        onClick={ev => {
          addComment(author, commentText);
        }}
      >
        Добавить комментарий
      </button>
      <div className="add-comment">
        <p>Ваше имя:</p>
        <input
          type="text"
          className="comment__author"
          placeholder="Ваше имя"
          onChange={ev => {
            author: ev.target.value;
          }}
        />
        <p>Ваш комментарий:</p>
        <textarea
          type="text"
          className="comment__text"
          placeholder="Напишите комментарий"
          onChange={ev => {
            commentText: ev.target.value;
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default AddComment;
