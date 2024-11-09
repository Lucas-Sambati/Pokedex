const Treinador = require('../models/treinadorModel');
const Pokemon = require('../models/pokemonModel');

const getAllTreinadores = async (req, res) => {
  try {
    const treinadores = await Treinador.findAll({
      include: Pokemon,  // Inclui o Pokémon associado a cada treinador
    });
    res.render('index', { treinadores });
  } catch (error) {
    res.status(500).send('Erro ao buscar Treinadores');
  }
};

const getTreinador = async (req, res) => {
  try {
    const treinador = await Treinador.findByPk(req.params.id, {
      include: Pokemon,  // Inclui o Pokémon associado
    });
    if (treinador) {
      res.render('treinador', { treinador });
    } else {
      res.status(404).send('Treinador não encontrado');
    }
  } catch (error) {
    res.status(500).send('Erro ao buscar Treinador');
  }
};

const getNewTreinadorForm = async (req, res) => {
  try {
    const pokemons = await Pokemon.findAll();
    res.render('newTreinador', { pokemons });
  } catch (error) {
    res.status(500).send('Erro ao carregar Pokémons');
  }
};

const createTreinador = async (req, res) => {
  try {
    const { nome, pokemonId } = req.body;
    await Treinador.create({ nome, pokemonId });
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Erro ao criar Treinador');
  }
};

module.exports = { getAllTreinadores, getTreinador, getNewTreinadorForm, createTreinador };
