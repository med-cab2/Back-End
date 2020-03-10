const express = require('express');
const router = express.Router();
const db = require('../users_strain/users_strain-model');
const jwt = require('jsonwebtoken');

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const strain = await db.findUsersStrainsBy(id);

    if (strain) {
      res.status(200).json({
        ...strain
      });
    } else {
      res
        .status(401)
        .json({ message: 'The specified strain id does not exist' });
    }
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const removed = await db.removePost(id);
    if (removed) {
      res.json({ message: 'Post successfully removed', deleted: removed });
    } else {
      res
        .status(401)
        .json({ message: 'The specified strain id does not exist' });
    }
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    let decoded = jwt.decode(req.headers.authorization);
    console.log(decoded);

    const { id } = decoded;

    const payload = {
      users_id: req.body.users_id,
      strain_id: req.body.strain_id
    };

    req.body;
    console.log(payload);

    res.status(201).json(await db.addUsersStrains(payload));
    console.log(payload);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
