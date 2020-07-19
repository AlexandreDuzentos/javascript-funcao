//primeiro exércicio
function operação(a,b){
   console.log(a+b)
   console.log(a-b)
   console.log(a*b)
   console.log(a/b)
}
operação(4,5)

//Segundo exercício
function classificação(lado1,lado2,lado3){
    if(lado1==lado2 && lado1==lado3 && lado3==lado2 ){
        return "O triângulo é Equilátero"
    }else if(lado1=lado2 && lado1==lado3 && lado2!=lado3){
        return "O triângulo é isósceles"
    }else if(lado1!=lado2 && lado1!=lado3 && lado2!=lado3){
        return "O triangulo é escaleno"
    }
}
console.log(classificação(7,9,8))

//terceiro exercício
function exponenciação(base,expoente){
    return Math.pow(base,expoente)
}
console.log("O resultado da exponeciação foi "+exponenciação(5,2))


//quarto exercício
function restodadivisão(dividendo,divisor){
   return dividendo%divisor
}
console.log("O resto da divisão foi "+restodadivisão(9,6))

//quinto exercício
function soma(n1,n2){
    const result= n1+n2
    return result.toFixed(2).toString().replace(".",",")
}
console.log(soma(0.1,0.2))


/*
JUROS SIMPLES
j=c*i*t

J: juros
C: valor inicial da transação, chamado em matemática financeira de capital
i: taxa de juros (valor normalmente expresso em porcentagem)
t: período da transação

Esse valor, chamado de montante, é igual a soma do capital com os juros, ou seja:
M=C+J
*/

/*
M=c(1+i)^t

M: montante
C: capital
i: taxa de juros
t: período de tempo

Diferente dos juros simples, neste tipo de capitalização, a fórmula para o cálculo do montante envolve uma variação exponencial. Daí se explica que o valor final aumente consideravelmente para períodos maiores.
*/

//sexto exercício
function jurosSimples(capitalInicial,taxa,tempo){
    return capitalInicial+(capitalInicial*taxa*tempo)
}
console.log(jurosSimples(2000,20/100,3))

function jurosCompostos(capitalInicial,taxa,tempo){
    return capitalInicial * (1+taxa) ** tempo
}
console.log(jurosCompostos(2000,20/100,3))

//setimo exercício
console.log("Resolva a seguinte equação:3x^2-5x+12 ")
function EquaçãoSegundoGrau(a,b,c){
    const delta=Math.pow(b,2)-4*a*c
    if(delta<0){
      console.log("O delta é negativo")
      console.log("O valor de x1 foi: ",-b+Math.sqrt(delta)/2*a) 
      console.log("O valor de x2 foi: ",-b-Math.sqrt(delta)/2*a) 
    }else if(delta>0){
          console.log("O valor de x1 foi: ",-b+Math.sqrt(delta)/2*a) 
          console.log("O valor de x2 foi: ",-b-Math.sqrt(delta)/2*a) 
    }
      
}
EquaçãoSegundoGrau(1,-10,24)






let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 
function avaliaPontuações(stringPontuacoes){
  let pontuação=stringPontuacoes.split(",")
  let piorJogo=1
  let melhorjogo
  let maiorPonto=pontuação[0]
  let menorPonto=pontuação[0]
  for(let c=0;c<stringPontuacoes.length;c++){
      if(stringPontuacoes[c]>maiorPonto){
                  maiorPonto=stringPontuacoes[c]
                  melhorjogo++
      }else if(stringPontuacoes[c]<menorPonto){
          menorPonto=stringPontuacoes[c]
          piorJogo=c+1

      }
  }
  return[piorJogo,melhorjogo]
}
console.log(avaliaPontuações(stringPontuacoes))





    





