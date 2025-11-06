/*
* Funções Arrow são fuções anônimas, ou seja, sem NOME.
* Podem ser passadas como parâmetro para outrsa funções
  ou podem ser atribuidas a outras variáveis.
* Em JavaScript, funções são conhecidas como 
  "Cidadão de primeira classe"
*/  

// let numero = 0
// setInterval(function(){
//     numero = numero + 10
//     console.log(numero)
// }, 1000)

           //refatorar

let numero = 0
const intervalo1 = setInterval(() => {
    numero = numero +10
    console.log(numero)
}, 1000)

setTimeout(() => {
    clearInterval(intervalo1)
}, 5000);
    