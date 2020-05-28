import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// A react component is a function that returns a react element.
// PascalCase is the naming convention for react components.
// Components whose names does not begin with a capital letter,
// will be interpreted as a plain HTML tag.

// QuestionDetails component
const QuestionDetails = () => {
  return (
    <div>
      <h2>What is your favourite color?</h2>
      <p>
        Red, green, blue, magenta, etc. <br />
        By Michael Owen
      </p>
      <p>
        <small>Seen 10 times - Created 10 days ago</small>
      </p>
    </div>
  );
};

// AnswerDetails component
const AnswerDetails = () => {
  return (
    <div>
      <p>
        Red. <br />
        By Ulises Wisozk
      </p>
      <p>Answered 2 days ago</p>
    </div>
  );
};

// QuestionShowPage component
const QuestionShowPage = () => {
  return (
    <main>
      <QuestionDetails />
      <AnswerDetails />
    </main>
  );
};
// In JSX, self-closing tags must be closed. <img> doesn't work, you
// must write <img /> instead.

ReactDOM.render(
  <React.StrictMode>
    <QuestionShowPage />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
