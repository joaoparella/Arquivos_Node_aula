const prompt = require('prompt-sync')();

var valorEmDolar = Number(prompt("Digite aqui o valor em dólar: "));

var cotacaoDolar = Number(prompt("Digite aqui a cotação do dólar: "));

var valorEmReal = valorEmDolar * cotacaoDolar;
console.log("O valor em reais é: R$" + valorEmReal);