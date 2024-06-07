console.log('armazenar uma função em uma variável')
const imprimirSoma = function(a,b){
    console.log(a+b)
}
console.log(imprimirSoma(2,5))

console.log('armazenar uma função Arrow em uma variável')
const soma = (a, b) => {return a+b}
console.log(soma(2,5))

console.log('retorno implícito')
const subtracao = (a,b) => a - b
console.log(subtracao(2,5))

const imprimir2 = a => console.log(a) //função de um único parâmetro
imprimir2('legal!')
