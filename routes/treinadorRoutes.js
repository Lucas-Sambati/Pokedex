const express = require('express');
const router = express.Router();
const treinadorController = require('../controllers/treinadorController');

// Rota para exibir o formulário de criação de treinador com a lista de Pokémons
router.get('/newTreinador', treinadorController.getNewTreinadorForm);

// Rota POST para criar um novo treinador
router.post('/', treinadorController.createTreinador);

// Rota para listar todos os treinadores
router.get('/', treinadorController.getAllTreinadores);

// Rota para exibir um treinador específico
router.get('/:id', treinadorController.getTreinador);

module.exports = router;
