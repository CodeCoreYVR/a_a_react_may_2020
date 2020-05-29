import React from "react";

// AnswerDetails component
export const AnswerDetails = (props) => {
  return (
    <div className="AnswerDetails">
      <p>{props.body}</p>
      <div className="date">Answered {props.created_at.toLocaleString()}</div>
      <div className="author">By {props.author.full_name}</div>
      <button
        onClick={() => props.onDeleteClick(props.id)}
        className="ui right floated red button"
      >
        Delete
      </button>
    </div>
  );
};
