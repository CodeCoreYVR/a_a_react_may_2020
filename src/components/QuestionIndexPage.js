import React, { Component } from "react";

import questions from "../questionsData";

export class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // This copies the questions array into
      // a new array that is stored in the state
      // questions: questions.map(question => question)
      questions: [...questions],
    };
    // this.state is an object
    // it has a single property, questions
    // whose value is an array
    // this.state.questions is an array of questions
  }
  render() {
    return (
      <main className="QuestionIndexPage Page">
        <h2>Questions</h2>
        <ul
          style={{
            listStyle: "none",
            paddingLeft: 0,
          }}
        >
          {this.state.questions.map((question) => (
            <li key={question.id} style={{ padding: "0.2em" }}>
              {question.title}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

// How cloining works?
// const arr1 = [1, 2, 3, 4];
// const arr2 = arr1;
// const arr3 = [...arr1];

// arr2 === arr1; // true
// arr3 === arr1; // false

// arr1.push(5);
// we would then see that arr1 and arr2 both have 5 in them now
// but, arr3 wouldn't and would remain unchanged
