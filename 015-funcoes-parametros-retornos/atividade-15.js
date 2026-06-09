// ============================================================
// ATIVIDADE 15 – Funções com Parâmetros e Retornos
// ============================================================
//
// IMPORTANTE: a partir de agora, as funções devem RECEBER
// PARÂMETROS e RETORNAR valores sempre que fizer sentido.
// Evite ficar misturando console.log() dentro de funções.
//
// ============================================================
const lerTeclado = require("readline-sync")
// ------------------------------------------------------------
// EXERCÍCIO 1 – Função com 1 parâmetro
// ------------------------------------------------------------
// a) Crie a função 'quadrado(n)' que retorna n elevado ao quadrado.
// b) Teste com 3, 7 e 10. Exiba cada resultado.

// → Seu código aqui:
// let numero = lerTeclado.questionFloat("Digite algum numero (3, 7 ou 10): ")
// function quadrado(n) {
//     return console.log(n ** n)
// }
// quadrado(numero)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Função com 2 parâmetros
// ------------------------------------------------------------
// a) Crie a função 'somar(a, b)' que retorna a soma de 2 numeros quaisquer (numeros passados ao chamar a função).
// b) Crie 'subtrair(a, b)', 'multiplicar(a, b)' e 'dividir(a, b)'.
//    Em dividir, retorne a string "Erro: divisão por zero" se b === 0.
// c) Teste cada uma com diversos valores e exiba os resultados.

// → Seu código aqui:
// let n = 0
// let num = []
// function catalogo() {
//     console.log("1 - SOMAR | 2 - SUBTRAIR | 3 - MULTIPLICAR | 4 - DIVIDIR")
//     escolha = lerTeclado.questionFloat("Digite algum numero entre 1 e 4 (0 para sair): ")
//     return escolha
// }
// function somar(a, b) { return (a + b) }
// function subtrair(a, b) { return (a - b) }
// function multiplicar(a, b) { return (a * b) }
// function dividir(a, b) { return (a / b) }
// function operacao(e, num1, num2) {
//     switch (e) {
//         case 0:
//             break
//         case 1:
//             return somar(num1, num2)
//         case 2:
//             return subtrair(num1, num2)
//         case 3:
//             return multiplicar(num1, num2)
//         case 4:
//             return dividir(num1, num2)
//     }
// }
// function valorInvalido(num1, num2, f) {
//     if (num1 === 0 || num2 === 0 && f === 4) return true
// }
// while (true) {
//     num = []
//     n = 0
//     let f = catalogo()
//     if (f === 0) break
//     for (let i = 0; i < 2; i++) {
//         do {
//             n = lerTeclado.questionFloat("Digite um numero: ")
//             f === 4 && n === 0 ? console.log("Erro: divisão por zero") : console.log(n + "/")
//         } while (f === 4 && n === 0)
//         num.push(n)
//     }
//     console.table(num)
//     if (num.length === 2) {
//         console.log(operacao(f, num[0], num[1]))
//     }
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Funções booleanas
// ------------------------------------------------------------
// a) Crie 'ehPar(n)' que retorna true se n for par, senão false.
// b) Crie 'ehMaiorDeIdade(idade)' que retorna true se idade >= 18.
// c) Crie 'ehVogal(letra)' que retorna true se letra for vogal
//    (considere maiúsculas e minúsculas).
// d) Teste cada função e exiba os resultados.

// → Seu código aqui:
// let vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
// function ehPar(n) {
//     if(n % 2 === 0) {
//         return true
//     }else{return false}
// }
// function ehMaiorDeIdade(idade) {
//     if(idade >= 18) {
//         return true
//     }else{return false}
// }
// function ehVogal(letra) {
//     if(vogais.includes(letra)) {
//         return true
//     }else{return false}
// }
// console.log(ehPar(3))
// console.log(ehPar(8))
// console.log(ehMaiorDeIdade(14))
// console.log(ehMaiorDeIdade(31))
// console.log(ehVogal("r"))
// console.log(ehVogal("I"))

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Múltiplos returns (early return)
// ------------------------------------------------------------
// a) Crie a função 'classificarIMC(imc)' que retorna:
//    - "Abaixo do peso"   se imc < 18.5
//    - "Peso normal"      se imc < 25
//    - "Sobrepeso"        se imc < 30
//    - "Obesidade"        caso contrário
// b) Crie 'calcularIMC(peso, altura)' que retorna peso / (altura * altura).
// c) Pergunte peso e altura ao usuário.
// d) Combine as duas funções e exiba:
//    "IMC: <valor> – <classificação>"

// → Seu código aqui:
// let rs = require("readline-sync"); 
// function classificarIMC(imc) {
//     if(imc < 18.5) {return "Abaixo do peso"}
//     if(imc < 25) {return "Peso normal"}
//     if(imc < 30) {return "Sobrepeso"}
//     return "Obesidade"
// }
// function calcularIMC(peso,altura) {
//     return (peso / (altura*altura)).toFixed(2)
// }
// let peso = rs.questionInt(`Qual o seu peso(Kg)? : `)
// let altura = rs.questionFloat(`Qual a sua altura(metros)? : `)
// const imc = calcularIMC(peso,altura)
// console.log(`IMC ${imc} - ${classificarIMC(imc)}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Parâmetros padrão (default)
// ------------------------------------------------------------
// a) Crie a função 'precoComDesconto(valor, desconto = 10)' que retorna
//    o valor após aplicar o desconto em PORCENTAGEM.
// b) Teste:
//    - precoComDesconto(100)     → retorno esperado: 90
//    - precoComDesconto(100, 25  → retorno esperado: 75
//    - precoComDesconto(250, 5)  → retorno esperado: 237.5
// c) Exiba cada resultado formatado com toFixed(2).

// → Seu código aqui:
// function precoComDesconto(valor, desconto = 10) {
//     return valor -= (valor / 100) * desconto
// }
// console.log(precoComDesconto(100))
// console.log(precoComDesconto(100, 25))
// console.log(precoComDesconto(250, 5))

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Funções que recebem vetores
// ------------------------------------------------------------
// a) Crie a função 'somarVetor(vet)' que retorna a soma dos elementos de um vetor.
// b) Crie 'mediaVetor(vet)' que retorna a média (REAPROVEITE somarVetor).
// c) Crie 'maiorDoVetor(vet)' que retorna o maior valor de um vetor.
// d) Crie 'menorDoVetor(vet)' que retorna o menor valor de um vetor.
// e) Teste com:
numeros = [12, 7, 25, 3, 18, 9, 31, 14];

// → Seu código aqui:
// function somarVetor(vet) {
//     let n = 0
//     for (let i = 0; i < vet.length; i++) {
//         n += vet[i]
//     }
//     return (n)
// }
// function mediaVetor(vet) {
//     let n = somarVetor(vet)
//     return console.log((n /= vet.length).toFixed(0))
// }
// function maiorDoVetor(vet) {
//     return console.log(Math.max(...vet))
// }
// function menorDoVetor(vet) {
//     return console.log(Math.min(...vet))
// }
// console.log(somarVetor(numeros))
// mediaVetor(numeros)
// maiorDoVetor(numeros)
// menorDoVetor(numeros)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Função que retorna objeto
// ------------------------------------------------------------
// a) Crie a função 'criarAluno(nome, idade, nota)' que retorna um objeto:
//    { nome, idade, nota, situacao }
//    onde 'situacao' é "Aprovado" se nota >= 7, senão "Reprovado".
// b) A verificação de aprovação deve ser feita por uma função específica para isso.
// c) Crie 3 alunos chamando a função e exiba-os com console.table([a1, a2, a3]).

// → Seu código aqui:
// let todosAlunos = []
// let qAlunos = lerTeclado.questionInt("Quantos alunos? ")
// function criarAluno(a) {
//     for (let i = 0; i < a; i++) {
//         let nome = lerTeclado.question("Nome do aluno: ")
//         let idade = lerTeclado.question("Idade do aluno: ")
//         let nota = lerTeclado.question("Nota do aluno: ")
//         let aluno = { nome: nome, idade: idade, nota: nota, situacao: situacao(nota) }
//         todosAlunos.push(aluno)
//     }
// }
// function situacao(a) {
//     return a >= 7 ? "Aprovado" : "Reprovado"
// }
// criarAluno(qAlunos)
// console.table(todosAlunos)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Função que retorna vetor
// ------------------------------------------------------------
// a) Crie a função 'gerarPares(inicio, fim)' que retorna um vetor
//    com todos os números PARES entre 'inicio' e 'fim' (inclusive).
// b) Teste com gerarPares(1, 20) e exiba o vetor.
// c) Crie 'filtrarMaioresQue(vet, limite)' que retorna um novo vetor
//    apenas com os elementos maiores que 'limite'.
// d) Combine: gere pares de 1 a 50 e filtre os maiores que 30.

// → Seu código aqui:
// function gerarPares(inicio, fim) {
//     let gerarPares = []
//     for (let i = inicio; i <= fim; i++) {
//         if (i % 2 === 0) gerarPares.push(i)
//     }
//     return gerarPares
// }
// function filtrarMaioresQue(vet, limite) {
//     return gerarPares(limite, 50)
// }
// console.log(gerarPares(1, 20))
// console.log(filtrarMaioresQue(gerarPares(1, 50), 30))

console.log("_______________________________");