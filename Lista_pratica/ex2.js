const prompt = require('prompt-sync')();

var idade = parseInt(prompt("Digite aqui a idade da pessoa: "));

var dias = idade * 365;

console.log("A idade da pessoa em dias é: " + dias);