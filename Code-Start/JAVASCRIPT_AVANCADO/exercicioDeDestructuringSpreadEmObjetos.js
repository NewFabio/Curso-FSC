// 1. Acesse as propriedades "tamanhoDaBarba", "idade" e "familia" do objeto "viking" por meio do Destructuring, e logue-as no console.

const viking = {
    familia: 'Lothbrok',
    tamanhoDaBarba: 'Longa',
    idade: 35,
}

const {tamanhoDaBarba, idade, familia} = viking;

console.log(tamanhoDaBarba, idade, familia);

// 2. Acesse as propriedades "name" e "age" do objeto "usuario" por meio do Destructuring, e renomeie-as para sua tradução em português, e logue-as no console.

const usuario =  {
    name: 'Jane Doe',
    age: 28,
}

const {name: nome, age: idade1} = usuario;

console.log(nome, idade1);

// 3. Acesse, utilizando o Destructuring, todas as propriedades dentro dos objetos "dadosPessoais" e "dadosProfissionais" do objeto "piloto", e logue-as no console.

const piloto = {
    dadosPessoais: {
        name: 'Max Verstappen',
        age: 27,
        nacionalidade: 'Holandês',
    },
    dadosProfissionais: {
        equipe: 'Red Bull Racing',
        campeonatos: 2,
    },
}

const {dadosPessoais: {name, age, nacionalidade}, dadosProfissionais: {equipe, campeonatos}} = piloto;

console.log(name, age, nacionalidade, equipe, campeonatos);

// 4. Assinale as propriedades "a" e "b" do objeto abaixo a duas variáveis, e distribua as restantes em uma.

const obj = {a: 10, b: 20, c: 30, d: 40}

const  {a: x, b: y, ...rest} = obj

console.log(x, y, rest);