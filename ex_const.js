var n1 = 3;
const n2 = 1;

if (true){
    const n2 = 10;
    var n1 = 15;
    var resultadoEscopo = n1 + n2;
}
n2 = 10;
var resultado = n1 + n2;

console.log("Resultado fora do escopo: ", resultado);   
console.log("Resultado dentro do escopo: ", resultadoEscopo);