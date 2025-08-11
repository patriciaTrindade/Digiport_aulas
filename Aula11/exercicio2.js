//exercicio 2
const prompt = require("prompt-sync")();
for(let i =1; i<=7; i++){
    opcao = parseInt(prompt(`Quantas maçãs João colheu dia ${i} `))
    console.log(`No dia ${i} João colheu ${opcao} maçãs`)
}