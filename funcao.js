function imprimirSoma(a,b){
    console.log(a + b)
}

console.log('função sem retorno')
imprimirSoma(2) //2 + underfined its not a number (NaN)
imprimirSoma() //NaN pois não tem nehum valor atribuido

console.log('função com retorno')
function soma(a,b=0){
    return a + b
}

console.log(soma(2,5))
console.log(soma(2))

