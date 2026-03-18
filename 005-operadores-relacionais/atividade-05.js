// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

let lerTeclado = require('readline-sync');

// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
//
// Pares de valores:
//   1) 10 e 10
//   2) 10 e "10"
//   3) 0 e false
//   4) null e undefined
//   5) "JS" e "JS"

// → Seu código aqui:

// //   1) 10 e 10
// let valor1 = 10;
// let valor2 = 10;
// console.log(
//     `${valor1} é == a → ${valor2}: ${valor1 == valor2}\n
//      ${valor1} é === a → ${valor2}: ${valor1 === valor2}`
//     );
// //   2) 10 e "10"
// valor1 = 10;
// valor2 = "10";
// console.log(
//     `${valor1} é == a → ${valor2}: ${valor1 == valor2}\n
//      ${valor1} é === a → ${valor2}: ${valor1 === valor2}`
//      );
// //   3) 0 e false
// valor1 = 0;
// valor2 = false;
// console.log(
//     `${valor1} é == a → ${valor2}: ${valor1 == valor2}\n
//      ${valor1} é === a → ${valor2}: ${valor1 === valor2}`
//      );
// //   4) null e undefined
// valor1 = null;
// valor2 = undefined;
// console.log(
//     `${valor1} é == a → ${valor2}: ${valor1 == valor2}\n
//      ${valor1} é === a → ${valor2}: ${valor1 === valor2}`
//      );
// //   5) "JS" e "JS"
// valor1 = "JS";
// valor2 = "JS";
// console.log(
//     `${valor1} é == a → ${valor2}: ${valor1 == valor2}\n
//      ${valor1} é === a → ${valor2}: ${valor1 === valor2}`
//      );

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Comparando com != e !==
// ------------------------------------------------------------
// Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
//
// Pares de valores:
//   1) 5 e 5
//   2) 5 e "5"
//   3) 7 e 3
//   4) true e 1

// → Seu código aqui:

// //   1) 5 e 5
// valor1 = 5;
// valor2 = 5;
// console.log(
//     `${valor1} é != a → ${valor2}: ${valor1 != valor2}\n
//      ${valor1} é !== a → ${valor2}: ${valor1 !== valor2}`
//     );
// //   2) 5 e "5"
// valor1 = 5;
// valor2 = "5";
// console.log(
//     `${valor1} é != a → ${valor2}: ${valor1 != valor2}\n
//      ${valor1} é !== a → ${valor2}: ${valor1 !== valor2}`
//     );
// //   3) 7 e 3
// valor1 = 7;
// valor2 = 3;
// console.log(
//     `${valor1} é != a → ${valor2}: ${valor1 != valor2}\n
//      ${valor1} é !== a → ${valor2}: ${valor1 !== valor2}`
//     );
// //   4) true e 1
// valor1 = true;
// valor2 = 1;
// console.log(
//     `${valor1} é != a → ${valor2}: ${valor1 != valor2}\n
//      ${valor1} é !== a → ${valor2}: ${valor1 !== valor2}`
//     );

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
// ------------------------------------------------------------
// a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
// c) Exiba cada resultado com template literal e verificação ternária no formato:
//    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// → Seu código aqui:

// // a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// let salarioA = 3500;
// let salarioB = 4200;
// // b) Calcule e armazene em variáveis (booleanas) os resultados de:
// //    - salarioA > salarioB
// let a = salarioA > salarioB;
// //    - salarioA < salarioB
// let b = salarioA < salarioB;
// //    - salarioA >= salarioB
// let c = salarioA >= salarioB;
// //    - salarioA <= salarioB
// let d = salarioA <= salarioB;
// //    - salarioA === salarioB
// let e = salarioA === salarioB;
// // c) Exiba cada resultado com template literal e verificação ternária no formato:
// //    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"
// console.log(`
//     Salário A: R$ ${salarioA} > Salário B: R$ ${salarioB}: ${a}
//     Salário A: R$ ${salarioA} < Salário B: R$ ${salarioB}: ${b}
//     Salário A: R$ ${salarioA} >= Salário B: R$ ${salarioB}: ${c}
//     Salário A: R$ ${salarioA} <= Salário B: R$ ${salarioB}: ${d}
//     Salário A: R$ ${salarioA} === Salário B: R$ ${salarioB}: ${e}
// `);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
// b) Armazene em "temEstoque" o resultado de: estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// d) Declare "temperatura" com valor 36.5.
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
// f) Exiba cada variável usando template literal.

// → Seu código aqui:

// // a) Declare "estoque" com valor 0.
// let estoque = 0;
// // b) Armazene em "temEstoque" o resultado de: estoque > 0
// let temEstoque = estoque > 0;
// // c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// let estoqueZerado = estoque === 0;
// // d) Declare "temperatura" com valor 36.5.
// let temperatura = 36.5;
// // e) Armazene em "febre" o resultado de: temperatura >= 37.6
// let febre = 37.6;
// // f) Exiba cada variável usando template literal.
// console.log(`
//     Estoque: ${estoque}
//     Tem estoque: ${temEstoque}
//     Estoque Vazio: ${estoqueZerado}
//     Temperatura: ${temperatura}
//     Febre: ${febre}
// `)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
// c) Exiba cada resultado com template literal.

// → Seu código aqui:

// // a) Peça ao usuário dois números.
// let num1 = lerTeclado.questionInt(`Digite um numero: `);
// let num2 = lerTeclado.questionInt(`Digite outro numero: `);
// // b) Armazene em variáveis o resultado das seguintes comparações:
// //    - num1 > num2
// let a = num1 > num2;
// //    - num1 < num2
// let b = num1 < num2
// //    - num1 === num2
// let c = num1 === num2
// //    - num1 >= num2
// let d = num1 >= num2
// // c) Exiba cada resultado com template literal.
// console.log(`
//     Numero 1: ${num1} > Numero 2: ${num2}: ${a}
//     Numero 1: ${num2} < Numero 2: ${num2}: ${b}
//     Numero 1: ${num1} === Numero 2: ${num2}: ${c}
//     Numero 1: ${num1} >= Numero 2: ${num2}: ${d}
//  `);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
// b) Defina uma constante "precoMaximo" com valor 100.
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"

// → Seu código aqui:

// // a) Peça ao usuário o preço de um produto.
// let preco = lerTeclado.questionInt(`Digite o preço de um produto: `);
// // b) Defina uma constante "precoMaximo" com valor 100.
// const precoMaximo = 100;
// // c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// let estaDentroDoOrcamento = preco <= precoMaximo;
// // d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// let esteItemEhCaro = preco > precoMaximo;
// // e) Exiba no console:
// console.log(`
//     Preço informado: R$ ${preco}
//     Dentro do orçamento (R$ ${precoMaximo})? : ${estaDentroDoOrcamento ? "Sim" : "Não"}
//     Item caro (R$ ${precoMaximo})? : ${esteItemEhCaro ? "Sim" : "Não"}
// `)// usei o literal para ficar com melhor entendimento

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
//    - idadePessoa1 === idadePessoa2
//    - idadePessoa1 >= 18 (maior de idade)
//    - idadePessoa2 >= 18 (maior de idade)
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// → Seu código aqui:

// // a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// const pessoa1 = {
//     nomePessoa1: lerTeclado.question(`Digite o nome de uma pessoa: `),
//     idadePessoa1: lerTeclado.questionInt(`Digite a idade da pessoa: `)
// };

// const pessoa2 = {
//     nomePessoa2: lerTeclado.question(`Digite o nome de outra pessoa: `),
//     idadePessoa2: lerTeclado.questionInt(`Digite a idade da pessoa: `)
// };

// let cadastro = [pessoa1, pessoa2];
// // b) Armazene os resultados das comparações:
// //    - idadePessoa1 > idadePessoa2
// let a = cadastro[0].idadePessoa1 > cadastro[1].idadePessoa2;
// //    - idadePessoa1 === idadePessoa2
// let b = cadastro[0].idadePessoa1 === cadastro[1].idadePessoa2;
// //    - idadePessoa1 >= 18 (maior de idade)
// let c = cadastro[0].idadePessoa1 >= 18;
// //    - idadePessoa2 >= 18 (maior de idade)
// let d = cadastro[1].idadePessoa2 >= 18;
// // c) Exiba todos os resultados com template literal e verificação ternária.
// console.log(`
//     Idade da ${cadastro[0].nomePessoa1} é ${cadastro[0].idadePessoa1} e ela é ${cadastro[0].idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}
//     Idade da ${cadastro[1].nomePessoa2} é ${cadastro[1].idadePessoa2} e ela é ${cadastro[1].idadePessoa2 >= 18 ? "maior de idade" : "menor de idade"}
// `)
// // d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.
// console.log(`
//     Entre ${cadastro[0].nomePessoa1} e ${cadastro[1].nomePessoa2}, o mais velho é ${cadastro[0].idadePessoa1 > cadastro[1].idadePessoa2 ? cadastro[0].nomePessoa1 : cadastro[1].nomePessoa2}
// `)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`
// → Seu código aqui:

// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
let alunos = [
    {
        nome: lerTeclado.question("Digite o nome do aluno: "),
        n1: lerTeclado.questionInt("Digite a primeira nota: "),
        n2: lerTeclado.questionInt("Digite a segunda nota: "),
        n3: lerTeclado.questionInt("Digite a terceira nota: "),
    },
    {
        nome: lerTeclado.question("Digite o nome do aluno: "),
        n1: lerTeclado.questionInt("Digite a primeira nota: "),
        n2: lerTeclado.questionInt("Digite a segunda nota: "),
        n3: lerTeclado.questionInt("Digite a terceira nota: "),
    }    
] // eu perguntei o nome deles apenas por treino e pq deu vontade
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
let mediaAluno1 = (alunos[0].n1 + alunos[0].n2 + alunos[0].n3) / 3;
let mediaAluno2 = (alunos[1].n1 + alunos[1].n2 + alunos[1].n3) / 3;
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
console.log(`
    Entre ${alunos[0].nome} e ${alunos[1].nome}, o aluno com a moior media é :${mediaAluno1 > mediaAluno2 ? alunos[0].nome : alunos[1].nome}
`)
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
console.log(`Aluno com primeira maior nota: ${alunos[0].n1 > alunos[1].n1 ? alunos[0].nome : alunos[1].nome}`)
console.log(`Aluno com segunda maior nota: ${alunos[0].n2 > alunos[1].n2 ? alunos[0].nome : alunos[1].nome}`)
console.log(`Aluno com terceira maior nota: ${alunos[0].n3 > alunos[1].n3 ? alunos[0].nome : alunos[1].nome}`)
console.log("_______________________________");