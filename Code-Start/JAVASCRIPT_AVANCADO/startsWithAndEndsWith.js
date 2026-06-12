// startWith e endWith são métodos de string que verificam se uma string começa ou termina com um determinado valor, respectivamente. 
// Eles retornam true ou false dependendo do resultado da verificação.

const texto = 'Ser ou não ser, eis a questão.';

// startsWith verifica se a string começa com 'eis'
const comecaComEis = texto.startsWith('eis', 15); // O segundo argumento é a posição inicial para a verificação
const comecaComSer = texto.startsWith('Ser');
console.log(comecaComEis);
console.log(comecaComSer);

// endsWith verifica se a string termina com 'questão.'
const terminaComQuestao = texto.endsWith('questão.');
const terminaComSer = texto.endsWith('Ser');
console.log(terminaComQuestao);
console.log(terminaComSer);