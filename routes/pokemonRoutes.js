const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');
const pokemonModel = require('../models/pokemonModel');

router.get('/', pokemonController.getAllPokemons);


// POST para criar novos pokemons
router.post('/', (req, res) => {
    const { nome, tipo } = req.body;
    pokemonModel.createPokemon(nome, tipo);
    res.redirect('/');
});

router.get('/newPokemon', (req, res) => {
    res.render('newPokemon'); // Renderiza o formulário para criar um novo Pokémon
});

router.get('/:id', pokemonController.getPokemon);

module.exports = router;