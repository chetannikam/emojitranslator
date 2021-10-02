import "./styles.css";
import React, { useState } from "react";

var emojicollection = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};
export default function App() {
  var [meaning, inner_fun] = useState("");
  var emoji_keys = Object.keys(emojicollection);
  function input_function(event) {
    var meaning = emojicollection[event.target.value];

    if (meaning === undefined) {
      inner_fun("Sorry failure to recognise Given emoji");
      console.log({ meaning });
    } else {
      inner_fun(meaning);
    }
  }
  function print_list_function(event) {
    inner_fun(emojicollection[event]);
  }
  return (
    <div className="App">
      <h1>Emoji Translator</h1>
      <input
        onChange={input_function}
        style={{ padding: "1rem", fontSize: "1.5rem", textAlign: "center" }}
      ></input>
      <h2>{meaning}</h2>

      <h2>Translation will come here👆</h2>
      {emoji_keys.map(function (emoji) {
        return (
          <span
            onClick={() => print_list_function(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
