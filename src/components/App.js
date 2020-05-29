import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { QuestionShowPage } from "./QuestionShowPage";
import { QuestionIndexPage } from "./QuestionIndexPage";
import { WelcomePage } from "./WelcomePage";
import { NavBar } from "./NavBar";
import { Session } from "../api/session";

// In react application, we create a component that acts as the
// "root" or the entry point to all f our other components.
// This is the one that should be rendered by `ReactDOM.render()`
export class App extends React.Component {
  state = {
    currentUser: null,
    showTime: true,
  };

  componentDidMount() {
    // This gives us a cookie that represents us being logged in
    // Now, when we make POST request to the server to create a Question,
    // we will be authorized/authenticated
    // This is a HACKY method unril we learn about Authentication in react
    Session.create({
      email: "js@winterfell.gov",
      password: "supersecret",
    }).then((user) => {
      this.setState({
        currentUser: user,
      });
    });
  }
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
