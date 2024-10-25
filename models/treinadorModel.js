// /models/treinadorModel.js
class Treinador {
    constructor(nome, idade, pokemons) {
        if (!Array.isArray(pokemons) || pokemons.length === 0) {
            throw new Error("Um treinador deve ter ao menos um Pokémon.");
        }
        this.nome = nome;
        this.idade = idade;
        this.pokemons = pokemons; // Lista de Pokémons atribuída ao treinador
    }
}

module.exports = Treinador;