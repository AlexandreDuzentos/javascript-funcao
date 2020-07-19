let array=['alexandre',17,'felicidade','maça']

function mostrar(array){
    return array
}
console.log(mostrar(array))

let operacao=[1,3,4,6]
let soma=operacao[0]+operacao[1]+operacao[2]+operacao[3]
console.log(soma)


let resultado=0
for(i=0;i<operacao.length;i++){
    resultado+=operacao[i]
}
console.log('o resultado da soma é '+resultado)