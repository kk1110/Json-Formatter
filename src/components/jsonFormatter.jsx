import React, { useState } from "react";
import "./jsonFormatter.css";

export default function JsonFormatter() {
  const[input,getInput]=useState(" ");

 const handleInput=(e)=>{
  const userInput=e.target.value;
  getInput(userInput);
 }

 

 const handleFormat=()=>{
  const output=isJson(input)?JSON.stringify(JSON.parse(input),null,1):"Invalid Input";
  document.getElementsByTagName("textarea")[1].value=output;
 }
 

 function isJson(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}

const handleClear=()=>{
  document.getElementsByTagName("textarea")[0].value="";
  document.getElementsByTagName("textarea")[1].value="";
}

  return (
    <div>
      <div className="buttons">
        <button className="format-button" onClick={handleFormat}>
          Format JSON
        </button>
        <button className="clear-button " onClick={handleClear} >Clear Data</button>
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
        >
        </textarea>
      </div>
    </div>
  );
}
