console.log(Math.ceil(6.1))
const obj1 = {} //objeto definido
obj1.nome = 'Bola'
// obj1['nome] = 'Bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome //publico
    this.exec = function () {
        console.log('exec....')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()
