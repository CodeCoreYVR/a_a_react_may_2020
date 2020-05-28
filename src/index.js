import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// A react component is a function that returns a react element.
// PascalCase is the naming convention for react components.
// Components whose names does not begin with a capital letter,
// will be interpreted as a plain HTML tag.

// QuestionDetails component
const QuestionDetails = (props) => {
  const { title, body, author, view_count, created_at } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>
        {body}
        <br />
        {author.full_name}
      </p>
      <p>
        <small>
          Seen {view_count} times - Created {created_at.toLocaleString()}
        </small>
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
      <QuestionDetails
        title="What is your favourite color?"
        body="Red, green, blue, magenta, etc."
        author={{ full_name: "Michael Owen" }}
        view_count={100}
        created_at={new Date()}
      />
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
