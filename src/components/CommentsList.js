import React from "react";
import { deleteComment } from "../actions/index";

const CommentList = ({ comments, deleteComment }) => {
  return (
    <ul className="comments__list">
      {comments.map((item, index) => {
        return (
          <li key={index} className="comments__item">
            <div>
              <p>
                <span>Автор: {item.author} </span>
                {/* <span>Дата: {comments.dateComment} </span> */}
                {item.commentText}
              </p>
              <button
                className="edit"
                onClick={ev => {
                  deleteComment(index);
                }}
              >
                Удалить
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
