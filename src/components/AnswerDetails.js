import React from "react";
// AnswerDetails component
export const AnswerDetails = (props) => {
  return (
    <div>
      <p>
        {props.body} <br />
        By {props.author.full_name}
      </p>
      <p>Answered {props.created_at}</p>
    </div>
  );
};

