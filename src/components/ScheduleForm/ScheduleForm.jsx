import React from "react";
import Button from "../Button/Button";

const ScheduleForm = () => {
  return (
    <form>
      <h3>Step 02</h3>
      <h2>Add schedule</h2>
      <label for="name">Name</label>
      <input type="text" id="name" name="name"></input>
      <label for="title">Title (optional)</label>
      <input type="text" id="title" name="title"></input>
      <label for="author">Author (optional)</label>
      <input type="text" id="author" name="author"></input>
      <label for="description">Description</label>
      <input type="text" id="description" name="description"></input>
      <label for="alternate-description">
        Alternate Description (optional)
      </label>
      <input
        type="text"
        id="alternate-description"
        name="alternate-description"
      ></input>
      <Button buttonType="tertiary" buttonText="Add" />
      <Button buttonType="primary" buttonText="Next" />
    </form>
  );
};

export default ScheduleForm;
