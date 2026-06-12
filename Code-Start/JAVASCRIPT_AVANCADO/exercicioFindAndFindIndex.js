// 1. Encontre na lista abaixo o objeto que tenha o valor "Japan" como "pais", guarde-o em uma variável e imprima-a no console.

const foguetes = [
    { pais: 'Russia', lancamento: 32 },
    { pais: 'USA', lancamento: 50 },
    { pais: 'China', lancamento: 20 },
    { pais: 'Japan', lancamento: 10 },
    { pais: 'India', lancamento: 15 }
]

const fogueteJapao = foguetes.find(foguete => foguete.pais === 'Japan')

console.log(fogueteJapao)

// 2. Encontre na lista abaixo, a posição que se encontra o item com o "titulo" igual a "Carro de Fórmula 1", guarde-a em uma variável e imprima-a no console.

const listaDeDesejos = [
    { titulo: 'Casa na praia', quantidadeEstoque: 1 },
    { titulo: 'Carro de Fórmula 1', quantidadeEstoque: 5 },
    { titulo: 'Viagem para a Europa', quantidadeEstoque: 2 },
    { titulo: 'Smartphone de última geração', quantidadeEstoque: 10 },
    { titulo: 'Bicicleta de montanha', quantidadeEstoque: 3 }
]

const indiceCarroFormula1 = listaDeDesejos.findIndex(item => item.titulo === 'Carro de Fórmula 1')

console.log(indiceCarroFormula1)