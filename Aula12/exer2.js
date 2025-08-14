//calcular a soma e a média dos elementos e um array
let listaNro = [56, 78, 90, 3, 12];
let soma = 0;
let media = 0;

for (let i = 0; i< listaNro.length; i++) 
{
    soma += listaNro[i];
    media = soma / listaNro.length;  
}  
console.log(`Soma: ${soma} + Media ${media}`)
