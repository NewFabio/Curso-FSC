const pessoas = [
    { nome: 'João', idade: 30 },
    { nome: 'Maria', idade: 25 },
    { nome: 'Pedro', idade: 35 },
    { nome: 'Ana', idade: 28 },
    { nome: 'João', idade: 35 }
]

// find: Retorna o primeiro elemento que satisfaz a condição
const primeiraPessoaEncontrada = pessoas.find(pessoa => pessoa.nome === 'João')

console.log(primeiraPessoaEncontrada)

// findIndex: Retorna o índice do primeiro elemento que satisfaz a condição
const todasPessoasEncontradas = pessoas.findIndex(pessoa => pessoa.nome === 'João')

console.log(todasPessoasEncontradas)