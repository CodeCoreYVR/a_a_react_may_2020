import React, { Component } from "react";

import { QuestionDetails } from "./QuestionDetails";
import { AnswerList } from "./AnswerList";
import oneQuestionData from "../oneQuestionData";

// QuestionShowPage component
export class QuestionShowPage extends Component {
  constructor(props) {
    // When using a constructor in a class-based
    // component, you must call the 'Component' class
    // constructor with 'super' passing it the 'props'
    super(props);
    // State is only available on Class-based components
    // it is a property of 'this' and it is initialized
    // inside class's constructor method
    this.state = {
      question: oneQuestionData,
    };
  }
  deleteQuestion() {
    this.setState({ question: null });
  }
  render() {
    if (!this.state.question) {
      return (
        <main className="Page">
          <h2 style={{ color: "white", backgroundColor: "red" }}>
            Question Doesn't Exist
          </h2>
        </main>
      );
    }
    return (
      <main className="QuestionShowPage">
        <QuestionDetails
          {...this.state.question}
          // Instead of writing down all the properties
          // of question separately like below we can
          // just type the above line
          //   title={this.state.question.title}
          //   body={this.state.question.body}
          //   author={this.state.question.author}
          //   view_count={this.state.question.view_count}
          //   created_at={this.state.question.created_at}
        />
        <button onClick={() => this.deleteQuestion()}>Delete</button>
        <AnswerList answers={this.state.question.answers} />
      </main>
    );
  }
}
