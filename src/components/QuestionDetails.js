import React from "react";
// QuestionDetails component
export const QuestionDetails = (props) => {
  const { title, body, author, view_count, created_at } = props;
  return (
    <div className="QuestionDetails">
      <h2>{title}</h2>
      <p>
        {body}
        <br />
        {author.full_name}
      </p>
      <p>
        <small>
          Seen {view_count} times - Created {created_at.toLocaleString()}
        </small>
      </p>
    </div>
  );
};
