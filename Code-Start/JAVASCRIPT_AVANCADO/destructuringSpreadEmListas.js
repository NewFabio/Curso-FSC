// Usando destructuring e spread operator em listas

const number = [1, 2, 3, 4];

// const primeiro = number[0];
// const segundo = number[1];
// const terceiro = number[2];
// const quarto = number[3];

const [primeiro, segundo, terceiro, quarto] = number; //Destructuring

console.log(primeiro, segundo, terceiro, quarto);

// Usando destructuring para inverter valores

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b);

// Spread operator em listas

const numeros = [1, 2, 3];
const numeros2 = [...numeros, 4, 5, 6]; // Spread operator para criar uma nova lista com os elementos de numeros e adicionar mais elementos (...)

console.log(numeros2);

// Spread operator para assinalar variaveis

const [dez, vinte, ...resto] = [10, 20, 30, 40, 50]

console.log(dez, vinte);
console.log(resto);