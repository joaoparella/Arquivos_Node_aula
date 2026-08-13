const prompt = require('prompt-sync')();

var numero = parseInt(prompt("Digite aqui um número: "));

if (numero < 0){
    console.log("O número é negativo.")
} else if (numero > 0){
    console.log("O número é positivo.")
} else {
    console.log("O número é zero.")
}