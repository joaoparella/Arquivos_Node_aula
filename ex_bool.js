const usuarioLogado = true;
const idadeUsuario = 18;
const idadeDigitadaNoFormulario = 18; 

const validoComTipoSolto = (idadeDigitadaNoFormulario == idadeUsuario); 
const validoComTipoEstrito = (idadeDigitadaNoFormulario === idadeUsuario); 

console.log("Validação de Idade:");
console.log("Usando == :", validoComTipoSolto);   //teste
console.log("Usando === :", validoComTipoEstrito); 

if (usuarioLogado && validoComTipoEstrito) {
    console.log("Cadastro atualizado com sucesso!");
} else {
    console.log("Erro: Os dados digitados não são válidos ou o tipo está incorreto.");
}