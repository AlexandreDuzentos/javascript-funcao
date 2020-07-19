//função factory é uma função que retorna um objecto,por isso do nome factory fabrica objectos aprtir de uma função
console.log("-----------------------")
function criarPessoa(){
    return{
        nome:'Ana',
        sobrenome:'silva'
        ['sobrenome']='alexandre'
    }
}
console.log(criarPessoa())

console.log("-----------------------")
function criarProduto(nome,preço){
    return{
        nome,
        preço,
        desconto:0.1
    }
}
console.log(criarProduto('Notebook',2199.49))
console.log(criarProduto('Ipad',1500.50))
console.log(criarProduto('Iphone',890.99))

console.log("-----------------------")
function name(name1){
     return{
         exibir:function(){
             return "O seu nome é "+name1
            }
     }
}
const p1=name("Cristovão Colombo")
console.log(p1.exibir())

console.log("---------------------------------")
function nada(){
    return{
        nome:"martins",
        idade:17,
        morada:"futungo",
    }
}
console.log(nada())

console.log("---------------------------")
function nada2(nome){
    return{
        nome,
    }
}
console.log(nada2("Almeida"))

