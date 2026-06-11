// 1. Crie uma lista que contenha apenas os valores que são maiores que 5 na lista "numeros".

const numeros = [3,6,8,12];

const numerosMaioresQueCinco = numeros.filter((numero) => {
    return numero > 5;
});

// console.log(numerosMaioresQueCinco);

// 2. Crie uma lista que contenha apenas os valores pares da lista "numeros2".

const numeros2 = [1,2,3,4,5,6,7,8];

const numerosPares = numeros2.filter((numero) => {
    return numero % 2 === 0;
});

// console.log(numerosPares);

// 3. Crie uma lista que contenha apenas as pessoas que têm idade o suficiente pra fazer parte da Matrix ( a idade mínima é 18 anos), e logue-a no console.

const pessoas = [
    {nome: 'Angellina Jolie', idade: 80},
    {nome: 'Brad Pitt', idade: 2},
    {nome: 'Keanu Reeves', idade: 5},
    {nome: 'Laurence Fishburne', idade: 16},
    {nome: 'Carrie-Anne Moss', idade: 100},
];

const podeEntrarNaMatrix = pessoas.filter((pessoa) => {
    return pessoa.idade >= 18;
});

console.table(podeEntrarNaMatrix);