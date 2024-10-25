// /routes/treinadorRoutes.js
const treinadorController = require('../controllers/treinadorController');

function rotasTreinador(app) {
    app.post('/treinador/cadastrar', (req, res) => {
        const { nome, idade, pokemons } = req.body;
        const resultado = treinadorController.cadastrarTreinador(nome, idade, pokemons);
        res.send(resultado);
    });

    app.get('/treinador/listar', (req, res) => {
        const resultado = treinadorController.listarTreinadores();
        res.send(resultado);
    });
}

module.exports = rotasTreinador;