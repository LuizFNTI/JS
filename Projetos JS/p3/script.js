function contar() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    var numInicio = Number(inicio.value)
    var numfim = Number(fim.value)
    var numpasso = Number(passo.value)

    if(numInicio >= 0 && numfim >= 0 && numpasso > 0) {
        if(numfim > numInicio) {
            for(var cont = numInicio; cont <= numfim; cont += numpasso) {
                res.innerHTML += `${cont} `
            } 
        } else if(numfim < numInicio) {
            for(var cont = numInicio; cont >= numfim; cont -= numpasso) {
                res.innerHTML += `${cont} `
            } 
        } else {
            window.alert('Impossivel Contar!')
        } 
    } else {
        window.alert('Erro!!')
    }
} 

function limpar() {
    res.innerHTML = ''
}
