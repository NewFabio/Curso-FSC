// 1. Guarde em uma variável a soma de todos os valores contidos na lista "numeros", e logue-as no console.

const numeros = [3,4,6,8];

const somaNumeros = numeros.reduce((total, numero) => {
    return total + numero;
}, 0);

console.log(somaNumeros);

// 2. Guarde em uma variável uma string que contenha todos os valores da lista "letras", e logue-a no console.

const letras = ['a', 'b', 'c', 'd'];

const stringLetras = letras.reduce((total, letra) => {
    return total + letra;
}, '');
console.log(stringLetras);

// 3. Guarde em uma variável a soma das idades de todas as pessoas que votaram (votou = true), e logue-a no console.

const pessoas = [
    { nome: 'João', idade: 30, votou: true },
    { nome: 'Maria', idade: 25, votou: false },
    { nome: 'Pedro', idade: 40, votou: true },
    { nome: 'Ana', idade: 22, votou: false },
    { nome: 'Lucas', idade: 38, votou: true },
    { nome: 'Lucas', idade: 27, votou: true },
    { nome: 'Lucas', idade: 35, votou: false },
    { nome: 'Lucas', idade: 31, votou: true },
    { nome: 'Lucas', idade: 33, votou: true },
];

const somaIdadesVotantes = pessoas.reduce((total, pessoa) => {
    if (pessoa.votou) {
        return total + pessoa.idade;
    }
    return total;
}, 0);

console.log(somaIdadesVotantes);

// 4. Guarde em uma variável a soma dos preços de todos os produtos na nossa lista de desejps, e logue-a no console.

const listaDeDesejos = [
    { titulo: 'Tesla Model S', preco: 79999 },
    { titulo: 'MacBook Pro', preco: 1999 },
    { titulo: 'iPhone 12', preco: 999 },
    { titulo: 'PlayStation 5', preco: 499 },
    { titulo: 'Xbox Series X', preco: 499 },
]

const totalDesejos = listaDeDesejos.reduce((total, desejo) => {
    return total + desejo.preco;
}, 0);

console.log(totalDesejos);