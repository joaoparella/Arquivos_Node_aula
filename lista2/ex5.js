// Solicita a nota do aluno e converte a resposta para número
const nota = parseFloat(prompt("Digite a nota do aluno:"));

// Verifica se o valor inserido é um número válido
// if (isNaN(nota)) {
//   console.log("Por favor, digite um número válido.");
// } else 
    
if (nota >= 7) {
  console.log("Aprovado");
} else if ((nota >= 5) && (nota <= 6.9)) { //cuidado
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}