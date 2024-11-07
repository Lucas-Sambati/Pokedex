const express = require('express');
const router = express.Router();
const treinadorController = require('../controllers/treinadorController');
const treinadorModel = require('../models/treinaorModel');

router.get('/', treinadorController.getAllTreinadores);
router.get('/treinador/:id', treinadorController.getTreinador);

// POST para criar novos treinadores
router.post('/treinador', (req, res) => {
    const { nome, tipo } = req.body;
    treinadorModel.createTreinador(nome, tipo);
    res.redirect('/');
});

router.get('/newTreinador', (req, res) => {
    res.render('newTreinador'); // Renderiza o formulário para criar um novo Treinador
});

module.exports = router;