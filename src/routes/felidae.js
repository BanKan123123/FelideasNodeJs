const express = require('express');
const router = express.Router();
const felidaeController = require('../app/Controllers/FelidaeController');

router.get('/create', felidaeController.create);

router.post('/store', felidaeController.store);

router.get('/:id/edit', felidaeController.edit);

router.put('/:id', felidaeController.update);

router.get('/:slug', felidaeController.show);

module.exports = router;
