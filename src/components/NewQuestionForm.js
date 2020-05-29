import React from "react";

export const NewQuestionForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);
    const newQuestion = {
      title: fd.get("title"),
      body: fd.get("body"),
      created_at: new Date(),
    };

    props.onSubmit(newQuestion);
    currentTarget.reset();
  };
  return (
    <form className="NewQuestionForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" name="title" id="title" />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <br />
        <textarea type="text" name="body" id="body" />
      </div>
      <div>
        <input type="submit" value="Create Question" />
      </div>
    </form>
  );
};
