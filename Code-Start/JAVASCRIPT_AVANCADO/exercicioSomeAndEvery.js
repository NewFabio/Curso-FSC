// 1. Guarde em uma variável se algum valor da lista "numeros" é par, e logue o resultado.

const numeros = [1, 2, 3, 4, 5, 6];

const temNumeroPar = numeros.some(numero => numero % 2 === 0);
console.log(temNumeroPar);

// 2. Guarde uma variável se alguma pessoa da lista "pessoas" é maior de idade, e logue o resultado.

const pessoas = [
  { nome: 'João', idade: 17 },
  { nome: 'Maria', idade: 22 },
  { nome: 'Pedro', idade: 15 },
];

const temPessoaMaiorDeIdade = pessoas.some(pessoa => pessoa.idade >= 18);
console.log(temPessoaMaiorDeIdade);

// 3. Guarde em uma variável se todos da lista "numeros2" é pra, e logue o resultado.

const numeros2 = [1, 2, 3, 4, 5, 6];

const todosSaoPares = numeros2.every(numero => numero % 2 === 0);
console.log(todosSaoPares);

// 4. Guarde em uam variável se todos os itens da "listaDeDesejos" está em estoque (quantidadeEstoque maior que 0).

const listaDeDesejos = [
  { titulo: 'Notebook', quantidadeEstoque: 5 },
  { titulo: 'Mouse', quantidadeEstoque: 10 },
  { titulo: 'Teclado', quantidadeEstoque: 0 },
];

const todosEstaoEmEstoque = listaDeDesejos.every(item => item.quantidadeEstoque > 0);
console.log(todosEstaoEmEstoque);