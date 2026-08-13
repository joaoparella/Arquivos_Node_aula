const prompt = require('prompt-sync')();

var nota1 = Number(prompt("Digite aqui a nota 1: "));
var nota2 = Number(prompt("Digite aqui a nota 2: "));
var nota3 = Number(prompt("Digite aqui a nota 3: "));

var mediaPonderada = ((nota1*1) + (nota2*2) + (nota3*3)) / 6;
console.log("A média do aluno é: " + mediaPonderada);