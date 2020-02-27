const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(cors());
server.use(morgan('dev'));
server.use(helmet());

server.get('/', (req, res) => {
  res.send('<h4>Houston...we have ignition</h4>');
});

server.use((err, req, res, next) => {
  res.status(500).json({
    message: 'Houston...we have a problem',
    error: err.message
  });
});

module.exports = server;
