const DadosCliente= {
    nome:'Alexandre',
    idade:'17',
    NomeCompleto:'Alexandre Duzentos',
    email:'Aduzentos12@gmail.com',
    morada:'futungo',
    mostrar(){
        console.log(this.nome)//this serve para referenciar um atributo de um objecto
        console.log(this.idade)
        console.log(this.NomeCompleto)
        console.log(this.email)
        console.log(this.morada)
    }
}
DadosCliente.mostrar()

//ARMA
let ClientData=DadosCliente.mostrar.bind(DadosCliente)//função bind serve para amarrar um objeto a metodos e atributos do objecto
ClientData()

const dados={
    sexo:'masculino',
    comportamento:'bom',
    maior_nota:20,
    mostra(){
        console.log(this.sexo,this.comportamento,this.maior_nota)
    }
}
dados.mostra()
 let d=dados.mostra.bind(dados)
d()

const fullName={
    pnome:"ALEXANDRE",
    sNome:"BAPTISTA",
    tNome:"JÚLIO",
    uNome:"DUZENTOS",
    exibir(){
        console.log("O seu nome completo é "+this.pnome + this.sNome + this.tNome + this.uNome)
    }
}
fullName.exibir()
const fname=fullName.exibir.bind(fullName)
fname()
