const treinadores = [
    { id: 1, nome: 'Carlos', pokemon: 'Bulbassauro' },
    { id: 2, nome: 'Silva', pokemon: 'Bulbassauro' },
    { id: 3, nome: 'Tiago', pokemon: 'Bulbassauro' }
];

const getTreinadores = () => treinadores;
const getTreinadorById = (id) => treinadores.find(p => p.id === parseInt(id));

const createTreinador = (nome, pokemon) => {
    const novoTreinador = {
        id: treinadores.length + 1,
        nome,
        pokemon
    };
    treinadores.push(novoTreinador); // Adiciona o novo treinador à lista
};

module.exports = { getTreinadores, getTreinadorById, createTreinador };
