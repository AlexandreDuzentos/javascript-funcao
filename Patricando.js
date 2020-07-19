//classe construtora
console.log("--------------------------------------")
class soma{
    constructor(a,b){
       this.a=a
       this.b=b
    }
    imprimir(){
        console.log(`A soma vale ${this.a+this.b}`)
    }
}
const p1=new soma(4,6)
p1.imprimir()
console.log(p1.a)

//função factory
console.log("--------------------------------------")
const subtração=(a1,b1)=>{
    return{
        Impimir:()=>console.log(`A subtração vale ${a1-b1}` )
    }
}
const p2=subtração(4,7)
p2.Impimir()

//função construtora
console.log("--------------------------------------")
function divisão(b1,b2){
    this.b1=b1
    this.b2=b2
    this.dividir=function(){
        console.log(`A divisão vale ${this.b1/this.b2}`)
    }
}
const p3=new divisão(25,5)
p3.dividir()
console.log(p3.b1)
console.log("--------------------------------------")

function soma1(a,b){
   this.a = a
   this.b = b
   this.operar = function(){
       return `A soma vale ${this.a+this.b}`
   }
   
}

const res=new soma1(5,5)
console.log(res.operar())

console.log("--------------------------------------")
class felicidade{
    constructor(comer,cagar){
        this.comer=comer
        this.cagar=cagar

    }
    falar(){
        return "O segredo da felidade é "+this.comer+" e "+this.cagar
    }
}
const fel=new felicidade("Arroz doce","cocó")
console.log(fel.falar())
console.log("--------------------------------------")

































