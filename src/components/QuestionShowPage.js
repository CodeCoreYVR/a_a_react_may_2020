import React, { Component } from "react";

import { QuestionDetails } from "./QuestionDetails";
import { AnswerList } from "./AnswerList";
import oneQuestionData from "../oneQuestionData";

// QuestionShowPage component
export class QuestionShowPage extends Component {
  render() {
    return (
      <main className="QuestionShowPage">
        <QuestionDetails
          title="What is your favourite color?"
          body="Red, green, blue, magenta, etc."
          author={{ full_name: "Michael Owen" }}
          view_count={100}
          created_at={new Date()}
        />
        <AnswerList answers={oneQuestionData.answers} />
      </main>
    );
  }
}
