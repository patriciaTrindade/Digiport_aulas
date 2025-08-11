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
prompt = require("prompt-sync") (); 

opcao = 0; 

while (opcao !== 4) { 

    console.log("1 - Ver o cardápio"); 

    console.log("2 - Fazer o pedido"); 

    console.log("3 - Falar com um atendente"); 

    console.log("4 - Sair"); 

opcao = parseInt(prompt("Escolha uma opção: ")); 

switch (opcao) { 

    case 1: 

        console.log("Cardapio: Hamburguer, Batata, Refrigerante"); 

        break; 

     

    case 2: 

        console.log("Pedido anotado! Estamos preparando seu lanche com carinho"); 

        break; 

    case 3: 

        console.log("A Atendente está a caminho"); 

        break; 

     

    case 4: 

        console.log("Obrigada pela visita! Volte sempre!"); 

        break; 

    default: 

        console.log("Opção invalida. Tente novamente"); 

} 

} 

 