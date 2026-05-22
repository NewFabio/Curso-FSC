//1. Converta as funções abaixo para arrow functions:

function somar(a, b) {
    return a + b;
};

const somarArrow = (a, b) => a + b;

console.log(somarArrow(2, 3));

function verificarNegativo(numero) {
    return numero < 0;
};

const verificarNegativoArrow = numero => numero < 0;

console.log(verificarNegativoArrow(-3))

function criarUsuario(nome, idade) {
    return {
        nome,
        idade,
    }
};

const criarUsuarioArrow = (nome, idade) => ({ nome, idade });

console.log(criarUsuarioArrow("Alice", 30));