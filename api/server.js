const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.get('/', (req, res) => {
  res.send('---Server up and running---');
});

server.use((err, req, res) => {
  res.status(500).json({
    message: 'Something went wrong!',
    error: err.message,
  });
});

module.exports = server;
