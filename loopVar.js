console.log('exemplo um:')
for(var i=0; i< 10; i++){
    console.log(i)
}
console.log('i =',i)

console.log('exemplo dois:')
const funcs = []
for(var i=0; i<15; i++){
    funcs.push(function(){
        console.log(i)
    })
}

//não chama o número pedido e retorna o valor de i
funcs[2]() 
funcs[14]()