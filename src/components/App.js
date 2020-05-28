import React from "react";

import { QuestionShowPage } from "./QuestionShowPage";

// In react application, we create a component that acts as the
// "root" or the entry point to all f our other components.
// This is the one that should be rendered by `ReactDOM.render()`
export const App = () => {
  return (
    <div className="App">
      <QuestionShowPage />
    </div>
  );
};
