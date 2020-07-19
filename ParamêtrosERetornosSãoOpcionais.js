function area(largura,altura){
     const area=largura*altura
     if(area>20){
         console.log("valor acima do permitido:"+area+"m2")
   }else{
       return area
   }
}
console.log(area(6,3))

//resolução propria
function aumentosalárial(aumento,salario){
    if(salario>5000 && salario<9000){
        return " Parabéns! o seu salario é de "+salario
    }else if(salario>0 && salario<5000){
        aumento=salario+(salario*(aumento/100))
        return "O seu novo salário é "+aumento
    }
}
console.log(aumentosalárial(80,4000))

//FORMA1
function dados(nome,idade,morada){
    nome="Alexandre"
    idade=17
    morada="futungo"
    return `O seu nome é ${nome} tens ${idade} anos e vives no ${morada} `
}
console.log(dados())

//FORMA2
function dados(nome,idade,morada){
    return `O seu nome é ${nome} tens ${idade} anos e vives no ${morada} `
}
console.log(dados("Alexandre",17,"futungo"))

//FORMA 3
function dados(nome="alexandre",idade=17,morada="futungo"){
    return `O seu nome é ${nome} tens ${idade} anos e vives no ${morada} `
}
console.log(dados())


const clientes={
    nome:"Akeny",
    idade:30,
    morada:"Hoji ya henda",
}

function mostrarerro(erro){
    throw new error('a notação ponto está incorreta')
}

//RESOLUÇÃO PRÓPRIA
function akeny(clientes){
    try{
         return `O seu nome é ${clientes.nome} tens ${clientes.idade} anos e vives no ${clientes.morada}`  
    }catch(erro){
        mostrarerro(erro)
    }finally{
        console.log("finalmente")
    }
 
}
console.log(akeny(clientes))

const soma=(a,b)=>{
    return a+b
}
console.log(soma(12,45))

const soma2=(a,b)=>a+b
console.log(soma2(10,10))



