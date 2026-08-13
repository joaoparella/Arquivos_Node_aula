const prompt = require('prompt-sync')();

var nota1 = Number(prompt("Digite aqui a primeira nota: "));
var nota2 = Number(prompt("Digite aqui a segunda nota: "));
var nota3 = Number(prompt("Digite aqui a terceira nota: "));

var mediaAritmetica = (nota1 + nota2 + nota3) / 3 ;

console.log("A média aritmética é: "+ mediaAritmetica.toFixed(2));