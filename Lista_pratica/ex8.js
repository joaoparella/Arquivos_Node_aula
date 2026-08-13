const prompt = require('prompt-sync')();

var numero = Number(prompt("Digite aqui um número: "));

var sucessor = numero + 1;
var antecessor = numero - 1;
console.log (antecessor,"-",numero,"-",sucessor);