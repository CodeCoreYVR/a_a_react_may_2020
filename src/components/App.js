import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { QuestionShowPage } from "./QuestionShowPage";
import { QuestionIndexPage } from "./QuestionIndexPage";
import { WelcomePage } from "./WelcomePage";
import { NavBar } from "./NavBar";

// In react application, we create a component that acts as the
// "root" or the entry point to all f our other components.
// This is the one that should be rendered by `ReactDOM.render()`
export class App extends React.Component {
  state = {
    showTime: true,
  };
  render() {
    return (
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <div className="ui container App">
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/questions" component={QuestionIndexPage} />
          <Route path="/questions/:id" component={QuestionShowPage} />
        </div>
      </BrowserRouter>
    );
  }
}
