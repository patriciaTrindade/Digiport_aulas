//crie uma função q recebe o ano de nascimento e ano atual e retorna idade
function calculaIdade(anoNasc, anoAtual){
    let idade = anoAtual - anoNasc;
    return idade;
}
console.log(calculaIdade(1992, 2025))