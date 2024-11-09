module.exports = (sequelize, DataTypes) => {
  const Treinador = sequelize.define('Treinador', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pokemonId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  Treinador.associate = function(models) {
    // Relacionamento com Pokemon
    Treinador.belongsTo(models.Pokemon, {
      foreignKey: 'pokemonId',
      as: 'pokemon',
    });
  };

  return Treinador;
};

