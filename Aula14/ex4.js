//função q calcula a média ritmética de um array de números e retorna o resultado
let notas = [9,7,6,10]
function calculaMedia(notas){
    let media = 0;
    let total = 0;
    for(i = 0; i< notas.length ; i++){
    total += notas[i];
    }
    media = total / notas.length;
    return media;
    }
console.log(calculaMedia(notas))