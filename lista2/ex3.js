const prompt = require('prompt-sync')();

var numero = parseInt(prompt("Digite aqui um número: "));

if ((numero % 2) == 0 ){
    console.log("O número é par.")
} else{
    console.log("O número é impar.")
}