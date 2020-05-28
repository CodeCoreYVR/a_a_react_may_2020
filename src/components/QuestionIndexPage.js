import React from "react";

import questions from "../questionsData";

export const QuestionIndexPage = (props) => {
  return (
    <main className="QuestionIndexPage Page">
      <h2>Questions</h2>
      <ul
        style={{
          listStyle: "none",
          paddingLeft: 0,
        }}
      >
        {questions.map((question) => (
          <li key={question.id} style={{ padding: "0.2em" }}>
            {question.title}
          </li>
        ))}
      </ul>
    </main>
  );
};
