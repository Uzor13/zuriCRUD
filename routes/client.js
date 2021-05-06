const express = require('express');

//Import Controller
const clientData = require("../controller/client");

const router = express.Router();

router.get('/', clientData.getData);
router.get('/:id', clientData.getSpecData);
router.post('/', clientData.createClient);
router.put('/:id', clientData.updateClient);
router.delete('/:id', clientData.deleteClient);

module.exports = router;