const treinadorModel = require('../models/treinadorModel');
const pokemonModel = require('../models/pokemonModel'); 

const getAllTreinadores = (req, res) => {
    const treinadores = treinadorModel.getTreinadores();
    res.render('index', { treinadores });
};

const getTreinador = (req, res) => {
    const treinador = treinadorModel.getTreinadorById(req.params.id);
    if (treinador) {
        res.render('treinador', { treinador });
    } else {
        res.status(404).send('Treinador não encontrado.');
    }
};

// Rota para exibir o formulário de criação de treinador com a lista de Pokémons
const getNewTreinadorForm = (req, res) => {
    const pokemons = pokemonModel.getPokemons(); // Pega os Pokémons
    res.render('newTreinador', { pokemons }); // Passa os Pokémons para o formulário
};

// Rota para criar um novo treinador
const createTreinador = (req, res) => {
    const { nome, pokemon } = req.body; // Recebe o nome do treinador e o Pokémon
    treinadorModel.createTreinador(nome, pokemon); // Cria o treinador
    res.redirect('/'); // Redireciona para a página principal
};

module.exports = { getAllTreinadores, getTreinador, getNewTreinadorForm, createTreinador };
