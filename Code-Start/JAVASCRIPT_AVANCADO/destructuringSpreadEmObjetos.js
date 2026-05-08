// Utilizando destructuring e spread operator em objetos

const usuario = {
    primeiroNome: 'Fabio',
    segundoNome: 'Conceição',
    idade: 30,
}

// console.log('Primeiro nome: ' + usuario.primeiroNome); // Acessando a propriedade primeiroNome
// console.log('Segundo nome: ' + usuario.segundoNome); // Acessando a propriedade segundoNome
// console.log('Idade: ' + usuario.idade); // Acessando a propriedade idade

// const {primeiroNome, segundoNome, idade} = usuario; // Desestruturando o objeto usuario

const {primeiroNome: nome, segundoNome, idade} = usuario; // Renomeando a variável primeiroNome para nome

console.log(nome, segundoNome, idade); // Imprimindo as variáveis desestruturadas

const propriedades = {a: 10, b: 20, c: 30};

const novoObjeto = {...propriedades, d: 40}; // Criando um novo objeto utilizando o spread operator

console.log(novoObjeto);