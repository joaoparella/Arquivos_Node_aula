const prompt = require('prompt-sync')();

var n1 = 0;
var n2 = 0;

var n1 = Number(prompt("Digite aqui o nota 1: ")); 
var n2 = Number(prompt("Digite aqui o nota 2: "));

var media = (n1 + n2) / 2;

if (media >= 7) {
    console.log("Sua media foi: " + media + " e você foi aprovado!");
} else if(media >= 5 && media < 7) {
    console.log("Sua media foi: " + media + " e você está em recuperação!");  
}else {
    console.log("Sua media foi: " + media + " e você foi reprovado!");
}