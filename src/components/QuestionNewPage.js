import React, { Component } from "react";
import { Question } from "../api/question";

export class QuestionNewPage extends Component {
  createQuestion = (event) => {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);
    const newQuestion = {
      title: fd.get("title"),
      body: fd.get("body"),
    };

    Question.create(newQuestion).then((data) => {
      if (!data.errors) {
        // console.log("this.props: ", this.props);
        // Thie 'history' prop is provided by the <Route />
        // component. It has a bunch of methods to manipulate
        // browser. You can use 'push' to direct a user to any
        // page in our app.
        this.props.history.push(`/questions/${data.id}`);
      }
    });
    currentTarget.reset();
  };
  render() {
    return (
      <form
        className="ui large form clearing segment NewQuestionForm"
        onSubmit={(event) => this.createQuestion(event)}
      >
        <div className="field">
          <label htmlFor="title">Title</label>
          <br />
          <input type="text" name="title" id="title" />
        </div>
        <div className="field">
          <label htmlFor="body">Body</label>
          <br />
          <textarea type="text" name="body" id="body" />
        </div>
        <div>
          <input
            type="submit"
            value="Create Question"
            className="ui right floated large orange button"
          />
        </div>
      </form>
    );
  }
}
