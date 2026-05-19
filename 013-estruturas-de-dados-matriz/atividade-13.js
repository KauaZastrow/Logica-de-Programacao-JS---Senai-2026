// ============================================================
//   ATIVIDADE 13 – Estruturas de Dados: Matriz
// ============================================================
let lerTeclado = require("readline-sync")
// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo uma matriz
// ------------------------------------------------------------
// a) Declare a matriz:
// const m = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90],
// ];
// b) Exiba: número de linhas e número de colunas.
// c) Exiba o elemento central (m[1][1]).
// d) Exiba o canto inferior direito (use .length).

// → Seu código aqui:
// const m = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90],
// ];
// console.log(`Linhas: ${m.length}. Coluna: ${m[0].length}`)
// console.log(m[1][1])
// console.log(m[m.length - 1][m[0].length - 1])

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Percorrendo com for aninhado
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [1, 2, 3, 4],
//      [5, 6, 7, 8],
//      [9, 10, 11, 12],
//    ];
// b) Usando dois for aninhados, exiba cada elemento no formato:
//    "m[i][j] = <valor>"
// c) Calcule e exiba a SOMA de todos os elementos da matriz.

// → Seu código aqui:
// let soma = 0
// const m = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
// ];
// for (let i = 0; i < m.length; i++){
//     for (let j = 0; j < m[i].length; j++){
//         soma += m[i][j]
//         console.log(m[i][j])
//     }
// }
// console.log(`SOMA de todos os elementos da matriz: ${soma}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor valor
// ------------------------------------------------------------
// a) Utilizando a matriz:
// const m = [
//     [12, 7, 25],
//     [3, 18, 9],
//     [31, 14, 22],
// ];
// b) Usando for aninhado, encontre o MAIOR e o MENOR valor da matriz.
// c) Exiba também a posição (linha, coluna) onde cada um está.

// → Seu código aqui:
// let linhaMe = null
// let linhaMa = null
// let colunaMe = null
// let colunaMa = null
// let menor = 100
// let maior = 0
// for (let i = 0; i < m.length; i++) {
//     for (let j = 0; j < m[i].length; j++) {
//         if (maior < m[i][j]) {
//             maior = m[i][j]
//             linhaMa = i + 1
//             colunaMa = j + 1
//         } else if (menor > m[i][j]) {
//             menor = m[i][j]
//             linhaMe = i + 1
//             colunaMe = j + 1
//         }
//     }
// }
// console.log(`Maior: ${maior}, linha ${linhaMa}, coluna ${colunaMa}. Menor: ${menor}, linha ${linhaMe}, coluna ${colunaMe}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Soma das linhas e das colunas
// ------------------------------------------------------------
// a) Use a mesma matriz do Exercício 3.
// b) Exiba a soma de cada LINHA: "Linha <i>: <soma>"
// c) Exiba a soma de cada COLUNA: "Coluna <j>: <soma>"
// d) Exiba a soma da DIAGONAL principal (m[i][i]).

// → Seu código aqui:
// let colunas = Array(m[0].length).fill(0)
// for (let i = 0; i < m.length; i++) {
//     let soma = 0
//     for (let j = 0; j < m[i].length; j++) {
//         soma += m[i][j]
//         colunas[j] += m[i][j]
//     }
//     console.log(`Linha ${i + 1}: ${soma}`)
// }
// for (let i = 0; i < m[0].length; i++) { console.log(`Coluna ${i + 1}: ${colunas[i]}`) }
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Preenchendo uma matriz dinamicamente
// ------------------------------------------------------------
// a) Pergunte ao usuário quantas linhas e quantas colunas terá a matriz.
// b) Usando dois for aninhados, peça cada valor:
//    "Digite m[<i>][<j>]: "
// c) Exiba a matriz final com console.table().

// → Seu código aqui:
// const linhas = lerTeclado.questionInt("Digite quantidade de linhas: ")
// const colunas = lerTeclado.questionInt("Digite quantidade de colunas: ")
// let m = []
// for (let i = 0; i < linhas; i++) {
//     let linha = []
//     for (let j = 0; j < colunas; j++) {
//         linha.push(lerTeclado.questionInt(`Digite oq tem no indice [${i}][${j}]: `))
//     }
//     m.push(linha)
// }
// console.table(m)
console.log("_______________________________");