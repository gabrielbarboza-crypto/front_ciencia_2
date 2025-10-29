// dados: simples numericos, strings, boolean...
// arra: [1, 2, 3, 'ana]
//objetos: {nome: 'gabriel', idade: 18}
//funções: function somar (){}, () => {}

{
    //propriedades: valor
    //      key   : value
}

 const perfil = {
    nome: 'gabriel',
    idade: 18,
    profissao: 'desempregado',
    solteiro: true,
    residencia: 'casa',
    roupas: ['camiseta', 'shorts', 'jeans']
 }

console.log(Object.entries(perfil)) // traz chaves e valores
console.log(Object.keys(perfil)) //traz chaves
console.log(Object.values(perfil)) // traz valores

// let dadosPerfil = []

//  for(let dado in perfil){
//     dadosPerfil.push(perfil[dado])
//  }
// alert(dadosPerfil)

//  for(let dados in perfil){
//     console.log(perfil[dados])
//  }

// atribuição dinâmica
//perfil.roupas = ['camiseta', 'shorts', 'jeans']

// console.log(perfil.nome)
// console.log(perfil.idade)
// console.log(perfil.profissao)
// console.log(perfil.solteiro)
// console.log(perfil.residencia)
