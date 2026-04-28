// ============================================================
//   ATIVIDADE 09 – Estruturas de Controle (Repetição - For)
// ============================================================

let lerTeclado = require("readline-sync")

// ------------------------------------------------------------
// EXERCÍCIO 1 – Contagem simples
// ------------------------------------------------------------
// a) Usando um for, exiba no console os números de 5 a 12, um por linha.
//    O número exibido deve ser o mesmo utilizado para o contador do 'for' ( i )
// b) Ao final, exiba: "Contagem concluída!"

// → Seu código aqui:
// for (let i = 5; i <= 12; i++) {
//     console.log(i)
// }
// console.log("Contagem concluída!");

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Contagem decrescente
// ------------------------------------------------------------
// a) Usando um for, exiba os números de 10 até 3 em ordem decrescente.
//    O número exibido deve ser o mesmo utilizado para o contador do 'for' ( i )
// b) Ao final, exiba: "Lançamento! 🚀"

// → Seu código aqui:
// for (let i = 10; i >= 3; i--) {
//     console.log(i)
// }
// console.log("Lançamento! 🚀");

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Números pares
// ------------------------------------------------------------
// a) Usando um for com passo 2, exiba todos os números pares de 0 a 30.
// b) Ao final, exiba quantos números pares foram exibidos.

// → Seu código aqui:
// let contador = 0
// for (let i = 0; i <= 30; i += 2) {
//     if (i % 2 === 0) {
//         contador++;
//         console.log(i)
//     }
// }
// console.log(`Total de numeros pares: ${contador}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Tabuada
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro (questionInt()).
// b) Exiba a tabuada desse número de 1 a 10 no formato:
//    "<número> x <i> = <resultado>"

// → Seu código aqui:
// let num1 = lerTeclado.questionInt("Digite um numero de 1 a 10: ")
// for (let i = 1; i <= 10; i++) {
//     console.log(`${num1} x ${i} = ${num1 * i}`)
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Soma acumulada
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro positivo N (questionInt()).
// b) Usando um for, calcule a soma de todos os inteiros de 1 até N.
// c) Exiba: "A soma de 1 até <N> é <soma>"

// → Seu código aqui:
// let soma = 0;
// let N = lerTeclado.questionInt("Digite um numero inteiro positivo: ");
// if (N <= 0) {
//     console.log("Positivo, e sem ser 0")
//     process.exit()
// }
// for (let i = 1; i <= N; i++) {
//     soma += i
// }
// console.log(`A soma de 1 até ${N} é ${soma}`)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Fatorial
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro de 1 a 10 (questionInt()).
// b) Calcule o fatorial desse número usando um for.
//    Fatorial de N (N!) = 1 × 2 × 3 × ... × N
//    Exemplo: 5! = 1 × 2 × 3 × 4 × 5 = 120
// c) Exiba: "<N>! = <resultado>"

// → Seu código aqui:
// let N = lerTeclado.questionInt("Digite um numero inteiro de 1 a 10: ");
// let resultado = 1;
// for (let i = 1; i <= N; i++) {
// resultado *= i
// }
// console.log(resultado)
// console.log(`${N}! = ${resultado}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Percorrendo um array
// ------------------------------------------------------------
// a) Utilizando o array:
const cidades = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Fortaleza"];
// b) Utilizando de um for, exiba cada cidade com seu índice no formato:
//    "[<indice>] - <Cidade>"
// c) Ao final, exiba: "Total de cidades: <quantidade>"

// → Seu código aqui:
// for (let i = 0; i < cidades.length; i++){
//     console.log(`[${i}] - ${cidades[i]}`)
// }
// console.log(`Total de cidades: ${cidades.length}`)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Maior e menor valor
// ------------------------------------------------------------
// a) Declare o array:
//  const temperaturas = [28, 15, 32, 9, 21, 37, 14, 25];
// b) Usando um for, encontre o maior e o menor valor do array.
// c) Exiba:
//    "Maior temperatura: <maior>°C"
//    "Menor temperatura: <menor>°C"

// → Seu código aqui:
// const temperaturas = [28, 15, 32, 9, 21, 37, 14, 25];
// let maior = 0;
// let menor = 100;
// for (let i = 0; i < temperaturas.length; i++){
//     if (maior < temperaturas[i]){
//         maior = temperaturas[i]
//     }
//     if (menor > temperaturas[i]){
//         menor = temperaturas[i]
//     }
// }
// console.log(`
// Maior temperatura: ${maior}°C
// Menor temperatura: ${menor}°C
// `)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Contando com condição
// ------------------------------------------------------------
// a) Utilizando do array:
const idades = [12, 25, 17, 34, 15, 42, 16, 29, 8, 19];
// b) Usando um for, conte:
//    - Quantas pessoas são menores de idade (< 18)
//    - Quantas são maiores de idade (>= 18)
// c) Exiba os dois totais.

// → Seu código aqui:
// let maiorIdade = 0;
// let menorIdade = 0;
// for (let i = 0; i < idades.length; i++){
//     if (idades[i] > 18){
//         menorIdade ++
//     }
//     if (idades[i] < 18){
//         maiorIdade ++
//     }
// }
// console.log(`
// ${menorIdade} são menores de idade.
// ${maiorIdade} são maiores de idade.
// `)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Média com array
// ------------------------------------------------------------
// a) Utilizando do array:
const salarios = [1800, 3200, 950, 4500, 2100, 1500, 7800, 2900];
// b) Usando um for, calcule a média salarial.
// c) Exiba a média no formato: "Média salarial: R$ <media>"
// d) Usando outro for, exiba cada salário e se está acima ou abaixo da média:
//    "R$ 1800,00 – Abaixo da média"
//    "R$ 3200,00 – Acima da média"

// → Seu código aqui:
// let media = null;
// let soma = null;
// for (let i = 0; i < salarios.length; i++) {
//     soma += salarios[i]
// }
// media = soma / salarios.length
// console.log(`Média salarial: R$ ${media.toFixed(2)}`)

// for (let i = 0; i < salarios.length; i++) {
//     if (salarios[i] < media) {
//         console.log(`R$ ${salarios[i]} – Abaixo da média`)
//     } else {
//         console.log(`R$ ${salarios[i]} – Acima da média`)
//     }
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 11 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Calcule a média das notas da turma e armazene em uma variável 'media'.
// e) Percorra o array e para cada aluno exiba no console:
//    "<nome>: <nota> – <situação>"
//    A situação deve ser:
//      "Aprovado"    → nota >= 7
//      "Recuperação" → nota >= 5 e < 7
//      "Reprovado"   → nota < 5
// f) Ao final, exiba a média da turma no formato:
//    "Média da turma: <media>"
// g) Exiba o array 'turma' com console.table().

// → Seu código aqui:
// const qtlAluno = 3;
// let media = null;
// let soma = null;
// let situacao = null;
// let turma = []
// for (let i = 0; i < qtlAluno; i++) {
//     let nome = lerTeclado.question("Digite o nome do aluno: ")
//     let nota = lerTeclado.questionFloat("Digite a nota do aluno: ")
//     turma.push(
//         aluno = {
//             nome,
//             nota
//         }
//     )
//     soma += turma[i].nota
// }
// media = soma / turma.length
// for (let i = 0; i < qtlAluno; i++) {
//     if (turma[i].nota >= 7) {
//         situacao = "Aprovado"
//     } else if (turma[i].nota >= 5) {
//         situacao = "Recuperação"
//     } else {
//         situacao = "Reprovado"
//     }
//     console.log(`${turma[i].nome}: ${turma[i].nota} - ${situacao}`)
// }
// console.log(`Média da turma: ${media.toFixed(2)}`)
// console.table(turma)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 12 – Coletando dados com for e input
// ------------------------------------------------------------
// a) Pergunte ao usuário quantos produtos quer cadastrar (questionInt()).
// b) Usando um for, colete de cada produto:
//    - nome (question())
//    - preco (questionFloat())
// c) Armazene cada produto como objeto em um array 'estoque'.
// d) Após o cadastro, percorra o array e exiba cada produto no formato:
//    "<nome>: R$ <preco>"
// e) Exiba o produto mais caro e o mais barato.
// f) Exiba o array com console.table().

// → Seu código aqui:
let estoque = []
let qtProd = lerTeclado.questionInt("Quantos produtos quer cadastrar?: ")

for (let i = 0; i < qtProd; i++) {
    let nome = lerTeclado.question("digite o nome do produto: ")
    let preco = lerTeclado.questionFloat("digite o preço do produto: ")
    estoque.push({ nome, preco })
    console.log(`${estoque[i].nome}: R$ ${estoque[i].preco}`)
}
let prodCaro = estoque[0]
let prodBarato = estoque[0]
for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].preco > prodCaro.preco ) {
        prodCaro = estoque[i]
    }
    if (estoque[i].preco < prodBarato.preco) {
        prodBarato = estoque[i]
    }
}
console.log(`
Produto mais caro: ${prodCaro.nome}, preço: ${prodCaro.preco}.
Produto mais barato: ${prodBarato.nome}, preço: ${prodBarato.preco}.
`)
console.log("_______________________________");