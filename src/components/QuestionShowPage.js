import React, { Component } from "react";

import { QuestionDetails } from "./QuestionDetails";
import { AnswerList } from "./AnswerList";
import { Question } from "../api/question";
import { Spinner } from "./Spinner";

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
      question: null,
      isLoading: true,
    };
  }
  componentDidMount() {
    Question.one(this.props.match.params.id).then((question) => {
      this.setState({
        question,
        isLoading: false,
      });
    });
  }
  deleteQuestion() {
    this.setState({ question: null });
  }

  deleteAnswer(id) {
    this.setState({
      question: {
        ...this.state.question,
        answers: this.state.question.answers.filter((a) => a.id !== id),
      },
    });
    // what we are doing above is grabbing all other properties of
    // question in state except for answers which we are updating them
    // like below example:
    // let question = { title: 'question title', answers: ['a1', 'a2', 'a3'] }
    // question = { ...question, answers: ['a1', 'a2']}
    // so question will have { title: 'question title', answers: ['a1', 'a2'] }
  }
  render() {
    // debugger;
    if (this.state.isLoading) {
      return <Spinner message="Question doesn't exist" />;
    }
    return (
      <main className="QuestionShowPage">
        <div className="ui teal clearing segment ">
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
          <button
            onClick={() => this.deleteQuestion()}
            className="ui right floated huge red button"
          >
            Delete
          </button>
        </div>
        <h2 className="ui horizontal divider header">Answers</h2>
        <div className="ui segment">
          <AnswerList
            answers={this.state.question.answers}
            onAnswerDeleteClick={(id) => this.deleteAnswer(id)}
          />
        </div>
      </main>
    );
  }
}
