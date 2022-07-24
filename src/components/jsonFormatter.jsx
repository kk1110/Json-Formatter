import React, { useState } from "react";
import "./jsonFormatter.css";

export default function JsonFormatter() {
  const [input, getInput] = useState(" ");

  //to stringify JSON;
  const stringify = (input) => {
    //if input has string
    if (typeof input === "string") {
      return `"${input}"`;
    }

    //if input has number or boolean
    if (typeof input === "number" || typeof input === "boolean") {
      return `${input}`;
    }

    //if input has array
    if (Array.isArray(input)) {
      let res = "[   ";
      for (let i = 0; i < input.length; i++) {
        res += `\n${stringify(input[i])}\n`;
      }
      res = `${res.substring(0, res.length - 1)}\n]`;
      return res;
    }

    //if input has objects
    let res = "{\n";
    for (let key in input) {
      res += `  "${key}":${stringify(input[key])}\n`;
    }
    res = `${res.substring(0, res.length - 1)}\n}`;
    return res;
  };

  //This functioin will get an input from the user
  const handleInput = (e) => {
    const userInput = e.target.value;
    getInput(userInput);
  };

  //this will format the JSON prettier when clicking format button and show it on output area
  const handleFormat = () => {
    const output = isJson(input)
      ? stringify(JSON.parse(input))
      : "Invalid Input";

    const outputArea = document.getElementsByTagName("textarea")[1];

    outputArea.value = output
      .split("\n")
      .map((line, i) => `${i + 1} ${line}`)
      .join("\n");
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
        <div className="output-container">
          <textarea
            className="large-area output"
            readOnly={true}
            placeholder="your formatted JSON will be appear here..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}
