console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJameiro = `Rio de Janeiro`;

const listaDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDestino.push( `Curitiba`)
console.log("Destinos possíveis");
// console.log(salvador, saoPaulo, rioDeJameiro);

console.log(listaDeDestino);

listaDeDestino.splice(2,1);

listaDeDestino.splice(1,1);

console.log(listaDeDestino[1]);
