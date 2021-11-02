function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    

    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`

    if(hora >= 0 && hora < 12) {
        document.body.style.background = 'rgba(212, 191, 131, 0.616)'
        img.src = 'img/manha.jpg'
    }
    else if(hora >= 12 && hora < 18) {
        document.body.style.background = 'rgba(94, 94, 194)'
        img.src = 'img/tarde.jpg'
    }
    else {
        document.body.style.background = 'rgb(0, 0, 0, 0.616)';
        img.src = 'img/noite.jpg'
    }
}
