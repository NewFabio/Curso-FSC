const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosMaioresDoQue = numeros.filter((numero, index) => {
    // console.log(`numero: ${numero}, index: ${index}`);
    return numero > 5;
})

// console.log(numerosMaioresDoQue);

// Filter com objetos
const usuarios = [
    {
        nome: 'Steve Jobs',
        idade: 16
    },
    {
        nome: 'Bill Gates',
        idade: 20
    },
    {
        nome: 'Elon Musk',
        idade: 25
    }
]

const usuariosMaioresDeIdade = usuarios.filter((usuario) => {
    return usuario.idade >= 18;
})

// Tabela (recomendado para arrays de objetos)
console.table(usuariosMaioresDeIdade);

// JSON formatado
console.log(JSON.stringify(usuariosMaioresDeIdade, null, 2));

// Com profundidade completa
// console.dir(usuariosMaioresDeIdade, { depth: null });

