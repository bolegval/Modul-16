import React from "react";
import { deleteComment } from "../actions/index";

const CommentList = ({ comments, deleteComment }) => {
  return (
    <ul className="comments__list">
      {comments.map(item => {
        return (
          <li key={item.id} className="comments__item">
            <div>
              <p>
                <span>Автор: {item.author} </span>
                <span>Дата: {item.dateComment} </span>
                {item.commentText}
              </p>
              <button
                className="edit"
                onClick={() => {
                  deleteComment(item.id);
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
