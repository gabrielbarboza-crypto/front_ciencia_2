/** OPERADOERS ARITIMÉTICOS */
// + - * / % **

/** OUTROS OPERADORES  */
// > >= < <= != (maior, maior que, menor, menor que, diferente)
// && || (E lógico, OU lógico)
/*
const ehpar = 15 // numeber

if(ehpar % 2 ==0)  {
    //trata quando a condição for verdadeira
    alert('O número ' + ehpar +  'é par!') 
} else {
    //trata condição quando falsa
    alert('O número ' + ehpar + ' é impar!')
}

console.log(ehpar % 2==0)
*/

const idade = 71

if (idade >= 18 || idade <= 70) {
    alert('Você tem ' + idade + 'anos \nPode entar no baile')
} else if (idade > 70) {
    alert('Você tem ' + idade + 'anos \nPode entar\nSomente com acompanhantes')
} else if (idade < 18) {
    alert('vaza,menor!')
}
