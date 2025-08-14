//percorrer array e achar o número maior e o menor
let listaNro = [56, 78, 90, 3, 12];
let maior = listaNro[0];
let menor = listaNro[0];

for (let i = 0; i< listaNro.length; i++) 
{
    if(maior < listaNro[i]){
        maior = listaNro[i]
    }else if(menor > listaNro[i]){
        menor= listaNro[i]
    }
}  
console.log(`Maior: ${maior} + Menor: ${menor}`)