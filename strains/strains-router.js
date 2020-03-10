const express = require('express');
const router = express.Router();

const strainsModel = require('./strains-model');

router.get('/', async (req, res, next) => {
  try {
    res.json(await strainsModel.findAllStrains('strains'));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
