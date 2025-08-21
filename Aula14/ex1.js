//crie uma função que receba 2 números e uma operação matemática e retorna o resultado
let result = 0

function calculadora (num1,op,num2){
    if(op ==="+"){
       result = (num1 + num2);
    }else if(op ==="-"){
         result = (num1 - num2);
    }else if(op ==="*"){
         result = (num1 * num2);
    }else if(op ==="/"){
         result = (num1 / num2);
    }
    return result;
}
console.log(calculadora(5, "*", 6))