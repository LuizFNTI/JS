let num = document.getElementById('txtn')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let res2 = document.getElementById('res2')

let vetor = []

function isnum(n) { 
    
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, v) {
    if(v.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isnum(num.value) && !inlista(num.value, vetor)) {
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado!`
        lista.appendChild(item)
        res2.innerHTML = ''

        res.innerHTML = ''
        for(let pos in vetor) {
            res.innerHTML += `O valor na posição ${pos} do vetor é ${vetor[pos]}<br>`
        }
    } else {
        window.alert('Valor Invalido')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(vetor.length > 0) {
        let total = vetor.length

        let menor = vetor[0]
        let maior = vetor[0]

        let soma = 0
        let media = 0

        for(let p in vetor) {
            soma += vetor[p]

            if(vetor[p] > maior) {
                maior = vetor[p]
            } 
            if(vetor[p] < menor) {
                menor = vetor[p]
            }
        }
        media = soma / total

        res2.innerHTML = `A quantidade de elementos dentro do vetor é: ${total}<br>`
        res2.innerHTML += `O maior valor do vetor é ${maior}<br>`
        res2.innerHTML += `O menor valor do vetor é ${menor}<br>`
        res2.innerHTML += `A soma de todos os elementos é: ${soma}<br>`
        res2.innerHTML += `A média entre os elementos é: ${media}`
    } else {
        window.alert('Erro!')
    }
}