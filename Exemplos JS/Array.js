let vetor = [2, 6, 5, 3, 4]

console.log(vetor)

console.log('O vetor tem ' + vetor.length + ' posições ')//Total de elementos dom vetor

//indexOf: passa por parametro o valor que deseja saber a posição no vetor
let qualPosEelement = vetor.indexOf(6)
console.log(`O Valor ${vetor[1]} esta na posição ${qualPosEelement}`)//[][6][][][][]

vetor.push(1)// Coloca o valor passado por parametro na utima posição
vetor.sort()//Coloca o valor em ordem crecente
console.log(vetor)

console.log("")

//Percorrer o vetor
for(var posicao = 0; posicao < vetor.length; posicao++) {
    console.log(`O valor na posição ${posicao} do vetor é: ${vetor[posicao]}`)//Ler posição vetor: vet[posição]
}


// Utilizando o "for in"

let vet = [10, 20, 30, 40, 50]

//Percorrer o vetor usando o "for in"

console.log("")

for(let pos in vet) {
    console.log(`O valor na posição ${pos} do vetor é ${vet[pos]}`)
}