//exercicio 1 destino das férias
let saldo = 9800
if (saldo >= 15000){
    console.log("Partiu Disney!")
}else if (saldo >= 5000){
    console.log("Bora para Minas Gerais")
}else{
    console.log("Partiu litoral!")
}

//exercico 2 nota do semestre
let nota = 9
if(nota >= 7){
    console.log("Aprovado!")
}else{
    console.log("Reprovado!")
}

//exercicio 3 decisão de compra
let saldoC = 9999.99
if (saldoC >= 10000){
    console.log("Carlos vai comprar um novo PC!")
}else if (saldoC >= 3000 && saldoC < 10000){
    console.log("Carlos vai comprar um smartphone!")
}else{
    console.log("Carlos vai economizar!")
}

//exercicio 4 medalhas
let tempo = 1
if(tempo <= 1){
    console.log("Medalha de ouro!")
}else if(tempo <= 2){
    console.log("Medalha de prata!")
}else{
    console.log("Medalha de bronze!")
}

//exercicio 5 dia da semana
let dia = 3
switch (dia){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido!");
}

//exercicio 6 classificação da nota
let letra = "A"
switch (letra){
    case "A":
        console.log("Excelente");
        break;
    case "B":
        console.log("Bom");
        break;
    case "C":
        console.log("Regular");
        break;
    case "D":
        console.log("Ruim");
        break;
    case "F":
        console.log("Insuficiente");
        break;
    default:
        console.log("Letra inválida!");
}

//exercicio 7 estações do ano
let estacao = 1
switch (estacao){
    case 1:
        console.log("Primavera");
        break;
    case 2:
        console.log("Verão");
        break;
    case 3:
        console.log("Outono");
        break;
    case 4:
        console.log("Inverno");
        break;
    default:
        console.log("Número inválido!");
}

//exercicio 8 classificação po tipo de cliente
let cliente = "Ouro"
switch (cliente){
    case "Bronze":
        console.log("5% de desconto");
        break;
    case "Prata":
        console.log("10% de desconto");
        break;
    case "Ouro":
        console.log("15% de desconto");
        break;
    case "Platina":
        console.log("20% de desconto");
        break;
    default:
        console.log("Tipo de Cliente inválido!");
}