import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const url = "http://localhost:5000/hash";

const HashingComponent = () => {
  const [text, setText] = useState({ text: "" });
  const [hash, setHash] = useState(
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
  );
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
    <div className="hashingComponent">
      <Box width="70%">
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
      <Typography
        variant="h6"
        style={{
          padding: "5px",
          alignSelf: "flex-start",
          marginLeft: "15%",
          color: "gray",
        }}
      >
        sha256:
      </Typography>
      <Box width="70%" height="50%" className="resultBox">
        <Paper style={{ padding: "10px" }}>{hash}</Paper>
      </Box>
    </div>
  );
};

export default HashingComponent;
