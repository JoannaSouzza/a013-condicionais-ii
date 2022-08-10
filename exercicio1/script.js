//Exercício 1

const num = Number(prompt("Por favor, digite um número."))

if(num %2 ===0){
    console.log("Esse número é divisível por 2")}
    if(num %3 ===0){console.log("Esse número é divisível por 3.")}


//Exercício 2

const num1 = Number(prompt("Por favor, digite um numeral."))

if(num1 %2 ===0 && num1 %3 ===0){
    console.log(num1, "é divisível por 2 e 3.")
} else{
    console.log("O número", num1, "não é divisivel por 2 e 3.")
}

