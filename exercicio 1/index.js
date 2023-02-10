const car1 = prompt("Digite o nome do primeiro carro:")
const vel1 = parseFloat(prompt("Informe a velocidade:"))
const car2 = prompt("digite o nome do segundo carro:")
const vel2 = parseFloat(prompt("Informe a velocidade:"))

console.log(car1)
console.log(vel1)
console.log(car2)
console.log(vel2)

if (vel1 > vel2) {
    alert("O carro " + car1 + " é mais rápido!")
} else if (vel1 < vel2) {
    alert("O carro " + car2 + " é mais rápido!")
} else {
    alert("A velocidade dos carros, " + car1 + " e " + car2 + " são iguais!")
}