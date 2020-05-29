import React from "react";

import { QuestionShowPage } from "./QuestionShowPage";
import { QuestionIndexPage } from "./QuestionIndexPage";
import { Clock } from "./Clock";

// In react application, we create a component that acts as the
// "root" or the entry point to all f our other components.
// This is the one that should be rendered by `ReactDOM.render()`
export class App extends React.Component {
  state = {
    showTime: true,
  };
  render() {
    return (
      <div className="ui container App">
        {this.state.showTime && <Clock />}
        <QuestionShowPage />
        <hr />
        <QuestionIndexPage />
      </div>
    );
  }
}
