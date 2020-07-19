//no conceito de função tradicional p this não aponta para o module.exports
const comparacomthis=function(param){
    console.log(this===param)
}
comparacomthis(module.exports)
comparacomthis(global)
comparacomthis(this)

let obj2={}
result=comparacomthis.bind(obj2)
result(this)
result(global)
result(module.exports)

let comparacomarrowfunction=(param)=>console.log(this===param)
 comparacomarrowfunction(this)
 comparacomarrowfunction(global)
 comparacomarrowfunction(module.exports)

