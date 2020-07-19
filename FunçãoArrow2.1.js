//FUNÇÃO TRADICIONAL
let comparacomthis=function(param){//o this em funções tradicionais apontam para um objecto global
    console.log(this===param)
}
comparacomthis(global)

//OBJECTO
const obj={}
comparacomthis=comparacomthis.bind(obj)
comparacomthis(global)
comparacomthis(obj)

//FUNCÃO ARROW
let comparacomThisArrow=(param) => console.log(this===param)//O this em funçoes arrow não aponta para um objecto global mas sim para o module.exports
comparacomThisArrow(global)
comparacomThisArrow(this)
comparacomThisArrow(module.exports)

comparacomThisArrow=comparacomThisArrow.bind(obj)
comparacomThisArrow(obj)//o bind não consegue mudar a referencia de uma arrow function
