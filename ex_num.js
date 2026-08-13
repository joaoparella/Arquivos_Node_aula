let largura = "10.5";
let altura = "5";
console.log(parseFloat(largura) * parseFloat(altura)); // 52.5 
console.log(parseInt(largura) * parseInt(altura));  // 50
console.log(Number(largura) * Number(altura));  // 52.5

// Arredondamento
let num1 = 10.5;
let num2 = 5.3;
console.log(Math.round(num1) * Math.round(num2)); // 55
