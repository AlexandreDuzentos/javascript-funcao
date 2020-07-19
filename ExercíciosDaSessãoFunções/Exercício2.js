function classificaAluno(nota){
    if(nota>=40){
        return "Aluno aprovado"
    }else if(nota<40){
        return "Aluno reprovado"
    }
}

 function arredondar(nota){
     if(nota%5>2){
         return nota+(5-(nota%5))
     }else{
         return nota
     }
 } 
 
 console.log(classificaAluno(101))
 console.log(arredondar(45))

 let fruta='banana'
 switch(fruta){
     case "maca":
     console.log("não vendemos essa fruta aqui")
     break; 
     case "kiwi":
      console.log("estamos em escasses de kiwis")
    break
    case "melancia":
       console.log("aqui está, são 3 reais ao kilo")
       break
       default:
           console.log("Não consta na lista")
 }

 function divisivél(num){
   if(num%3==0){
       return true
   }else{
       return false
   }
 }
 console.log(divisivél(4))

 function anobissexto(ano){
     if(ano%4==0){
         console.log("O ano é bissexto")
         return true
     }else{
         console.log("O ano é comum")
         return false
     }
 }
 console.log(anobissexto(2020))

//fatorial
function fatorial(i,n1=1){
    for(i=7;i>=1;i--){
         n1=n1*i
         console.log(n1)
    }
}
fatorial()

//multiplicação
let result
function multiplicacao(c,n2=12){
 for(c=1;c<=12;c++){
      result=n2*c
     console.log(result)
 }
}
multiplicacao()

let dia=new Date()
let diaSem=dia.getDay()
switch(diaSem){
    case 1:
        console.log("Domingo")
        console.log("Final de semana")
        break
    case 2:
        console.log("segunda-feira")
        console.log("Dia útil")
        break
    case 3:
        console.log("terça-feira")
        console.log("Dia útil")
        break
    case 4:
        console.log("quarta-feira")
        console.log("Dia útil")
        break
    case 5:
        console.log("quinta-feira")
        console.log("Dia útil")
        break
    case 6:
        console.log("sexta-feira")
        console.log("Dia útil")
        break
    case 7:
         console.log("sabado")
         console.log("Final de semana")
        break
        default:
            console.log("não consta na lista")
}
let MarcaCarro="toyota"

switch(MarcaCarro){
    case "hatch":
        console.log("compra efetuada com sucesso")
        break
    case "sedans":
        console.log("tem a certeza que não preferes modelo?")
        break
    case "mototcicletas":
        console.log("tem a certeza que não preferes este modelo?")
        break
    case "camionetes":
        console.log("tem a certeza que não preferes este modelo?")
        break
    default:
        console.log("não trabalhamos com este tipo de automoveis aqui")
}
let res
let n1=10,n2=5
let operação="Divisão"
switch(operação){
    case "soma":
        res=n1+n2
        console.log("A soma vale "+res)
        break
    case "subtração":
        res=n1-n2
        console.log("A subtração vale "+res)
        break
    case "multiplicação":
        res=n1*n2
        console.log("A multiplicação vale "+res)
        break
    case "Divisão":
        res=n1/n2
        console.log("A divisão vale "+res)
        break
    default:
        console.log("Operação "+operação+" não consta na lista")

}

function salarioNovo(salario,salarioAtual,aumento){
    switch(salario){
        case 1:
            salarioAtual=salarioAtual+(salarioAtual*aumento/100)
            console.log(salarioAtual)
            break
        case 2:
            salarioAtual=salarioAtual+(salarioAtual*aumento/100)
            console.log(salarioAtual)
            break
        case 3:
            salarioAtual=salarioAtual+(salarioAtual*aumento/100)
            console.log(salarioAtual)
            break
        default:
            console.log("plano inválido")
    }
}
salarioNovo(1,1000,10)
salarioNovo(1,1000,15)
salarioNovo(1,1000,20)

function numeroporExtenso(numero){
    switch(numero){
        case 0:
            console.log("zero")
            break
        case 2:
            console.log("um")
            break
        case 2:
            console.log("dois")
            break
        case 3:
            console.log("três")
            break
        case 4:
            console.log("quatro")
            break
        case 5:
            console.log("cinco")
            break
        case 6:
            console.log("seis")
            break
        case 7:
            console.log("sete")
            break
        case 8:
            console.log("oito")
            break
        case 9:
            console.log("nove")
            break
         case 10:
            console.log("dez")
            break


    }
}
numeroporExtenso(0)
numeroporExtenso(1)
numeroporExtenso(2)
numeroporExtenso(3)
numeroporExtenso(4)
numeroporExtenso(5)
numeroporExtenso(6)
numeroporExtenso(7)
numeroporExtenso(8)
numeroporExtenso(9)
numeroporExtenso(10)


function calcularVenda(codigoProduto, qtd) {
    switch (codigoProduto) {
        case 100:
            console.log("cachorro quente")
            return qtd * 3
        case 200:
            console.log("hanburguer simples")
            return qtd * 4
        case 300:
            console.log("cheeseburger")
            return qtd * 5.5
        case 400:
            console.log("Baúru")
            return qtd * 7.5
        case 500:
            console.log("suco")
            return qtd * 3.5
        case 600:
            console.log("refrigerante")
            return qtd * 2.8
        default:
            return 'Produto não existente.'
    }
}

console.log(calcularVenda(100, 2))
