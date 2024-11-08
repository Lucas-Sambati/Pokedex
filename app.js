const express = require('express');
const bodyParser = require('body-parser');
const pokemonModel = require('./models/pokemonModel');
const treinadorModel = require('./models/treinadorModel');
const pokemonRoutes = require('./routes/pokemonRoutes');
const treinadorRoutes = require('./routes/treinadorRoutes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

// Rota principal para renderizar index.ejs com pokemons e treinadores
app.get('/', (req, res) => {
  const pokemons = pokemonModel.getPokemons();
  const treinadores = treinadorModel.getTreinadores();
  res.render('index', { pokemons, treinadores });
});

// Rotas para Pokémons e Treinadores
app.use('/pokemon', pokemonRoutes);
app.use('/treinador', treinadorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use((req, res, next) => {
  res.status(404).send('Página não encontrada');
});