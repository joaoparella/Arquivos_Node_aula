const prompt = require('prompt-sync')();
var resultado = 0 ;
do{
    var numero = Number(prompt("Digite um número: "));
    resultado += numero;
} while (numero !== 0);

console.log("A soma dos números digitados é:", resultado);