const nameAtacante = prompt("Digite o nome do Atacante:")
const poderAtaque = prompt("Informe o Poder de Ataque:")

const nameDefensor = prompt("Digite o nome do Defensor:")
let pontosDeVida = prompt("Insira qtd de pontos de vida:")
const poderDeDefesa = prompt("Insira o poder de Defesa:")
const escudo = prompt("Possui escudo? (Sim/Não)")


let danoCausado = 0

if (poderAtaque > poderDeDefesa && escudo === "Não") {
    danoCausado = poderAtaque - poderDeDefesa
} else if (poderAtaque > poderDeDefesa && escudo === "Sim") {
    danoCausado = (poderAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado
//pontosDeVida = pontosDeVida - danoCausado

alert(nameAtacante + " causou " + danoCausado + " pontos de danos em " + nameDefensor)
alert(
    nameAtacante + "\nPoder de ataque: " + poderAtaque + "\n\n" +
    nameDefensor + "\nPontos de vida: " + pontosDeVida + "\npoder de defesas: " + poderDeDefesa + "\nPossui escudo: " + escudo)