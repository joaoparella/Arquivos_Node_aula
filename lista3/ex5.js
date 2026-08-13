const prompt = require('prompt-sync')();

do {
    var senha = prompt("Digite a senha: ");
    if (senha !== "1234"){
        console.log("Senha incorreta. Acesso negado.");
    } else {
        console.log("Senha correta. Acesso permitido.");
    }
} while (senha !== "1234");

do {
    var senha = prompt("Digite a senha: ");
    if (senha !== "1234"){
        console.log("Senha incorreta. Acesso negado.");
    } 
} while (senha !== "1234");
console.log("Senha correta. Acesso permitido.");

do {
    var senha = prompt("Digite a senha: ");
    if (senha == "1234"){
        console.log("Senha correta. Acesso permitido.");
        break;
    } 
    console.log("Senha incorreta. Acesso negado.");
} while (true);