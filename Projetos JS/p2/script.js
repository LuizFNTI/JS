function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    var imagem = document.getElementById('foto')

    if(Number(formAno.value) > 0 && Number(formAno.value) < ano) {
        var formSex = document.getElementsByName('sex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        if(formSex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <= 4) {
                //Bebe
            } else if(idade > 4 && idade <= 12) {
                 //Criança
            } else if(idade > 12 && idade <= 19 ) {
                //Adolecente
            } else if(idade > 19 && idade <= 30) {
                //Jovem
            } else if(idade > 30 && idade <= 60 ) {
                //Aduto
            } else {
                //Idoso
                res.innerHTML = `${genero} idoso com ${idade} anos!`
                imagem.src = 'img/idoso.jpg'
            }
        } else if(formSex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade <= 4) {
                //Bebe
            } else if(idade > 4 && idade <= 12) {
                 //Criança
            } else if(idade > 12 && idade <= 19 ) {
                //Adolecente
            } else if(idade > 19 && idade <= 30) {
                //Jovem
            } else if(idade > 30 && idade <= 60 ) {
                //Aduto
            } else {
                //Idoso
                res.innerHTML = `${genero} idosa com ${idade} anos!`
                imagem.src = 'img/'
            }
        }
    }else {
        window.alert('Erro!')
    }
}