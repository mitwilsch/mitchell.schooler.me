const router = require('express').Router();
const crud = require('./crud.js');
const m = require('./helpers.js');

/* All totos */
router.get('/', async (req, res) => {
  await crud.getTotos()
    .then(totos => res.json(totos))
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ });
      }
    });
});

/* A toto by id */
router.get('/:id', m.mustBeInteger, async (req, res) => {
  const { id } = req.params;
  console.log(typeof id);

  await crud.getToto(id)
    .then(toto => res.json(toto))
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});

/* Insert a new toto */
router.post('/', m.checkFieldsToto, async (req, res) => {
  await crud.insertToto(req.body)
    .then(toto => res.status(201).json({
      message: `The toto #${toto.id} has been created`,
      content: toto
    }))
    .catch(err => res.status(500).json({ message: err.message }));
});

/* Update a toto */
router.put('/:id', m.mustBeInteger, m.checkFieldsToto, async (req, res) => {
  const { id } = req.params;

  await crud.updateToto(id, req.body)
    .then(toto => res.json({
      message: `The toto #${id} has been updated`,
      content: toto
    }))
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    });
});

/* Delete a post */
router.delete('/:id', m.mustBeInteger, async (req, res) => {
  const { id } = req.params;

  await crud.deleteToto(id)
    .then(toto => res.json({
      message: `The post #${id} has been deleted`
    }))
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
