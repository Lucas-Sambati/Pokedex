const { Pokemon } = require('./index');  // A importação correta

const getPokemons = async () => {
  return await Pokemon.findAll();
};

const getPokemonById = async (id) => {
  return await Pokemon.findByPk(id);
};

const createPokemon = async (nome, tipo) => {
  return await Pokemon.create({ nome, tipo });
};

module.exports = { getPokemons, getPokemonById, createPokemon };


