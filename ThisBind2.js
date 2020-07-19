//EXEMPLO PESSOAL
function person(){
    this.dia=0

    setTimeout(function(){
        this.dia++
        console.log(this.dia)
    }.bind(this),10000);
}
new person


//EXEMPLO DO PROFESSOR
function pessoa(){
    this.idade=0

     const self=this
    setInterval(function(){//nesse caso o this não aponta para o objecto pessoa,porque quen está disparando a função não é o objecto pessoa,mas sim p temporizador setInterval
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000) //função bind serve para  amarrar a referência do objecto a atributos do objecto
    
}
new pessoa
//this serve para referenciar um atributo de um objecto
//ctrl-alt-m(para parar a execução)






