module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define('Pokemon', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Pokemon.associate = function(models) {
    // Relacionamento com Treinador
    Pokemon.hasMany(models.Treinador, {
      foreignKey: 'pokemonId',
      as: 'treinadores',
    });
  };

  return Pokemon;
};
