import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Result from "./Result/Result";
import data from "../../data/data";

const url = "http://localhost:5000/hash";

const HashingComponent = () => {
  const [text, setText] = useState({ text: "" });
  const [hash, setHash] = useState(data.sha256);
  const [hashsha512, setHashsha512] = useState(data.sha512);
  const [hashsha384, setHashsha384] = useState(data.sha384);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, text)
      .then((res) => {
        setHashsha384(res.data.hash_sha384);
        setHash(res.data.hash);
        setHashsha512(res.data.hash_sha512);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hashingComponent">
      <Box width="80%">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            id="outlined-secondary"
            label="Enter data"
            variant="outlined"
            color="primary"
            fullWidth
            value={text.text}
            onChange={(e) => setText({ text: e.target.value })}
          />
        </form>
      </Box>
      <Result title={"sha256"} hash={hash} />
      <Result title={"sha384"} hash={hashsha384} />
      <Result title={"sha521"} hash={hashsha512} />
    </div>
  );
};

export default HashingComponent;
