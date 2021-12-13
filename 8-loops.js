console.log(`Trabalhando com condicionais`);

const listaDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagem = false;
const destino = "Salvador";

console.log("Destinos possíveis");
console.log(listaDeDestino);

const podeComprar = idadeComprador>=18 || estaAcompanhada;
   
let contador = 0;
let destinoExiste = false;

while(contador<3){
    if(listaDeDestino[contador] == destino){
        console.log(listaDeDestino[contador]);
        destinoExiste = true;
        break;
    }
    contador++;
}

if(!destinoExiste){
    console.log("Destino não existe");
}

if(podeComprar && destinoExiste){
    console.log("Boa viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}

for(let cont=0;cont<3;cont++){
    if(listaDeDestino[cont] == destino){
        console.log(listaDeDestino[cont]);
        destinoExiste = true;
        break;
    }
}