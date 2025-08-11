//exercio 4
const prompt = require("prompt-sync")();
let red = 0
let green = 0

for(let i =1; i<=10; i++){
    opcao = prompt(`Qual é a cor da fruta ${i} ?`)
    console.log(`A cor da fruta ${i} é ${opcao}`)
    if(opcao.toLowerCase() == "vermelho"){
        red++
    }else if(opcao.toLowerCase() == "verde"){
        green++
    }
}
console.log(`Vermelhos: ${red}`)
console.log(`Verdes: ${green}`)
