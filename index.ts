const http  = require('http');
const fs    = require('fs');
const path  = require('path');
const host  = 'localhost';
const port  = 8000;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('My first server!');
};