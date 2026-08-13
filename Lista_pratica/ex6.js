const prompt = require('prompt-sync')();

var peso = Number(prompt("Digite aqui o peso: "));
var altura = Number(prompt("Digite aqui a altura: "));

var imc = peso / (altura * altura);
var imc = peso / (altura ** 2);
console.log("O IMC do usuário é: " + imc);