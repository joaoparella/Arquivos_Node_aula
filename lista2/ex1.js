const prompt = require('prompt-sync')();

var idade = parseInt(prompt("Digite aqui a idade da pessoa: "));

if (idade >= 18){
    console.log("A pessoa é maior de idade.")
}else{
    console.log("A pessoa é menor de idade.")
}