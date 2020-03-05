const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRouter = require('../auth/auth-router');
const strainsRouter = require('../strains/strains-router');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/auth', authRouter);
server.use('/strains', strainsRouter);

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
