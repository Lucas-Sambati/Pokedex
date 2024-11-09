const express = require('express');
const router = express.Router();
const treinadorController = require('../controllers/treinadorController');

router.get('/newTreinador', treinadorController.getNewTreinadorForm);
router.post('/', treinadorController.createTreinador);
router.get('/', treinadorController.getAllTreinadores);
router.get('/:id', treinadorController.getTreinador);

module.exports = router;

