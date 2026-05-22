const usuarios = [
    {
        nome: 'João',
        idade: 25
    },
    {
        nome: 'Maria',
        idade: 30
    }
]

// const usuariosComIdadePor2 = usuarios.map((item, index) => {
//     return {...item, idade: item.idade * 2}
// })

const usuariosComIdadePor2 = usuarios.map((item, index) => (
    {...item, idade: item.idade * 2}
))

console.log(JSON.stringify(usuariosComIdadePor2))