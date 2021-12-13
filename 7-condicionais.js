console.log(`Trabalhando com condicionais`);

const listaDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagem = true;

console.log("Destinos possíveis");
console.log(listaDeDestino);

if(idadeComprador>=18 || estaAcompanhada){
    listaDeDestino.splice(1,1);
}else{
    console.log("Comprador menor de idade e sem acompanhante, sem venda");
}
    
console.log(listaDeDestino);

console.log("Embarque: \n\n");

if(idadeComprador>=18 && temPassagem){
    console.log("Boa viagem!");
}else{
    console.log("Não pode viajar!");
}

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
// console.log(idadeComprador != 18);