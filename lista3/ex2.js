const prompt = require('prompt-sync')();
const numero = parseFloat(prompt("Digite o numero:"));

for (var i = 1; i <= 10; i++){
    console.log(numero,"x",i,"=",numero*i)
}
