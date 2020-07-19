
const fabricantes=['mercedes','audi','Bmw']

console.log("usando função tradicional")
function Imprimir(nome,índice){
    console.log(`${índice + 1}.${nome}`)
}
fabricantes.forEach(Imprimir)
fabricantes.forEach((a)=>console.log(a))//função callback chama de volta,nesse caso o vetor

const marcaCelular=["Iphone","Android","Xiomi","Bq"]

console.log("usando arrow function")
const funçãoarrow=(i,n)=>console.log(`${n+1}.${i}`)
marcaCelular.forEach(funçãoarrow)

console.log("usando função anónima")
const funçãoÁnonima=function(name,index){
    console.log(`${index+1}.${name}`)
}
marcaCelular.forEach(funçãoÁnonima)
marcaCelular.forEach((name2)=>console.log(name2))
 

    
