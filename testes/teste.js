const lerTeclado = require("readline-sync")
console.log("LIG-4")
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
console.log("⭕🧊")
function vencedor() {
    let vitoria1 = false //⭕
    let vitoria2 = false //🧊
    for (let l = lig4.length - 1; l >= 0; l--) {
        for (let c = 0; c < lig4[0].length; c++) {
            if (lig4[l][c] != "[  ]") pA = lig4[l][c]
            if (lig4[l][c] === pA && lig4[l][c + 1] === pA && lig4[l][c + 2] === pA && lig4[l][c + 3] === pA || lig4[l][c] === pA && lig4[l + 1][c] === pA && lig4[l + 2][c] === pA && lig4[l + 3][c] === pA) pA === "🔴" ? vitoria1 = true : vitoria2 = true
            if (lig4[l][c] === pA && lig4[l + 1][c + 1] === pA && lig4[l + 2][c + 2] === pA && lig4[l + 3][c + 3] === pA || lig4[l][c] === pA && lig4[l - 1][c - 1] === pA && lig4[l - 2][c - 2] === pA && lig4[l - 3][c - 3] === pA) pA === "🔴" ? vitoria1 = true : vitoria2 = true
        }
    }
    if (jogadas === 41){}
}
