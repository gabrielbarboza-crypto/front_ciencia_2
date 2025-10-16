/*
Arrays são agrupadores de valores númericos, textuais, booleanos, objeotos, etc. Eles são ordenados a partir do índice '0'
EX: const time = ['Pedro', 22 , 'ana', 'julio']
    //indice         0     1      2       3
*/
const vestuario = ['camiseta','teni nike', 'calça jeans', 'calça pulma', 'tenis addidas', 'chuteira']
vestuario[999] = 'mochila' // Atribuição dinâmica

for(let valor in vestuario) {
    console.log(valor)
}
//console.log(vestuario[0])
//console.log(vestuario[2])
//console.log(vestuario[4])
//console.log(vestuario[5])
//console.log(vestuario[999])