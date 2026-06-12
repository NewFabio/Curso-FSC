// 1. Guarde em uma variável se a string abaixo começa com "Meu", e logue-a no console.

const mensagem = 'Olá, meu nome é Fabio';
const comecaComMeu = mensagem.startsWith('Meu');
console.log(comecaComMeu);

// 2. Guarde em uma variável se a string abaixo, a partir da posição 4, começa com "meu", logue-a no console.

const mensagem2 = 'Olá, meu nome é Fabio';
const comecaComMeuPosicao4 = mensagem2.startsWith('meu', 4);
console.log(comecaComMeuPosicao4);

// 3. Guarde em uma variável se a string abaixo termina com "Fabio", e logue-a no console.

const mensagem3 = 'Olá, meu nome é Fabio';
const terminaComFabio = mensagem3.endsWith('Fabio');
console.log(terminaComFabio);