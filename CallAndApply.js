function getPreço(imposto=0,moeda='R$'){
    return `${moeda} ${this.preco *(1-this.desc) * (1+imposto)}`
}

const produto={
    nome:'notebook',
    preco:4589,
    desc:0.15,
    getPreço
}
global.preco=20
global.desc=0.1

console.log(getPreço())
console.log(produto.getPreço())

console.log("----------------------")
console.log("CallAndApply")
const carro={ preco:499990,desc:0.20 }
console.log(getPreço.call(carro))
console.log(getPreço.apply(carro))

console.log(getPreço.call(carro,0.17,'$'))//primeiro paramêtro é o objecto que será usado como contexto de execução
console.log(getPreço.apply(carro[0.20,'kz']))