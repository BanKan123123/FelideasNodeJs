const express = require('express');
const router = express.Router();
const meFelidae = require('../app/Controllers/MeFelidaes');

router.get('/stored/felidaes', meFelidae.storedFelidae);

module.exports = router;
