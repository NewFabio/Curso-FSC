const foguetes = [
    { pais: 'US', lancamentos: 23},
    { pais: 'Russia', lancamentos: 19},
    { pais: 'China', lancamentos: 15},
    { pais: 'Europa', lancamentos: 7},
    { pais: 'India', lancamentos: 4},
    { pais: 'Japao', lancamentos: 2},
]

const totalLancamentos = foguetes.reduce((total, foguete) => {
    return total + foguete.lancamentos;
}, 0);

console.log(totalLancamentos);