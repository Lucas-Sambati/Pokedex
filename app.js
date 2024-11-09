const express = require('express');
const { Pokemon, Treinador } = require('./models');  // Importando os modelos
const sequelize = require('./config/database');

const app = express();
app.use(express.urlencoded({ extended: true }));  // Para processar formulários
app.set('view engine', 'ejs');  // Definindo o motor de visualização como EJS

const PORT = process.env.PORT || 3000;

// Rota principal: listando Pokémon e Treinadores
app.get('/', async (req, res) => {
    try {
        const pokemons = await Pokemon.findAll();  // Buscar todos os pokémons
        const treinadores = await Treinador.findAll();  // Buscar todos os treinadores
        res.render('index', { pokemons, treinadores });  // Renderizar a página index.ejs
    } catch (error) {
        console.error('Erro ao buscar pokémons e treinadores:', error);
        res.status(500).send('Erro ao buscar dados');
    }
});

// Rota para adicionar um novo Pokémon
app.get('/pokemon/newPokemon', (req, res) => {
    res.render('newPokemon');
});

// Rota para salvar o novo Pokémon
app.post('/pokemon', async (req, res) => {
    const { nome, tipo } = req.body;
    try {
        await Pokemon.create({ nome, tipo });  // Criar novo Pokémon no banco de dados
        res.redirect('/');  // Redirecionar para a página principal
    } catch (error) {
        console.error('Erro ao cadastrar Pokémon:', error);
        res.status(500).send('Erro ao cadastrar Pokémon');
    }
});

// Rota para adicionar um novo Treinador
app.get('/treinador/newTreinador', async (req, res) => {
    try {
        const pokemons = await Pokemon.findAll();  // Buscar todos os pokémons
        res.render('newTreinador', { pokemons });  // Passar os pokémons para o form
    } catch (error) {
        console.error('Erro ao buscar pokémons para o form de treinador:', error);
        res.status(500).send('Erro ao buscar pokémons');
    }
});

// Rota para salvar o novo Treinador
app.post('/treinador', async (req, res) => {
    const { nome, pokemon } = req.body;
    try {
        // Encontrar o Pokémon selecionado e criar um treinador com ele
        const selectedPokemon = await Pokemon.findOne({ where: { nome: pokemon } });
        await Treinador.create({ nome, pokemonId: selectedPokemon.id });  // Criar o novo treinador
        res.redirect('/');  // Redirecionar para a página principal
    } catch (error) {
        console.error('Erro ao cadastrar Treinador:', error);
        res.status(500).send('Erro ao cadastrar Treinador');
    }
});

// Rota para ver detalhes de um Pokémon
app.get('/pokemon/:id', async (req, res) => {
    try {
        const pokemon = await Pokemon.findByPk(req.params.id);  // Buscar o Pokémon pelo ID
        res.render('pokemon', { pokemon });
    } catch (error) {
        console.error('Erro ao buscar Pokémon:', error);
        res.status(500).send('Erro ao buscar Pokémon');
    }
});

// Rota para ver detalhes de um Treinador
app.get('/treinador/:id', async (req, res) => {
    try {
        const treinador = await Treinador.findByPk(req.params.id, {
            include: Pokemon  // Incluir o Pokémon relacionado ao treinador
        });
        res.render('treinador', { treinador });
    } catch (error) {
        console.error('Erro ao buscar Treinador:', error);
        res.status(500).send('Erro ao buscar Treinador');
    }
});

// Sincronizando o banco de dados e inicializando o servidor
sequelize.authenticate()
    .then(() => {
        console.log('Conexão bem-sucedida ao banco de dados!');
        
        // Sincronizando os modelos com o banco de dados
        sequelize.sync({ force: true })  // Use force: true com cautela, pois isso recria as tabelas
            .then(() => {
                console.log('Banco de dados sincronizado com sucesso!');
                
                // Inicializando o servidor após a conexão e sincronização bem-sucedidas
                app.listen(PORT, () => {
                    console.log(`Servidor rodando na porta ${PORT}`);
                });
            })
            .catch((error) => {
                console.error('Erro ao sincronizar o banco de dados:', error);
            });
    })
    .catch((error) => {
        console.error('Erro ao conectar-se ao banco de dados:', error);
    });
