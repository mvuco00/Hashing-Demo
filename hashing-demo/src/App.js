import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const url = "http://localhost:5000/hash";

const App = () => {
  const [text, setText] = useState({ text: "" });
  const [hash, setHash] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, text)
      .then((res) => {
        setHash(res.data.hash);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text.text}
          onChange={(e) => setText({ text: e.target.value })}
        />
        <button type="submit">POŠALJI</button>
      </form>
      <div>{hash}</div>
    </div>
  );
};

export default App;
