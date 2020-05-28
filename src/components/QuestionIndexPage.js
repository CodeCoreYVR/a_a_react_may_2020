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
  deleteQuestion(id) {
    // console.log("Question Id: ", id);
    // To change 'state', you must ALWAYS use 'this.setState(...)'

    // You can use setStaet by passing an object to its first argument.
    // When the time comes, the object will be merged with the current state.
    // This will change whatever properties are with the current state

    // this.setState({
    //   questions: this.state.questions.filter((q) => q.id !== id),
    // });

    // You can also use setState by giving a callback as first argument
    // that receives the current state and props as arguments.
    // It must return an object that will be merged with the state.
    this.setState((state, props) => {
      return {
        questions: state.questions.filter((q) => q.id !== id),
      };
    });
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
              <a href="">{question.title}</a>
              <button onClick={() => this.deleteQuestion(question.id)}>
                Delete
              </button>
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
