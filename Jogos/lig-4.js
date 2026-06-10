const lerTeclado = require("readline-sync")
console.log("LIG-4")
let vitoria1 = false //⭕
let vitoria2 = false //🧊
let lig4 = [
    ["[  ]", "[  ]", "[  ]", "[  ]", "[  ]", "[  ]", "[  ]"],
    ["[  ]", "[  ]", "[  ]", "[  ]", "[  ]", "[  ]", "[  ]"],
    ["[  ]", "[  ]", "[  ]", "[  ]", "[  ]", "[  ]", "[  ]"],
    ["[  ]", "[  ]", "[  ]", "[  ]", "[  ]", "[  ]", "[  ]"],
    ["[  ]", "[  ]", "[  ]", "[  ]", "[  ]", "[  ]", "[  ]"],
    ["[  ]", "[  ]", "[  ]", "[  ]", "[  ]", "[  ]", "[  ]"]
]
// ⭕🧊
//pA = peça atual
let jogadas = 0
console.log(`⭕🧊   Jogo desenvolvido por Kauã G. Zastrow!
     ╱|、            ________
    (x  o 7         | Slice!
     |、⁻〵  ノ|    /________
     じしˍ,)|ノ
     `)
function horizontal(l, c, a) {
    if (c < 4) {
        if (lig4[l][c] === a && lig4[l][c + 1] === a && lig4[l][c + 2] === a && lig4[l][c + 3] === a) {
            return true
        }
    }
    return false
}
function vertical(l, c, a) {
    if (l > 2) {
        if (lig4[l][c] === a && lig4[l - 1][c] === a && lig4[l - 2][c] === a && lig4[l - 3][c] === a) {
            return true
        }
    }
    return false
}
function diagonalD(l, c, a) {
    if (l > 2 && c < 4) {
        if (lig4[l][c] === a && lig4[l - 1][c + 1] === a && lig4[l - 2][c + 2] === a && lig4[l - 3][c + 3] === a) {
            return true
        }
    }
    return false
}
function diagonalE(l, c, a) {
    if (l > 2 && c > 2) {
        if (lig4[l][c] === a && lig4[l - 1][c - 1] === a && lig4[l - 2][c - 2] === a && lig4[l - 3][c - 3] === a) {
            return true
        }
    }
    return false
}
function verificJog(j) {
    if (lig4[0][j] === "[  ]") {
        return true
    }
    return false
}
function jogada() {
    let jogada = null
    do {
        jogada = lerTeclado.questionInt("Digite o numero de uma coluna (1 ao 7): ") - 1
    } while (jogada < 0 || jogada > 6)
    return jogada
}
function seras(a, o) {
    if ((jogadas + 1) % 2 === 0) {
        lig4[a][o] = "[⭕]"
    } else {
        lig4[a][o] = "[🧊]"
    }
    jogadas++
    return true
}
function mensagemVitoria() {
    console.log("Parabéns", vitoria1 ? "⭕" : "🧊", "venceu!")
}
function vencedor() {
    for (let l = lig4.length - 1; l >= 0; l--) {
        let pA = null
        for (let c = 0; c < lig4[0].length; c++) {
            if (lig4[l][c] != "[  ]") pA = lig4[l][c]
            if (horizontal(l, c, pA) || vertical(l, c, pA) || diagonalD(l, c, pA) || diagonalE(l, c, pA)) pA === "[⭕]" ? vitoria1 = true : vitoria2 = true
        }
    }
    if (vitoria1 || vitoria2) {
        return true
    }
}
for (let i = 0; i < 42; i++) {
    let coluna = null
    console.table(lig4)
    console.log("Jogada: " + (jogadas + 1) + " - " + ((jogadas + 1) % 2 === 0 ? "⭕" : "🧊"))
    do {
        coluna = jogada()
        if (!verificJog(coluna)) console.log("Coluna cheia, escolha outra!")
    } while (!verificJog(coluna))
    while (!vencedor()) {
        for (let l = lig4.length - 1; l >= 0; l--) {
            if (lig4[l][coluna] === "[  ]") {
                let sera = seras(l, coluna)
                break
            }
        }
        break
    }
    if (vencedor()) {
        console.table(lig4)
        console.log("Jogo encerrado!")
        mensagemVitoria()
        console.log("Obrigado por jogar!")
        break
    }
}