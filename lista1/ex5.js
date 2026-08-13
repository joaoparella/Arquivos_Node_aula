const prompt = require('prompt-sync')();

var distanciaMetros = Number(prompt("Digite aqui a distância em metros: "));

var distanciaCm = distanciaMetros * 100;
var distanciaMm = distanciaMetros * 1000;

console.log("A distância em centímetros é: " + distanciaCm + " cm");
console.log("A distância em milímetros é: " + distanciaMm + " mm");

let metros = parseFloat(prompt("Metros: "));
console.log(`Centímetros: ${metros * 100}, Milímetros: ${metros * 1000}`);