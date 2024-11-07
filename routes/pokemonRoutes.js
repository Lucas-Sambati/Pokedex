const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');
const pokemonModel = require('../models/pokemonModel');

router.get('/', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);

// POST para criar novos pokemons
router.post('/pokemon', (req, res) => {
    const { nome, tipo } = req.body;
    pokemonModel.createPokemon(nome, tipo);
    res.redirect('/');
});

router.get('/newPokemon', (req, res) => {
    res.render('newPokemon'); // Renderiza o formulário para criar um novo Pokémon
});

module.exports = router;