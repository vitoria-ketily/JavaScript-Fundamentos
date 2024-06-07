/*console.log('exemplo um:')
for(let i=0; i< 10; i++){
    console.log(i)
}
console.log('i =',i)*/

console.log('exemplo dois:')
const funcs = []
for(let i=0; i<15; i++){
    funcs.push(function(){
        console.log(i)
    })
}

//chama o número pedido e retorna
funcs[2]() 
funcs[14]()