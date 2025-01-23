// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const { parse } = require('node-html-parser');

const PORT = 3000;
const HOSTNAME = 'localhost';
const commentsFilePath = path.join(__dirname, 'comments.json');

// Read comments from comments.json
let comments = [];
fs.readFile(commentsFilePath, (err, data) => {
  if (err) throw err;
  comments = JSON.parse(data);
});

// Function to write comments to comments.json
function writeComments() {
  fs.writeFile(commentsFilePath, JSON.stringify(comments), (err) => {
    if (err) throw err;
  });
}
