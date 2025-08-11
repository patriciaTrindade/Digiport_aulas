//exercio 6
const prompt = require("prompt-sync")();
const passw = "1234";
let senha = "";
while(senha != passw){
      senha = prompt("Digite a senha: ")
     if(passw == senha){
          console.log("Senha correta! Acesso concedido")
     }
}
