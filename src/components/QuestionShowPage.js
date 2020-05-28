import React from "react";

import { QuestionDetails } from "./QuestionDetails";
import { AnswerDetails } from "./AnswerDetails";

// QuestionShowPage component
export const QuestionShowPage = () => {
  return (
    <main>
      <QuestionDetails
        title="What is your favourite color?"
        body="Red, green, blue, magenta, etc."
        author={{ full_name: "Michael Owen" }}
        view_count={100}
        created_at={new Date()}
      />
      <AnswerDetails
        body="Red."
        author={{ full_name: "Ulises Wisozk" }}
        created_at={new Date().toLocaleDateString()}
      />
    </main>
  );
};
