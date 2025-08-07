const { useSyncExternalStore } = require("react");

//exercicio1  lista de alunas com sorvete favorito
let alunas = ["Ana", "Maria" , "Carol" , "Mel"];
let sabores = ["chocolate" , "morango", "flocos", "menta com chocolate"];

for (let i = 0; i < alunas.length && i < sabores.length; i++) {
  console.log( "Aluna: " + alunas[i] + " Sabor preferido: " + sabores[i])
}

//exercicio 2 rechear 10 donuts, multiplos de 3 recebem chocolate, outros baunilha
for(i = 1;  i < 10 ; i++){
    if( i % 3 === 0){
        console.log(i + " Rechear com chocolate")
    }else{
        console.log(i + " Rechear com baunilha")
    }
}

//exercicio 3 lanchonete virtual, 1 ver cardapio, 2 fazer pedido, 3 falar com atendente e 4 sair
const prompt = require("prompt-sync")();
opcao = parseInt(prompt("Escolha uma opção: "));

while(opcao !== 4 ){
switch(opcao){
    case 1 :"Ver cardápio";
    break;
    case 2 : "Fazer pedido";
    break;
    case 3 : "Falar com atendente";
    break;
    default:
    console.log("Valor inválido!");
}
}
