if (6 === 6) {
    console.log("Verdadeiro")
}

if (12 === 24) {
    alert("True")
} else {
    alert("False")
}

const idade = prompt("Informe a sua idade?")
if (idade >= 18) {
    console.log("Maior de Idade")
    alert("Maior de Idade")
} else if (idade <= 10) {
    alert("Você é uma crianca")
} else {
    alert("Menor de Idade")
}

// Operador Ternário
// Forma abreviada e autoavaliada do IF ELSE
// Sintaxe: const resultado = condicao ? resultado_verdadeiro : resultado_falso

const resultado = (6 === 6) ? "Verdadeiro" : "Falso"
console.log(resultado)
alert(resultado)
