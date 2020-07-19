//tranformar essa classe em funçã factory
console.log("-----------------------")
class pessoa{
    constructor(nome){
        this.nome=nome
    }
    falar(){
        console.log('Meu nome é '+this.nome)
    }
}
const p1=new pessoa('joão')
p1.falar()


function pessoa3(nome){
 this.nome=nome
  this.falar()=function(){
      console.log(`Meu nome é ${this.nome}`)
  }
}
const p1=new pessoa3('Almeida')
p1.falar()


//Acho que o desafio está concluído
console.log("-----------------------")
const pessoa2=(nome)=>{
    return{
        falar:()=>console.log(`O seu nome ${nome}`)
    }
}
const mostrar=pessoa2("Alexandre")
mostrar.falar()