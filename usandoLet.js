//escopo de bloco
let numero = 1 
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)


//escopo global quando o valor não for identificado no bloco mas for identificado fora dele
let valor = 1 //pode ser feito com var também
{
    let valor2 = 2
    console.log('dentro =', valor)
}
console.log('fora =', valor)