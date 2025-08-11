//exercicio 7
prompt = require("prompt-sync") (); 

opcao = 0; 
let saldo = 1000;

while (opcao !== 4) { 

    console.log("1 - Verificar o saldo"); 

    console.log("2 - Depositar valor"); 

    console.log("3 - Sacar valor solicitado"); 

    console.log("4 - Sair"); 

opcao = parseInt(prompt("Escolha uma opção: ")); 

switch (opcao) { 

    case 1: 

        console.log(`Verifique o saldo ${saldo}`); 

        break; 

     

    case 2: 

        console.log("Deposite o valor"); 

        break; 

    case 3: 

        console.log("Saque o valor solicitado"); 

        break; 

     

    case 4: 

        console.log("Obrigada pela visita! Volte sempre!"); 

        break; 

    default: 

        console.log("Opção invalida. Tente novamente"); 

} 

} 

 