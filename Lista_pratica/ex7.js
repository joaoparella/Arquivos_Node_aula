const prompt = require('prompt-sync')();

var cateto1 = Number(prompt("Digite aqui o cateto 1: "));
var cateto2 = Number(prompt("Digite aqui o cateto 2: "));

var hipotenusa = Math.sqrt((cateto1 ** 2) + (cateto2 ** 2));

var hipotenusa = (cateto1 ** 2 + cateto2 ** 2) ** 0.5;

console.log("A hipotenusa do triângulo é: " + hipotenusa);