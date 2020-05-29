import React from "react";

import { AnswerDetails } from "./AnswerDetails";

export const AnswerList = (props) => {
  return (
    <ul className="ui list">
      {props.answers.map((answer) => (
        <div key={answer.id} className="ui raised clearing segment">
          <AnswerDetails
            {...answer}
            // body={answer.body}
            // author={answer.author}
            // created_at={answer.created_at}
            onDeleteClick={props.onAnswerDeleteClick}
          />
        </div>
      ))}
    </ul>
  );
};
