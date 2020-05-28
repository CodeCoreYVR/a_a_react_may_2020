import React from "react";

import { QuestionShowPage } from "./QuestionShowPage";
import { QuestionIndexPage } from "./QuestionIndexPage";

// In react application, we create a component that acts as the
// "root" or the entry point to all f our other components.
// This is the one that should be rendered by `ReactDOM.render()`
export const App = () => {
  return (
    <div className="App">
      <QuestionShowPage />
      <hr />
      <QuestionIndexPage />
    </div>
  );
};
