import React, { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  // const FormControl = styled.div`

  //   width = 100%
  //   margin: 0.5rem 0;

  //   & label {
  //     font-weight: bold;
  //     display: block;
  //     margin-bottom: 0.5rem;
  //     color: ${(props) => (props.invalid ? "red" : "#bd1786")};
  //   }

  //   @media {
  //     width: auto;
  //   }

  //   & input {
  //     display: block;
  //     width: 100%;
  //     border: 1px solid #ccc;
  //     font: inherit;
  //     line-height: 1.5rem;
  //     padding: 0 0.25rem;
  //     background: ${(props) => (props.invalid ? "rgb(136, 47, 47)" : "green")};
  //   }

  //   & input:focus {
  //     outline: none;
  //     background: #fad0ec;
  //     border-color: #8b005d;
  //   }
  // `;

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-control']} ${!isValid && styles.isvalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
