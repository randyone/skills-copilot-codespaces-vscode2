// create web server
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { spawn } = require("child_process");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// create comments array
let comments = [];

// add comment to array
app.post("/comments", (req, res) => {
  const comment = req.body;
  console.log(comment);
  comments.push(comment);
  res.send("Comment added");
});

// get comments from array
app.get("/comments", (req, res) => {
  res.json(comments);
});