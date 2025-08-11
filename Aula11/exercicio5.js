//exercicio 5
const prompt = require("prompt-sync")();
let soma = 0
let nro = 0
while(nro >= 0){
     nro = parseInt(prompt(`Digite um número `))
       if(nro >= 0){
        soma = soma+nro
       }
}
console.log(`A soma dos números é: ${soma}`)