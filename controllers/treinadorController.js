// /controllers/treinadorController.js
const Treinador = require('../models/treinadorModel');

class TreinadorController {
    constructor() {
        this.treinadores = [];
    }

    cadastrarTreinador(nome, idade, pokemons) {
        try {
            const novoTreinador = new Treinador(nome, idade, pokemons);
            this.treinadores.push(novoTreinador);
            return `Treinador ${nome} cadastrado com sucesso!`;
        } catch (error) {
            return `Erro ao cadastrar treinador: ${error.message}`;
        }
    }

    listarTreinadores() {
        if (this.treinadores.length === 0) {
            return "Nenhum treinador cadastrado.";
        } else {
            return this.treinadores.map(treinador => {
                return `Nome: ${treinador.nome}, Idade: ${treinador.idade}, Pokémons: ${treinador.pokemons.join(', ')}`;
            });
        }
    }
}

module.exports = new TreinadorController();