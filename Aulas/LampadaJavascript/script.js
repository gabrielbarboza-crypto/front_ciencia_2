const imgLampada = document.getElementById('lampada')
const btnAlternar = document.getElementById('btn-alternar')
const baseUrlImg = "https://cuddly-invention-wrjxrq5pjpwj2p46-5501.app.github.dev/Aulas/LampadaJavascript/"

//  alert(imgLampada.src)
//  alert(btnAlternar.textContent)
btnAlternar.addEventListener('click', function () {
    if (imgLampada.src == baseUrlImg + 'lampada1.png') {
        imgLampada.src = 'lampada2.png'
        btnAlternar.textContent = "lâmpada Acesa!"
        btnAlternar.style.backgroundColor = 'yellow'
    } else {
        imgLampada.src = 'lampada1.png'
        btnAlternar.textContent = "lâmpada Apagada!"
        btnAlternar.style.backgroundColor = '#ade534'
    }
})
btnAlternar.addEventListener('dblclick', function () {
    imgLampada.src = 'lampada0.png'
    btnAlternar.textContent = "lâmpada Queimada!"
    btnAlternar.style.backgroundColor = '#ee1313ff' 
})