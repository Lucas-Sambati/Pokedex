'use strict';
const { Sequelize, DataTypes } = require('sequelize');

// Substitua pelos dados reais de conexão com seu PostgreSQL
const sequelize = new Sequelize({
    host: 'localhost',
    port: 5432, 
    username: 'postgres',  
    password: '99712003',   
    database: 'pokedex',   
    dialect: 'postgres',
    logging: console.log,    
  });

// Definindo os modelos
const Pokemon = require('./pokemon')(sequelize, DataTypes);
const Treinador = require('./treinador')(sequelize, DataTypes);

// Relacionamento entre Pokémon e Treinador
Treinador.belongsTo(Pokemon, { foreignKey: 'pokemonId' });
Pokemon.hasMany(Treinador, { foreignKey: 'pokemonId' });

// Exportando a instância sequelize e os modelos
module.exports = { sequelize, Pokemon, Treinador };
