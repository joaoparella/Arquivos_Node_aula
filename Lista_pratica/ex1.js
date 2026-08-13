const prompt = require('prompt-sync')();

var raio = parseFloat(prompt("Digite o raio do círculo: "));
var pi = Math.PI;
var area = pi * raio * raio
var area1 = pi * Math.pow(raio, 2);
var area2 = pi * (raio ** 2)
console.log("A área do círculo é: " + area, " pi=",pi);
console.log("A área do círculo é: " + area1, " pi=",pi);
console.log("A área do círculo é: " + area2, " pi=",pi);    