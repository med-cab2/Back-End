const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const restricted = require('../middleware/restricted');

const authRouter = require('../auth/auth-router');
const strainsRouter = require('../strains/strains-router');
const userStrainRouter = require('../users_strain/users_strain-router');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/auth', authRouter);
server.use('/strains', restricted, strainsRouter);
server.use('/usersStrain', restricted, userStrainRouter);

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
