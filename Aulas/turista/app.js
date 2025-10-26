const lugares = ['praia', 'montanha', 'lagoa']
const mensagem = `
        -- ROTEIRO VIAGENS --
        lugares: ${lugares}
        -------------------`
alert(mensagem) //fake menu
const EscolhaUsuario = prompt('pra onde deseja viajar? ')
if (EscolhaUsuario == null || EscolhaUsuario == '') {
    alert('por favor digite um valor da lista de viagem!')
} else {
    if (lugares.includes(EscolhaUsuario)) {
        if (EscolhaUsuario == 'praia') {
            //alert('praia!!')
            window.location.href = './praia.html'
        } else if (EscolhaUsuario == 'montanha') {
            //alert('montanha...!!')
            window.location.href = './montanha.html'
        } else if (EscolhaUsuario == 'lagoa') {
            //alert('lagoa!!')
            window.location.href = './lagoa.html'
        }
    }
}
