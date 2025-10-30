// Funções são blocos de código que podem ser
// reaproveitados ao longo da execução do progama
// características:
//     >Podem ser nomeados ou não
//     >Poder receber parâmetros ou não
//     >Podem retornar valores ou não

// declaração de função
function DizOla(){
    alert("Diz olá!")
}
function DizOlaPessoa(nome){
    alert(`Não seja tímido(a) ${nome}. Fala oi!! `)
}
const jogadores = ['Neymar', 'Ronaldinho', 'messi']
const frutas = ['banana', 'morango', 'uva']

function FormataTexto(lista){
    for(let texto of lista){
        console.log(texto.toUpperCase())
        //texto.toLowerCase() > tudo para minusculo
        //texto.trim() > elimina espaços em branco
        //texto.join(' outras coisa ') > junta outro texto
    }
}
//FormataTexto(jogadores)
function adicao(n1, n2){
    return n1 + n2
}
const resultadodoAdicao = adicao(5, 25) +90 valor 120
console.log(`adicao: ${resultadodoAdicao}`) 
// function subtracao(n1, n2){
//     return n1 / n2 
// }




//criar para divisão, multiplcação e subtração

// invocar ou chamar função

// DizOla()
// DizOlaPessoa("Cleitinho")
// DizOlaPessoa("Ana")
// DizOlaPessoa("Julius")