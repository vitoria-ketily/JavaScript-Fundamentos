//a variável não pode ser chamada pois está fora da função 

/*function teste(){
    var local = 123
}
console.log(local)*/

var numero = 1 
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)