//Função em JS é First class object
//Higher_order function

//criar de forma literal
function fun1(){}

//criar funçcão anónima
 const fun2=function(){ }

 //criar função arrow
 const fun3=()=>{}
 
 function ImprimirErro(erro){
     throw new error("Mostrou os dados de forma incorreta")
 }

 //armazenar funções em vetores
const array=[function(a,b){return a+b},fun1,fun2]
try{
    console.log(array[0](150,54))
}catch(erro){
    ImprimirErro(erro)
}finally{
    console.log("finalmente")
}
//RESOLUÇÃO PESSOAL(MOSTRAR FUNÇÃO DENTRO DE OBJECTO)
const operacões={}
 operacões.soma=function(a,b){return a+b}
 operacões.subtração=function(a,b){return a-b}
 operacões.divisão=function(a,b){return a/b}
 operacões.multiplicação=function(a,b){return a*b}
 operacões.restodadivisão=function(a,b){return a%b}

 console.log(operacões.soma(12,10))
 console.log(operacões.subtração(12,10))
 console.log(operacões.divisão(12,10))
 console.log(operacões.multiplicação(12,10))
 console.log(operacões.restodadivisão(12,10))
 
 //criando função dentro de função
function multiplicação(k,l){
        return function(c,d){
            console.log(k*l+c+d)
        }
}
multiplicação(20,30)(2,8)


