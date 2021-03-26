import React from "react";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const Result = ({ title, hash }) => {
  return (
    <>
      <Typography
        variant="h6"
        style={{
          padding: "5px",
          alignSelf: "flex-start",
          marginLeft: "10%",
          color: "gray",
        }}
      >
        {title}:
      </Typography>
      <Box width="80%" height="50%" className="resultBox">
        <Paper style={{ padding: "10px" }}>{hash}</Paper>
      </Box>
    </>
  );
};

export default Result;
