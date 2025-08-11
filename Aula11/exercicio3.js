//exercicio 3
let pos = 0
let neg = 0
let zero = 0
for(let num = 1; num <= 10 ; num++){
if(num > 0){
    pos = pos+1
}else if(num > 0){
    neg = neg+1
}else{
    zero = zero+1
}
}
console.log(`Positivos: ${pos}`)
console.log(`Negativos: ${neg}`)
console.log(`Zeros: ${zero}`)