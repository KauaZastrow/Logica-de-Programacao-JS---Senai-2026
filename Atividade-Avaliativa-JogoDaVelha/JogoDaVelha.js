let lerTeclado = require("readline-sync")
console.log("\nEste é um jogo da velha classico.\nPara jogar escolha qual linha desejada e qual coluna desejada.\nO primeiro jogador sera o [X] e o segundudo o [O].\n")
let sair = false
let continuarJogoPC = false
let continuarJogoAmigo = false
let vitoriasX = 0
let vitoriasO = 0
const max = 3
const min = 0
let x = false
let o = false
while (true) {
    let jogo = lerTeclado.keyInYN("Deseja jogar com amigo ou com computador? (Y = amigo/ N = PC)")
    jogo === true ? continuarJogoAmigo = true : continuarJogoPC = true
    let i = 0
    let vitoria = false
    ////////// Amigo
    while (continuarJogoAmigo) {
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
                continue
            } else if (jogoVelha[linha][coluna] == "X" || jogoVelha[linha][coluna] == "O") {
                continue
            }
            jogoVelha[linha][coluna] = a
            i++
            console.table(jogoVelha)
            if ((jogoVelha[0][0] == "X" && jogoVelha[0][1] == "X" && jogoVelha[0][2] == "X") || (jogoVelha[0][0] == "O" && jogoVelha[0][1] == "O" && jogoVelha[0][2] == "O")) { vitoria = true }
            if ((jogoVelha[1][0] == "X" && jogoVelha[1][1] == "X" && jogoVelha[1][2] == "X") || (jogoVelha[1][0] == "O" && jogoVelha[1][1] == "O" && jogoVelha[1][2] == "O")) { vitoria = true }
            if ((jogoVelha[2][0] == "X" && jogoVelha[2][1] == "X" && jogoVelha[2][2] == "X") || (jogoVelha[2][0] == "O" && jogoVelha[2][1] == "O" && jogoVelha[2][2] == "O")) { vitoria = true }
            //////////
            if ((jogoVelha[0][0] == "X" && jogoVelha[1][0] == "X" && jogoVelha[2][0] == "X") || (jogoVelha[0][0] == "O" && jogoVelha[1][0] == "O" && jogoVelha[2][0] == "O")) { vitoria = true }
            if ((jogoVelha[0][1] == "X" && jogoVelha[1][1] == "X" && jogoVelha[2][2] == "X") || (jogoVelha[0][1] == "O" && jogoVelha[1][1] == "O" && jogoVelha[2][2] == "O")) { vitoria = true }
            if ((jogoVelha[0][2] == "X" && jogoVelha[1][2] == "X" && jogoVelha[2][2] == "X") || (jogoVelha[0][2] == "O" && jogoVelha[1][2] == "O" && jogoVelha[2][2] == "O")) { vitoria = true }
            //////////
            if ((jogoVelha[0][0] == "X" && jogoVelha[1][1] == "X" && jogoVelha[2][2] == "X") || (jogoVelha[0][0] == "O" && jogoVelha[1][1] == "O" && jogoVelha[2][2] == "O")) { vitoria = true }
            if ((jogoVelha[2][2] == "X" && jogoVelha[1][1] == "X" && jogoVelha[0][0] == "X") || (jogoVelha[2][2] == "O" && jogoVelha[1][1] == "O" && jogoVelha[0][0] == "O")) { vitoria = true }
            if (vitoria === true) {
                if (jogoVelha[linha][coluna] === "X") { vitoriasX++ } else { vitoriasO++ }
                console.log(`${jogoVelha[linha][coluna]} Venceu! Com ${jogoVelha[linha][coluna] === "X" ? vitoriasX : vitoriasO} vitorias!`)
                break;
            } else if (i === 9) {
                console.log(`Velha!\nTotal de pontos:\nX = ${vitoriasX}.\nO = ${vitoriasO}.`)
                break;
            }
        }
        continuarJogoAmigo = lerTeclado.keyInYN("Deseja continuar jogando?")
        if (continuarJogoAmigo) { continue }
    }
    ////////// Inimigo MORTAL! (PC)
    while (continuarJogoPC) {
        let jogoVelha = [
            ["-", "-", "-"],
            ["-", "-", "-"],
            ["-", "-", "-"]
        ]
        while (true) {
            x = false
            o = false
            vitoria = false
            let linhaPC = Math.floor(Math.random() * (max) + min)
            let colunaPC = Math.floor(Math.random() * (max) + min)
            let linha = 0
            let coluna = 0
            console.table(jogoVelha)
            console.log(i)
            console.log(`Jogador X ${linhaPC} ${colunaPC}`)
            if (jogoVelha[linhaPC][colunaPC] == "X" || jogoVelha[linhaPC][colunaPC] == "O") {
                continue
            }
            jogoVelha[linhaPC][colunaPC] = "X"
            console.table(jogoVelha)
            while (true) {
                linha = lerTeclado.questionInt("linha: ") - 1
                coluna = lerTeclado.questionInt("coluna: ") - 1
                if (linha < 0 || linha > 2 || coluna < 0 || coluna > 2) {
                    continue
                } else if (jogoVelha[linha][coluna] == "X" || jogoVelha[linha][coluna] == "O") {
                    continue
                } else {
                    jogoVelha[linha][coluna] = "O"
                    i++
                    break
                }
            }
            console.table(jogoVelha)
            if (jogoVelha[0][0] == "X" && jogoVelha[0][1] == "X" && jogoVelha[0][2] == "X") { x = true; vitoria = true } else if (jogoVelha[0][0] == "O" && jogoVelha[0][1] == "O" && jogoVelha[0][2] == "O") { o = true; vitoria = true }
            if (jogoVelha[1][0] == "X" && jogoVelha[1][1] == "X" && jogoVelha[1][2] == "X") { x = true; vitoria = true } else if (jogoVelha[1][0] == "O" && jogoVelha[1][1] == "O" && jogoVelha[1][2] == "O") { o = true; vitoria = true }
            if (jogoVelha[2][0] == "X" && jogoVelha[2][1] == "X" && jogoVelha[2][2] == "X") { x = true; vitoria = true } else if (jogoVelha[2][0] == "O" && jogoVelha[2][1] == "O" && jogoVelha[2][2] == "O") { o = true; vitoria = true }
            //////////
            if (jogoVelha[0][0] == "X" && jogoVelha[1][0] == "X" && jogoVelha[2][0] == "X") { x = true; vitoria = true } else if (jogoVelha[0][0] == "O" && jogoVelha[1][0] == "O" && jogoVelha[2][0] == "O") { o = true; vitoria = true }
            if (jogoVelha[0][1] == "X" && jogoVelha[1][1] == "X" && jogoVelha[2][2] == "X") { x = true; vitoria = true } else if (jogoVelha[0][1] == "O" && jogoVelha[1][1] == "O" && jogoVelha[2][2] == "O") { o = true; vitoria = true }
            if (jogoVelha[0][2] == "X" && jogoVelha[1][2] == "X" && jogoVelha[2][2] == "X") { x = true; vitoria = true } else if (jogoVelha[0][2] == "O" && jogoVelha[1][2] == "O" && jogoVelha[2][2] == "O") { o = true; vitoria = true }
            //////////
            if (jogoVelha[0][0] == "X" && jogoVelha[1][1] == "X" && jogoVelha[2][2] == "X") { x = true; vitoria = true } else if (jogoVelha[0][0] == "O" && jogoVelha[1][1] == "O" && jogoVelha[2][2] == "O") { o = true; vitoria = true }
            if (jogoVelha[2][2] == "X" && jogoVelha[1][1] == "X" && jogoVelha[0][0] == "X") { x = true; vitoria = true } else if (jogoVelha[2][2] == "O" && jogoVelha[1][1] == "O" && jogoVelha[0][0] == "O") { o = true; vitoria = true }
            if (vitoria === true) {
                if (x) { x++ } else if (o) { o++ }
                if (jogoVelha[linha][coluna] === "X") { vitoriasX++ } else { vitoriasO++ }
                console.log(`${x ? "X" : "O"} Venceu! Com ${x ? vitoriasX : vitoriasO} vitorias!`)
                i = 0
                break;
            } else if (i === 5) {
                console.log(`Velha!\nTotal de pontos:\nX = ${vitoriasX}.\nO = ${vitoriasO}.`)
                break;
            }
        }
        continuarJogoPC = lerTeclado.keyInYN("Deseja continuar jogando?")
        if (continuarJogoPC) { continue }
    }
    sair = lerTeclado.keyInYN("quer parar de jogar?")
    if (sair) { break }
}