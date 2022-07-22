import React, { useState } from "react";
import "./jsonFormatter.css";

export default function JsonFormatter() {
  const [input, getInput] = useState(" ");


  //This functioin will get an input from the user
  const handleInput = (e) => {
    const userInput = e.target.value;
    getInput(userInput);
  };

  //this will format the JSON prettier when clicking format button and show it on output area
  const handleFormat = () => {
    const output = isJson(input)
      ? JSON.stringify(JSON.parse(input), null, 1)
      : "Invalid Input";
    document.getElementsByTagName("textarea")[1].value = output;
  };

  //this function will check whether the input is JSON or not
  function isJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  //this will clear the existing data in the input and output area
  const handleClear = () => {
    document.getElementsByTagName("textarea")[0].value = "";
    document.getElementsByTagName("textarea")[1].value = "";
  };

  return (
    <div>
      <div className="buttons">
        <button className="format-button" onClick={handleFormat}>
          Format JSON
        </button>
        <button className="clear-button " onClick={handleClear}>
          Clear Data
        </button>
      </div>
      <div className="container">
        <textarea
          className="large-area input"
          onChange={handleInput}
          placeholder="Enter your JSON here..."
        />
        <textarea
          className="large-area output"
          readOnly={true}
          placeholder="your formatted JSON will appear here..."
        ></textarea>
      </div>
    </div>
  );
}
