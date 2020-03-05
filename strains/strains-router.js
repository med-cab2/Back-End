const express = require('express');
const strainsModel = require('./strains-model');

const router = express.Router({
  mergeParams: true
});

router.get('/', async (req, res, next) => {
  try {
    res.json(await strainsModel.findAllStrains('strains'));
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    // something
  } catch (err) {
    next(err);
  }
});

module.exports = router;
