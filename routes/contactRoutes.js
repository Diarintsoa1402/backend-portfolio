const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/contactController');

router.get('/', ContactController.getAll);
router.post('/', ContactController.create);
router.delete('/:id', ContactController.delete);

module.exports = router;
