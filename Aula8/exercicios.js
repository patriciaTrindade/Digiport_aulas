//estrutura condicional if ele & switch case

//exercicio 1 lê 3 números, e mostra o maior e o menor
let nro1 = 16
let nro2 = 37
let nro3 = 9

let maior = nro2
let menor = nro2


if (nro1 > maior){
    maior = nro1
}
if (nro3 > maior){
maior = nro3
}

if (nro1 < menor){
    menor = nro1
}
if (nro3 < menor){
menor = nro3
}

console.log("Maior: "+maior)
console.log("Menor: "+menor)

//exercicio 2 recebe um nro e verifica se é positivo, negativo ou zero
let num = 89

if(num < 0){
    console.log("É negativo:" + num)
}else if (num > 0){
   console.log("É positivo:" + num) 
}else{
    console.log("É zero:" + num)
}

//exercicio3 identifica o turno e retorna bom dia, boa tarde ou boa noite
let turno = "N"
switch(turno) {
  case 0:
   turno == "N"
   console.log("Boa noite")
    break;
  case 1:
     turno == "T"
   console.log("Boa tarde")
    break;
  case 2:
     turno == "D"
   console.log("Bom dia")
    break;
}