// 1. Assinale uma variável pra cada valor na lista "numeros" utilizando Destructuring, e loguue-as no console.

const numeros = [1, 2, 3, 4, 5];

const [a, b, c, d, e] = numeros;

console.log(a, b, c, d, e);

// 2. Inverta os valores das variáveis "A" e "B" utilizando Destructuring, e loguue-as no console.

let A = 30;
let B = 40;

[A, B] = [B, A];

console.log(A, B);

// 3. Crie uma nova lista baseando-se na "melhoresSeriesDoMundo" adicioanndo dois novos valores a ela utilizando o Spread Operator, e loguue-a no console.

const melhoresSeriesDoMundo = ["Breaking Bad", "Game of Thrones", "The Wire"];

const adicionando = [...melhoresSeriesDoMundo, "Stranger Things", "The Crown"];

console.log(adicionando);

// 4. Assinale os dois primeiros valores da lista "sobremessas" a duas variaveis, e distribua o resto em apenas uma, utilizando o Spread Operator, e loguue-as no console.

const sobremessas = ["Pudim", "Brigadeiro", "Sorvete", "Torta de Limão"];

const [primeira, segunda, ...resto] = sobremessas;

console.log(primeira, segunda);
console.log(resto);