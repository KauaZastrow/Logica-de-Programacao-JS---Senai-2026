const lerTeclado = require("readline-sync")
// ============================================================
// ATIVIDADE 14 – Funções Simples
// ============================================================
//
// IMPORTANTE: nesta atividade, NÃO use parâmetros nem return.
// As funções devem apenas executar um bloco de código.
//
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Primeira função
// ------------------------------------------------------------
// a) Crie uma função 'saudacao' que exibe 3 linhas no console:
//    "Olá!"
//    "Bem-vindo(a) ao curso de JavaScript."
//    "Bons estudos!"
// b) Chame a função 2 vezes.

// → Seu código aqui:
// function saudacao (){
//     console.log("Olá!")
//     console.log("Bem-vindo(a) ao curso de JavaScript.")
//     console.log("Bons estudos!")
// }
// saudacao()
// saudacao()
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Função que organiza
// ------------------------------------------------------------
// a) Crie uma função 'linha' que exibe:
//    "----------------------------------------"
// b) Crie uma função 'titulo' que exibe:
//    "         RELATÓRIO MENSAL              "
// c) Crie uma função 'cabecalho' que CHAMA, em ordem:
//    linha(), titulo(), linha().
// d) Chame cabecalho() uma vez.

// → Seu código aqui:
// function linha (){
//     console.log("----------------------------------------")
// }
// function titulo (){
//     console.log("         RELATÓRIO MENSAL              ")
// }
// function cabecalho (){
//     linha()
//     titulo()
//     linha()
// }
// cabecalho()
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Calculadora de informações
// ------------------------------------------------------------
// a) Crie uma função 'meusDados' que pergunta ao usuário:
//    - Nome
//    - Idade
//    - Cidade
// b) Crie uma função 'exibirDados' que recebe exibe os dados e exibe um cartão no formato:
//    -------------------------
//    Nome:   <nome>
//    Idade:  <idade>
//    Cidade: <cidade>
//    -------------------------
// c) Pergunte os dados de 2 usuários e os guarde em um objeto.
// d) Exiba os dados dos 2 usuários.
//
// ATENÇÃO: APÓS CRIADA, DIGITAR/CHAMAR A FUNÇÃO APENAS UMA VEZ
// PENSE EM UMA LÓGICA QUE EVITE DIGITAR A FUNÇÃO MAIS DE UMA VEZ
// Após finalizar, me chame para eu verificar a lógica - questão importante

// → Seu código aqui:
// let usuarios = []
// function meusDados() {
//     for (let i = 0; i < 2; i++) {
//         usuarios.push(
//             {
//                 nome: lerTeclado.question("Digite seu nome: "),
//                 idade: lerTeclado.questionInt("Digite sua idade: "),
//                 cidade: lerTeclado.question("Digite o nome da sua cidade: ")
//             }
//         )
//     }
// }
// meusDados()
// function exibirDados() {
//     for (let i = 0; i < usuarios.length; i++) {
//         console.log("-------------------------")
//         console.log(`Nome: ${usuarios[i].nome}\nIdade: ${usuarios[i].idade}\nCidade: ${usuarios[i].cidade}\n`)
//         console.log("-------------------------")
//     }
// }
// exibirDados()

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Sorteio de número
// ------------------------------------------------------------
// a) Crie uma função 'sortear' que:
//    - Gera um número aleatório de 1 a 100
//      (Math.floor(Math.random() * 100) + 1).
//    - Exibe: "Número sorteado: <n>"
// b) Execute a função 5 vezes - tente fazer sem digitar a função 5 vezes.

// → Seu código aqui:
// function sortear() {
//     max = 100
//     min = 1
//     n = (Math.floor(Math.random() * 100) + 1)
//     console.log(`Numero sorteado: ${n}`)
// }
// for (let i = 0; i < 5; i++) {
//     sortear()
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Tabela de multiplicação
// ------------------------------------------------------------
// a) Crie uma função 'tabuadaDoCinco' que exibe a tabuada do 5 inteira:
// (pense em uma lógica para não precisar digitar todos os valores)
//    5 x 1 = 5
//    5 x 2 = 10
//    ...
//    5 x 10 = 50
// b) Crie uma função 'tabuadaDoSete' análoga, para o 7.
// c) Chame as duas funções.

// → Seu código aqui:
// function tabuadaDoCinco() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`5 x ${i} = ${i * 5}`)
//     }
// }
// function tabuadaDoSete() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`7 x ${i} = ${i * 7}`)
//     }
// }
// tabuadaDoCinco()
// tabuadaDoSete()
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Conversão fixa
// ------------------------------------------------------------
// a) Crie uma função 'converterTemperatura' que:
//    - Pergunta uma temperatura em Celsius.
//    - Calcula em Fahrenheit: F = C * 1.8 + 32.
//    - Exibe: "<C>°C equivalem a <F>°F".
// b) Chame a função 3 vezes.

// → Seu código aqui:
// function converterTemperatura() {
//     temperaturaC = lerTeclado.questionFloat("Digite a temperatura em Celcios: ")
//     fahrenheit = temperaturaC * 1.8 + 32
//     console.log(`${temperaturaC}°C equivalem a ${fahrenheit}°F`)
// }
// for (let i = 0; i < 3; i++){
//     converterTemperatura()
// }
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Listando informações
// ------------------------------------------------------------
// a) Utilizando o vetor:
const filmes = ["Matrix", "Interestelar", "Origem", "Senhor dos Anéis"];
// b) Crie a função 'listarFilmes' que percorre o vetor 'filmes' com for
//    e exibe cada um no formato: "<i+1> - <filme>".
// c) Chame listarFilmes() duas vezes.

// → Seu código aqui:
// function listarFilmes() {
//     for (let i = 0; i < filmes.length; i++) {
//         console.log(`${i + 1} - ${filmes[i]}`)
//     }
// }
// listarFilmes()
// listarFilmes()
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Dividindo um programa em partes
// ------------------------------------------------------------
// Vamos criar um "mini sistema de boas-vindas" composto por 4 funções:
//
// a) 'limparTela'      → exibe 30 linhas em branco (console.log("")).
// b) 'banner'          → exibe um banner com 3 linhas (exiba qualquer informação dentro de "-----------").
// c) 'pedirNome'       → pergunta o nome do usuário e exibe "Olá, <nome>!".
// d) 'rodape'          → exibe "Sistema desenvolvido por <seu nome>".
//
// Em seguida, monte o programa principal (outra função) chamando, em ordem:
//    limparTela(); banner(); pedirNome(); rodape();
// E chame a função principal.

// → Seu código aqui:
// function limparTela() {
//     for (let i = 0; i < 30; i++) {
//         console.log("")
//     }
// }
// function banner() {
//     console.log(`
//      ╱|、          ____
//     (x  o 7       |Speak Ingles?
//      |、⁻〵       /____
//      じしˍ,)ノ
//     `)
// }
// function pedirNome() {
//     nome = lerTeclado.question("Qual seu nome?  => ")
//     console.log(`
//      ╱|、          ___
//     (x  o 7       |Olá, ${nome}
//      |、⁻〵       /___
//      じしˍ,)ノ
//     `)
// }
// function rodape() {
//     console.log(`   Sistema desenvolvido por Kauã G. Zastrow!
//      ╱|、          ________
//     (x  o 7       | Slice!
//      |、⁻〵       /________
//      じしˍ,)ノ`)
// }
// function prgPrincipal() {
//     limparTela()
//     banner()
//     pedirNome()
//     rodape()
// }
// prgPrincipal()
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Menu organizado em funções
// ------------------------------------------------------------
// Você vai criar um menu onde CADA opção é uma função separada.
//
// a) Crie as funções:
//    - 'opcaoSomar'       → pede 2 números e exibe a soma.
//    - 'opcaoSubtrair'    → pede 2 números e exibe a subtração.
//    - 'opcaoMultiplicar' → pede 2 números e exibe a multiplicação.
//    - 'opcaoDividir'     → pede 2 números, trata divisão por zero e exibe o resultado.
//    - 'exibirMenu'       → exibe as opções no console.
//
// b) Usando do...while + switch, monte o menu chamando a função
//    correspondente em cada case. Encerre quando o usuário digitar 0.

// → Seu código aqui:
// function linha() {
//     console.log("--------------------------")
// }
// function opcaoSomar() {
//     a = lerTeclado.questionFloat("Digite um numero: ")
//     b = lerTeclado.questionFloat("Digite outro numero: ")
//     console.log(`${a} + ${b} = ${a + b}`)
// }
// function opcaoSubtrair() {
//     a = lerTeclado.questionFloat("Digite um numero: ")
//     b = lerTeclado.questionFloat("Digite outro numero: ")
//     console.log(`${a} - ${b} = ${a - b}`)
// }
// function opcaoMultiplicar() {
//     a = lerTeclado.questionFloat("Digite um numero: ")
//     b = lerTeclado.questionFloat("Digite outro numero: ")
//     console.log(`${a} x ${b} = ${a * b}`)
// }
// function opcaoDividir() {
//     a = lerTeclado.questionFloat("Digite um numero: ")
//     b = lerTeclado.questionFloat("Digite outro numero: ")
//     console.log(`${a} / ${b} = ${a / b}`)
// }
// function exibirMenu() {
//     linha()
//     operacao = lerTeclado.questionInt("1 - Somar| 2 - Subtrair| 3 - Multiplicar| 4 - Dividir\n Digite oq vc quer fazer(0 para sair): ")
//     linha()
// }
// while (true) {
//     exibirMenu()
//     switch (operacao) {
//         case 0:
//             break
//         case 1:
//             opcaoSomar()
//             continue
//         case 2:
//             opcaoSubtrair()
//             continue
//         case 3:
//             opcaoMultiplicar()
//             continue
//         case 4:
//             opcaoDividir()
//             continue
//     }
//     break
// }
console.log("_______________________________");