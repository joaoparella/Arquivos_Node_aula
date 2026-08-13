
const prompt = require('prompt-sync')();
let numero = Number(prompt("Digite um número:"));

if (numero > 10) {
    console.log("Número maior que 10");
} else {
    console.log("Número menor ou igual a 10");
}
