/**ALGORITMO 
 * 1- Pegar a referências dos dados do Formulário
 * 2- Armazenar e agrupar os dados em Estrutura de Dados adequada
 * 3- Criar um Modelo dinâmico de Card
 * 4- Renderizar o Modelo de Card com os dados armazenados
 * 5- Apagar os dados da lista (último inserido na lista) 
 * 
 * CARD (3 linhas Div com img, h3, p) Classe CSS do card: 'card','imagem-container'
 * Após cada operação imporante Limpar Cache ou Atualizar Card
*/

const formulario = document.querySelector ('#form-user')
const btnRemover = document.querySelector ('#remover')
const conteinerCArds = document.querySelector ('#conteiner-card')
const itensProdutos = []
//addEvemtListener => Escutador de eventos
formulario.addEventListener('submit',function(event){
    event.preventdefault()
    const titulo = document.querySelector ('#nome').Value.trim()
    const descricao = document.querySelector ('#descricao').Value.trim()
    const urlImagen = document.querySelector ('#imagen') .Value.trim()
    itensProdutos.push(titulo, descricao, urlImagen).Value.trim()

    console.log(itensProdutos)

    formulario.reset()
})
//CRIA UMA FUNÇÃO QUE GERA UM TEMPLETE DO CARD
function criarCardNovo(){
    //TODO: inserir card atualizado na página
}

//RENDERIZAR CARD NOVO
function renderizarCard(){
    //TODO:inserir card novo na pagina
}

btnRemover.addEventListener('click', function(){
    alert('Isso vai acabar deletando um card')
})
