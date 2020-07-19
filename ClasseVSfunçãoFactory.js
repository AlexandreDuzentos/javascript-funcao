//Usando classe
console.log("-----------------------")
console.log('Usando classe')
class dados{
    constructor(nome,idade,morada){
        this.nome=nome
        this.morada=morada
        this.idade=idade
    }
    falar(){
        console.log(`O seu nome é ${this.nome.toUpperCase()} moras no ${this.morada.toUpperCase()} e tens ${this.idade} anos`)
    }
}
const data=new dados('alexandre',17,'futungo')
data.falar()

//Usando função factory
console.log("-----------------------")
console.log("Usando função factory")
const dados2=(nome,morada,idade)=>{
    return{
        falar:()=>console.log(`o seu nome é ${nome} moras no ${morada} e tens ${idade} anos`)
    }
}
const data2=dados2('alexandre','futungo',17)
data2.falar()