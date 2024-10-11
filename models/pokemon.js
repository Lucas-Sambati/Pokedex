const { Sequelize, DataTypes } = require('sequelize');

// Conexão com o banco de dados
const sequelize = new Sequelize('Pokemon', 'postgres', '99712003', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
});

// Definição do modelo 'Pokemon'
const Pokemon = sequelize.define('Pokemon', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  altura: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  peso: {
    type: DataTypes.ENUM('Masculino', 'Feminino', 'Outro'),
    allowNull: false
  },
  nivelDePoder: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  // Outros parâmetros do modelo
  tableName: 'pokemons',
  timestamps: true // Isso adiciona os campos createdAt e updatedAt
});

// Sincroniza o modelo com o banco de dados
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso.');
    
    // Cria a tabela, se não existir
    await Pokemon.sync({ alter: true });
    console.log('Tabela "pokemons" sincronizada com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ou sincronizar com o banco de dados:', error);
  }
})();

module.exports = Pokemon;
