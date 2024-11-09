const { Sequelize } = require('sequelize');  // Importando o Sequelize

module.exports = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '99712003',
    database: 'pokedex',
    define: {
        timestamps: true,
        underscored: true
    }
});
