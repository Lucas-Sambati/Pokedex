const treinador = [
    { id: 1, nome: 'Bulbassauro', pokemon: 'Vegetal/Veneno' },
    { id: 2, nome: 'Squirtle', pokemon: 'Água' },
    { id: 3, nome: 'Charmander', pokemon: 'Fogo' }
];

const getTreinadores = () => treinadores;
const getTreinadorById = (id) => treinadores.find(p => p.id === parseInt(id));
const createTreinador = (nome, pokemon) => {
    const novoTreinador = {
        id: treinadores.length + 1,
        nome,
        pokemon
    };
    treinadores.push(novoTreinador);
};

module.exports = { getTreinadores, getTreinadorById, createTreinador };