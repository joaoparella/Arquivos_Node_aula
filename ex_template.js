var idade = 15;
var nome = "joao"
var bebidaMaior = "cerveja"
var bebidaMenor = "Cocacola"
var resposta = idade >= 18 ? "Maior de idade" : "Menor de idade";
const pedido = `${nome} diz: por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}`
console.log(pedido)
console.log(resposta);
