
//let listaDeTarefas = []
//function adicionarTarefa(listaDeTarefas){
//for(i = 0; i< 4; i++){
//    listaDeTarefas[i] = listaDeTarefas.push("Estudar");
//    listaDeTarefas[i] = listaDeTarefas.push("Trabalhar");
//    listaDeTarefas[i] = listaDeTarefas.push("Dormir");
//    listaDeTarefas[i] = listaDeTarefas.push("Comer");
//}
//return listaDeTarefas;
//}
//console.log(adicionarTarefa(listaDeTarefas))


//ex2
let listaDeTarefas = []
let item
let tarefa ="Trabalhar"
let tarefa2 ="Jogar"
let tarefa3 = "Desenhar"

function adicionarTarefa(item){
     listaDeTarefas.push(item);
     return listaDeTarefas;
}

adicionarTarefa(tarefa);
adicionarTarefa(tarefa2);
adicionarTarefa(tarefa3);
console.log(adicionarTarefa(item));

//ex3
function removerTarefa(item){
    listaDeTarefas.splice(2, 1) 
}
removerTarefa(item)
console.log("Lista de tarefas:" + listaDeTarefas)

