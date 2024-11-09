const Pokemon = require('../models/pokemonModel');

const getAllPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.findAll();
    res.render('index', { pokemons });
  } catch (error) {
    res.status(500).send('Erro ao buscar Pokémons');
  }
};

const getPokemon = async (req, res) => {
  try {
    const pokemon = await Pokemon.findByPk(req.params.id);
    if (pokemon) {
      res.render('pokemon', { pokemon });
    } else {
      res.status(404).send('Pokémon não encontrado');
    }
  } catch (error) {
    res.status(500).send('Erro ao buscar Pokémon');
  }
};

module.exports = { getAllPokemons, getPokemon };
