const array=[1,4,5,7,8,9]
function mostrar(array){
    let soma=0
  for(let i=0;i<array.length;i++){
    soma+=array[i];
  }
   return soma;
}
console.log(mostrar(array))

const soma=function(x,y){
    return x+y
}
const imprimirResultado=function(a,b,operacao=soma){
    console.log(operacao(a,b))
}
imprimirResultado(3,4)
imprimirResultado(3,4,function(x,y){
    return x-y
})
imprimirResultado(3,4,(x,y)=>x*y)

const obj1={
    falar:function(){
        console.log('falar')
    }
}
obj1.falar()
