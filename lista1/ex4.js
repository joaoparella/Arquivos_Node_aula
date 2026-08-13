const prompt = require('prompt-sync')();

var valorPedido = Number(prompt("Digite aqui o valor do pedido: "));
var porcDesconto = Number(prompt("Digite aqui a porcentagem de desconto: "));

var valorTotal = valorPedido - (valorPedido * (porcDesconto / 100));

console.log("O valor total é: R$" + valorTotal.toFixed(2));