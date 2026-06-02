// const num1 = 121
// const num2 = 123
// const num3 = 11211
// let num = []
// num.push(num1, num2, num3)
// for (let i = 0; i < num.length; i++) {
//     if ((num[i].toString().split("").reverse().join()) === (num[i].toString().split("").join())) { console.log("true", num[i]) } else { console.log("false", num[i]) }
// }





let lerTeclado = require("readline-sync")
console.log("Este é um jogo da velha classico.\nPara jogar escolha qual linha desejada e qual coluna desejada.\nO primeiro jogador sera o [X] e o segundudo o [O].")
let vitoriasX = 0
let vitoriasO = 0
while (true) {
    let i = 0
    let vitoria = false
    let jogoVelha = [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]
    ]
    while (true) {
        console.table(jogoVelha)
        console.log(i)
        let a = i % 2 === 0 ? "X" : "O"
        console.log(`Jogador ${a}`)
        let linha = lerTeclado.questionInt("linha: ") - 1
        let coluna = lerTeclado.questionInt("coluna: ") - 1
        if (linha < 0 || linha > 2 || coluna < 0 || coluna > 2) {
            console.log("Linha ou coluna não encontrados. Tente novamente.")
            continue
        } else if (jogoVelha[linha][coluna] == "X" || jogoVelha[linha][coluna] == "O") {
            console.log("Ja esta em uso. Tente novamente.")
            continue
        }
        jogoVelha[linha][coluna] = a
        i++
        console.table(jogoVelha)
        for (let k = 0; k < jogoVelha[0]; k++) {
            if ((jogoVelha[k][0] == a && jogoVelha[k][1] == a && jogoVelha[k][2] == a) || (jogoVelha[0][k] == a && jogoVelha[1][k] == a && jogoVelha[2][k] == a)) {
                vitoria = true
            }
        }
        if (jogoVelha[0][0] == a && jogoVelha[1][1] == a && jogoVelha[2][2] == a) { vitoria = true }
        if (jogoVelha[2][2] == a && jogoVelha[1][1] == a && jogoVelha[0][0] == a) { vitoria = true }
        // if (jogoVelha[0][0] === a && jogoVelha[0][1] == a && jogoVelha[0][2] == a) { vitoria = true }
        // if (jogoVelha[1][0] === a && jogoVelha[1][1] == a && jogoVelha[1][2] == a) { vitoria = true }
        // if (jogoVelha[2][0] === a && jogoVelha[2][1] == a && jogoVelha[2][2] == a) { vitoria = true }
        // //////////
        // if (jogoVelha[0][0] == a && jogoVelha[1][0] == a && jogoVelha[2][0] == a) { vitoria = true }
        // if (jogoVelha[0][1] == a && jogoVelha[1][1] == a && jogoVelha[2][2] == a) { vitoria = true }
        // if (jogoVelha[0][2] == a && jogoVelha[1][2] == a && jogoVelha[2][2] == a) { vitoria = true }
        //////////
        // if (jogoVelha[0][0] == a && jogoVelha[1][1] == a && jogoVelha[2][2] == a) { vitoria = true }
        // if (jogoVelha[2][2] == a && jogoVelha[1][1] == a && jogoVelha[0][0] == a) { vitoria = true }
        if (vitoria === true) {
            if (jogoVelha[linha][coluna] === "X") { vitoriasX++ } else { vitoriasO++ }
            console.log(`${jogoVelha[linha][coluna]} Venceu! Com ${jogoVelha[linha][coluna] === "X" ? vitoriasX : vitoriasO} vitorias!`)
            break;
        } else if (i === 9) {
            console.log(`Velha!\nTotal de pontos:\nX = ${vitoriasX}.\nO = ${vitoriasO}.`)
            break;
        }
    }
    continuarJogoAmigo = !lerTeclado.keyInYN("Deseja continuar jogando?")
    if (continuarJogoAmigo) { continue }
}