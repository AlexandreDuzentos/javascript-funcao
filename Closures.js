//Closure é o escopo criado quando uma função é declarada
//esse escopo permite a função acessar e manipular váriaveis externas à função
const x='global'

function fora(){
    const x='local'
    function dentro(){
        return x
    }
    return dentro
}
const minhafunção=fora()
console.log(minhafunção())





















/*
const obj={
    nome:'alexandre',
    sobrenome:'duzentos',
}
function print(obj){
    return `O seu nome é ${obj.nome.toUpperCase()} ${obj.sobrenome.toUpperCase()}`
}
console.log(print(obj))
*/