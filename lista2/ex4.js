const prompt = require('prompt-sync')();

var numero1 = Number(prompt("Digite aqui o primeiro número: "));
var numero2 = Number(prompt("Digite aqui o segundo número: "));

var operacao = prompt("Digite aqui a operação desejada (+, -, *, /): ");

switch (operacao) {
    case "+":
        console.log("O resultado da soma é: " + (numero1 + numero2));
        break;
    case "-":
        console.log("O resultado da subtracao é: " + (numero1 - numero2));
        break;
    case "*":
        console.log("O resultado da multiplicacao é: " + (numero1 * numero2));
        break;
    case "/":
        console.log("O resultado da divisao é: " + (numero1 / numero2));
        break;
    default:
        console.log("Operacao invalida.");
        break;
}