const { Treinador, Pokemon } = require('./index');  // A importação correta

const getTreinadores = async () => {
  return await Treinador.findAll({
    include: {
      model: Pokemon,
      attributes: ['nome']
    }
  });
};

const getTreinadorById = async (id) => {
  return await Treinador.findByPk(id, {
    include: {
      model: Pokemon,
      attributes: ['nome']
    }
  });
};

const createTreinador = async (nome, pokemonId) => {
  return await Treinador.create({ nome, pokemonId });
};

module.exports = { getTreinadores, getTreinadorById, createTreinador };



