import React from "react";

// AnswerDetails component
export const AnswerDetails = (props) => {
  return (
    <div className="AnswerDetails">
      <p>
        {props.body} <br />
        <small
          style={{ color: "maroon", fontWeight: "bolder", fontStyle: "italic" }}
        >
          By {props.author.full_name}
        </small>
      </p>
      <p>Answered {props.created_at}</p>
    </div>
  );
};
