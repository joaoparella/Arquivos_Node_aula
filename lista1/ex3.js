const prompt = require('prompt-sync')();

var nome = prompt("Digite seu primeiro nome:")
var sobrenome = prompt("Digite seu sobrenome:")
var nomeCompleto = nome+" "+ sobrenome;

console.log("Bem vindo " + nome + " " + sobrenome + "!");
console.log("Bem vindo", nome, sobrenome, "!");
console.log("Bem vindo", nomeCompleto, "!");