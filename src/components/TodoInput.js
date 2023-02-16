import "./TodoInput.css";
import React, { useState } from "react";
import ErrorModule from "./Errormodule";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState();

  const userInputHandler = function (event) {
    setInputText(event.target.value);
  };

  const adduserHandler = function (event) {
    if (event.keyCode === 13) {
      props.onAddInputHandler(inputText);
      setInputText("");
    }
  };
  const addInputHandler = function () {
    if (inputText.length === 0) {
      setError({ title: "Please Enter the Valid Details." });
    }
    if (inputText.length === 0) {
      return;
    }
    props.onAddInputHandler(inputText);
    setInputText("");
  };

  const errorHandler = function () {
    setError(null);
  };
  return (
    <React.Fragment>
      {error ? (
        <ErrorModule title={error.title} onError={errorHandler}></ErrorModule>
      ) : (
        ""
      )}
      <div>
        <input
          type="text"
          placeholder="Enter your ToDo"
          className="user-input userinput"
          value={inputText}
          onChange={userInputHandler}
          onKeyDown={adduserHandler}
        ></input>

        <button className="user-input add-btn" onClick={addInputHandler}>
          +
        </button>
      </div>
    </React.Fragment>
  );
}
export default TodoInput;
