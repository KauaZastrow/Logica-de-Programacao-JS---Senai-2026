// ============================================================
//   ATIVIDADE 10 – Estruturas de Controle (Repetição - While)
// ============================================================

let lerTeclado = require("readline-sync")

// ------------------------------------------------------------
// EXERCÍCIO 1 – While simples
// ------------------------------------------------------------
// a) Declare uma variável 'n' com valor 1.
// b) Usando while, exiba os números de 1 a 7 no console.
// c) Ao final, exiba: "Fim da contagem!"

// → Seu código aqui:
// let n = 1;
// while (n <= 7) {
//     console.log(n++)
// }
// console.log("Fim da contagem!")

// OU  
// let n = 1;
// while (n <= 7) {
//     if (n < 7) {
//         console.log(n++)
//     } else {
//         console.log(n++)
//         console.log("Fim da contagem!")
//     }
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Contagem regressiva
// ------------------------------------------------------------
// a) Declare uma variável 'regressiva' com valor 10.
// b) Usando while, exiba a contagem de 10 até 1.
// c) Ao final, exiba: "Lançamento ON!"

// → Seu código aqui:
// let regressiva = 10
// while (regressiva >= 1) {
//     console.log(regressiva--)
// }
// console.log("Lançamento ON!")

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Validação de entrada
// ------------------------------------------------------------
// a) Usando while, peça ao usuário um número entre 1 e 5 e repita enquanto o valor for inválido.
//    A cada entrada inválida, exiba: "Valor fora do intervalo. Tente novamente."
// b) Quando o valor for válido, exiba: "Você escolheu: <número>"

// → Seu código aqui:
// let numero = null;
// while ((numero < 1 || numero > 5) || numero === null) {
//     numero = lerTeclado.questionInt("Digite um número entre 1 e 5: ")
//     if (numero < 1 || numero > 5) {
//         console.log("Valor fora do intervalo. Tente novamente.")
//     } else {
//         console.log(`Você escolheu: ${numero}`)
//     }
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Acumulador com while
// ------------------------------------------------------------
// a) Usando while, peça ao usuário números até que ele digite 0.
// b) Acumule a soma de todos os números digitados.
// c) Conte quantos números foram digitados (exceto o 0).
// d) Ao final, exiba a soma, a quantidade de numeros digitados e quais foram os números digitados.

// → Seu código aqui:
// let numero = null;
// let somaNum = 0;
// let contador = -1;
// let array = []
// while (numero !== 0) {
//     numero = lerTeclado.questionInt("Digite um numero: ")
//     somaNum += numero
//     contador++
//     array.push(numero)
//     if (numero === 0) {
//         array.pop()
//         console.log(`Soma dos numeros digitados ${somaNum}, total de numeros digitados ${contador}. Numeros digitados: ${array}`)
//     }
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Média com while e validação
// ------------------------------------------------------------
// a) Usando while, peça ao usuário notas de 0 a 10 até que ele digite -1 para encerrar.
//    Se a nota for inválida (< 0 e diferente de -1, ou > 10), exiba: "Nota inválida." e peça novamente.
// b) Calcule e exiba a média.

// → Seu código aqui:
// let notas = null
// let somaNotas = 0
// let array = []
// while (notas !== -1) {
//     notas = lerTeclado.questionInt("Digite notas de 0 a 10 (digite -1 para encerrar): ")
//     if (notas >= 0 && notas <= 10) {
//         somaNotas += notas
//         array.push(notas)
//     } else if (notas === -1) {
//         if (array.length === 0) {
//             console.log(`media: 0`)
//         } else {
//             console.log(`media: ${somaNotas / array.length}`)
//         }
//     } else {
//         console.log("Nota inválida.")
//     }
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Do...while: menu simples
// ------------------------------------------------------------
// a) Usando do...while, exiba um menu repetitivo:
//    1 – Exibir hora atual  (use: new Date().toLocaleTimeString())
//    2 – Exibir data atual  (use: new Date().toLocaleDateString())
//    0 – Sair
// b) Processe a opção com switch/case.
// c) O menu deve repetir até o usuário escolher 0.

// → Seu código aqui:
// let escolha = null
// do {
//     console.log("\n1 – Exibir hora atual\n2 – Exibir data atual\n0 – Sair")
//     escolha = lerTeclado.questionInt("Escolha uma opção: ")
//     switch (escolha) {
//         case 1:
//             console.log(new Date().toLocaleTimeString())
//             break
//         case 2:
//             console.log(new Date().toLocaleDateString())
//             break
//         case 0:
//             break
//         default:
//             console.log("Esta opção não existe")
//     }
// } while (escolha !== 0)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Adivinhe o número (while)
// ------------------------------------------------------------
// a) Gere um número secreto aleatório de 1 a 50 (Math.random())
// b) Peça o nome do jogador.
// c) Usando while, repita até o jogador acertar:
//    - Peça um palpite.
//    - Se muito alto, exiba: "Muito alto! Tente menor."
//    - Se muito baixo, exiba: "Muito baixo! Tente maior."
//    - Se acertou, saia do while.
// d) Ao acertar, exiba:
//    "<nome> acertou após <tentativas> tentativa(s)! O número era <secreto>."

// → Seu código aqui:
let max = 50
let min = 1
let chute = null
let tentativas = 0
console.log("Jogo de adivinhacao.\nDigite um numero de 1 a 50")
let aleatorio = Math.floor(Math.random()(max - min) + min)
const nome = lerTeclado.question("Qual seu nome?\nDigite aqui => ")
while (chute !== aleatorio) {
    tentativas++
    chute = lerTeclado.questionInt("Chute um numero de 1 ate 50: ")
    if (chute === aleatorio) {
        console.log(`${nome} acertou após ${tentativas} tentativa(s)! O número era ${aleatorio}.`)
    }else if(chute > aleatorio){
        console.log("Muito alto! Tente menor.")
    } else if(chute < aleatorio){
        console.log("Muito baixo! Tente maior.")
    }
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Tabuada com while
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro.
// b) Usando while, exiba a tabuada desse número de 1 a 10:
//    Formato para exibição: "<número> x <i> = <resultado>"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Contador com condição composta
// ------------------------------------------------------------
// a) Declare 'saldo' com valor 1000 e 'rodada' com valor 0.
// b) Usando while, simule saques aleatórios enquanto o saldo for maior que 0 E a rodada for menor que 10:
//    - A cada rodada, gere um saque aleatório de 50 a 200:
//    - Se o saque for maior que o saldo, exiba: "Saldo insuficiente. Fim!" e encerre.
//    - Caso contrário, desconte do saldo e exiba:
//      "Rodada <rodada>: sacou R$ <saque> | Novo saldo: R$ <saldo>"
// c) Ao final, exiba o saldo restante e o total de rodadas.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Do...while: cadastro em loop
// ------------------------------------------------------------
// a) Crie um array vazio 'contatos'.
// b) Usando do...while, repita:
//    - Peça nome e telefone do contato.
//    - Adicione um objeto { nome, telefone } ao array.
//    - Pergunte: "Adicionar outro contato?" (keyInYN()).
//    - Repita enquanto o usuário responder que sim.
// c) Ao sair do loop, exiba todos os contatos com console.table().
// d) Exiba: "Total de contatos cadastrados: <qtd>"

// → Seu código aqui:


console.log("_______________________________");