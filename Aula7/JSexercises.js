//Exercicio1 - Calculo de Salário
let salHora = 30
let horasTrab = 160
let salFinal = salHora * horasTrab
console.log("Salário Final:" + salFinal)

//Exercicio2 - Desconto em produto
let precoOr = 200
let precoDesc = precoOr * 0.10
let precoFinal = precoOr - precoDesc
console.log("Preço final:" + precoFinal)

//Exercicio3 - Verificação de Maioridade
let idade = 17
console.log(idade >= 18)

//Exercio4 - Número par ou ímpar
let nro = 22
if(nro % 2 === 0){
    console.log("O número " + nro +" é par")
}else{
    console.log("O número "+ nro +" é ímpar")
}

function ehPar(num)
{
    return num %2 == 0
}
let x = 2
let y = 5
console.log(ehPar(x))

//Exercicio5 - Comparação == e ====
let preco1 = 50
let preco2 = '50'

//Exercicio6 - Operações lógica
let chuva = true
let umbrella = false
if(chuva && umbrella){
    console.log("Larissa vai sair")
}else{
    console.log("De novo sem guarda chuva, fique em casa!")
}