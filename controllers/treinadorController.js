const treinadorModel = require('../models/treinadorModel');

const getAllTreinadores = (req, res) => {
    const treinadores = treinadorModel.getTreinadores();
    res.render('index', { treinadores });
};

const getTreinador = (req, res) => {
    const treinador = treinadorModel.getTreinadorById(req.params.id);
    if(treinador) {
        res.render('treinador', { treinador });
    } else {
        res.status(404).send('Treinador não encontrado.');
    }
};

module.exports = { getAllTreinadores, getTreinador };