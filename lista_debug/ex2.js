const prompt = require('prompt-sync')();
let soma = 0;
let numero;

do {
    numero = Number(prompt("Digite um número para somar (0 para sair):"));
    soma = soma + numero;
} while (numero != 0);

console.log("Soma total: " + soma);