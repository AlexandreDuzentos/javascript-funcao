//Admito que peguei a resoluçao,não estava a perceber o exercício
function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }

        valorNota = calcularValorNota(valorSaque)

    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(sacarDinheiro(153));


function planoDeSaúde(idade){
    let pagamento=100
   if(idade>0 && idade<=10){
       return pagamento+80
   }else if(idade>=10 && idade<=30){
       return pagamento+50
   }else if(idade>30 && idade<=60){
       return pagamento+95
   }else if(idade>60){
       return pagamento+130
   }

}
console.log(planoDeSaúde(9))

//copiei a solução
function calcularvalor(mes,valor){
    if(mes>0 && mes<13){
        atraso=mes-1
        return valor*(1+(5/100))**atraso
    }
}
console.log(calcularvalor(12,100))

//Minha resulução
function anuidade(mes2,valor2,taxa){
    if(mes2>0 && mes2<13){
        atraso2=mes2-1
        return valor2*(1+taxa)**atraso2
    }
}
console.log(anuidade(5,1000,5/100))


//resulução do Leitão
function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)

//minha resuluçao
function ponderada(studentcode,note1,note2,note3){
    let notes=[10,10,15]
    for(let c=0;c<notes.length;c++){
       ponderar=(notes[0]*3)+(notes[1]*3)+(notes[2*4])/3+3+4
       console.log(`Código do aluno: ${studentcode}. Notas: ${note1}, ${note2}, ${note3}.${ponderar <5 ? 'Reprovado':'Aprovado'}`)
    }
}
ponderada(210,20,12,9)
console.log("-------------------")
for(let c=0;c<=11;c++){
    console.log("Hello world")
}
for(let c=0;c<=50;c++){
    console.log
}
console.log("-------------------")

for(let c=0;c<100;c++){
    if(c%2==0){
        console.log("Numeros pares "+c)

    }
}

let num=[10,20,30,23,12,23,2,8,5,9]
let pares=0, totalPares=0;impares=0,totaImpares=0
console.log("------------------")
for(let c=0;c<num.length;c++){
    if(num[c]%2==0){
         pares=num[c]
         console.log("Pares: "+pares)
        totalPares=num[c]+1
    }
   if(num[c]%2!=0){
        impares=num[c]
        console.log("Impares: "+impares)
       totalImpares=num[c]+1

    }
}

console.log("TotalPares: "+totalPares)

console.log("TotalImpares "+totalImpares)

let vetor=[10,23,45,2,6,8,6,3,220,20,45,5,9,8,11,12,13,19]
function pegarintervalo(vetor){
   let de10atevinte=vetor.filter((a)=>a>=10 && a<=20)
   console.log(de10atevinte)
}
pegarintervalo(vetor)

let array2=[10,3,4,6,8,9,20,21]
let maior=Math.max.apply(null,array2)
console.log(maior)
let menor=Math.min.apply(null,array2)
console.log(menor)
  
let inteiros=[1,3,4,5,8,9,-3,-2,-9,-15,-80]
let negativos=inteiros.filter((a)=>a<0)
console.log(negativos)


let not=[10,30,45,7,4,3,2]
let soma=0
let result=0
for(let c=0;c<not.length;c++){
  soma+=not[c]
}
let media=soma/not.length
console.log(media)


let array5=[10,4,7,23,5,7,5,3,]
let media2=array5.map((a)=>a).reduce((acumulador,atual)=>{
    return acumulador+atual/array5.length
})
console.log(media2)

let vetorInteiro=[1,2,3]
let vetorString=["Alexandre","Akeny","Banguito"]
let vetorDouble=[1.2,1,4,5,6]
let full=vetorInteiro.concat(vetorString).concat(vetorDouble)
console.log(full)

function choose(String1,String2){
    if(String1.localeCompare(String2)){
        return true
    }else{
        return false
    }
}
console.log(choose("Alexandre","alexandre"))

let vetorPilha=[1,3,2,4,6]
let vetorAdiciona=[8,9,90,23,457,6,4]
vetorPilha.push(vetorAdiciona)
console.log(vetorPilha)

let vet=[1,3,5,5.5,3,2,3]
let vet2=[1,2,3,4,5,6,8]
function troca(vet,vet2){
    vet=vet2 
    return vet 
}
console.log(troca(vet,vet2))

function error(){
    throw new error("Tente novamente")
}
let not30=[10,8,3,5,13,18,2,4]
function classificacao(not30){
    for(let c=0;c<not30.length;c++){
       if(not30[c]>=0.0 && not30[c]<=4.9){
       console.log("D") 
    }
    if(not30[c]>=5.0 && not30[c]<=6.9){
        console.log("C") 
    }
    if(not30[c]<=7.0 && not30[c]>=8.9){
        console.log("B") 
    }
    if(not30[c]>=9.0 && not30[c]<=10.0){
         console.log("A")
    }
}
}

classificacao(not30)










  




