function calcular() {
    var res = document.getElementById('res')
    var txttabuada = document.getElementById('txttabuada')
    var txtfim = document.getElementById('txtfim')

    var tabuada = Number(txttabuada.value)
    var fim = Number(txtfim.value)

    res.innerHTML = ''

    if(tabuada >= 0 && fim >= 0) {    
        for(var cont = 1; cont <= fim; cont++) {
            var resp = tabuada * cont
            res.innerHTML += `${tabuada} x ${cont} = ${resp} <br>`
        } 
    } else {
        window.alert('Erro!!')
    }
}

