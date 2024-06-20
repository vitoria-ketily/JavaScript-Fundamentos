const saudacao = 'opa' //contexto léxico 1 -> local onde variável foi definida no código 

function exec() {
    const saudacao = 'falaaa' //contexto léxico 2 
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)