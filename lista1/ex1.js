const prompt = require('prompt-sync')();
var anoAtual = prompt("Digite aqui o ano atual: ");
var nascimento = prompt("Digite aqui o ano de nascimento: ");
var idade = anoAtual - nascimento;
console.log("A idade da pessoa é: " + idade);
