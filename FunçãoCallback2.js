const notas=[7.7,6.5,5.2,8.9,3.6,7.1,9.0,12]

//sem callback
let notasbaixas1=[]
for(i in notas){
    if(notas[i]<7){
        notasbaixas1.push(notas[i])
    }
}
console.log(notasbaixas1)

//com callback //filter():filtra os elementos de um array em cima de um determinado critério
const notasbaixas2=notas.filter(function(nota){
    return nota<7
})
console.log(notasbaixas2)

const notasbaixas3=notas.filter((nota)=>nota<7)
console.log(notasbaixas3)

console.log('-----------------------------------------------')

const notasbaixas4=notas.filter((nota)=>console.log(nota<7))

console.log('--------------------------------')
const notasbaixas5=notas.filter((nota)=>{
    return nota<7
})
console.log(notasbaixas5)

const notasmenoresque7=(nota)=>nota<7//tornar a função mais inteligente passando ela para uma váriavel para por reutilizar
const notasbaixas6=notas.filter(notasmenoresque7)
console.log(notasbaixas6)

console.log("ultima opção")
let negativas=notas.filter((nota)=>nota>7)
console.log(negativas)
