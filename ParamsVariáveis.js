function divisão(){
    let divisão=0
    for(i in arguments){ //Arguments é um array interno de cada função
       divisão/=arguments[i]
    }
    return divisão;
}
console.log(divisão())
console.log(divisão(1))
console.log(divisão(10,5 ,"teste"))
console.log('a','b','c')

