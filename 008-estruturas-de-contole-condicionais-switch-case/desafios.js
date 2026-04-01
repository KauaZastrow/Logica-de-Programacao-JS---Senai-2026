// ============================================================
//   DESAFIOS (para quem já terminou a atividade 08) – Switch / Case
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================

let lerTeclado = require('readline-sync');

// ------------------------------------------------------------
// DESAFIO 1 – Simulador de caixa de restaurante
// ------------------------------------------------------------

// Crie uma lista de objetos para o Cardápio:
//   1 – Frango Grelhado  R$ 32,00
//   2 – Filé ao Molho    R$ 45,00
//   3 – Massa Italiana   R$ 28,00
//   4 – Salada Caesar    R$ 22,00
//   5 – Sopa do Dia      R$ 18,00
//
// Crie uma lista de objetos para as Bebidas:
//   1 – Suco Natural     R$ 9,00
//   2 – Refrigerante     R$ 7,00
//   3 – Água             R$ 4,00
//   4 – Sem bebida       R$ 0,00
//
// a) Pergunte ao usuário:
//    - Nome pessoal.
//    - Número do prato desejado.
//    - Número da bebida desejada.
// b) Com switch/case, determine o prato e o preço do prato,
//    e outro switch para a bebida e seu preço.
//    Para opções inválidas, exiba "Item inválido." e use preço 0.
// c) Armazene os dados em um objeto "pedido":
//    nomeCliente, nomePrato, precoPrato, nomeBebida, precoBebida, total.
// d) Pergunte se vai pagar no pix (keyInYN()).
//    Se sim, aplique 10% de desconto no total.
//    Atualize o total no objeto.
// e) Exiba o objeto com console.table().
// f) Exiba o recibo final com template literal.

// → Seu código aqui:

// const cardapio = {
//     pratos: [
//         { numero: 1, nomePrato: "Frango Grelhado", preco: 32.00 },
//         { numero: 2, nomePrato: "Filé ao Molho", preco: 45.00 },
//         { numero: 3, nomePrato: "Massa Italiana", preco: 28.00 },
//         { numero: 4, nomePrato: "Salada Caesar", preco: 22.00 },
//         { numero: 5, nomePrato: "Sopa do Dia", preco: 18.00 }
//     ],
//     bebidas: [
//         { numero: 1, nomeBebida: "Suco Natural", preco: 9.00 },
//         { numero: 2, nomeBebida: "Refrigerante", preco: 7.00 },
//         { numero: 3, nomeBebida: "Água", preco: 4.00 },
//         { numero: 4, nomeBebida: "Sem bebida", preco: 0.00 }
//     ]
// }

// let pedido = {
//     nomeCliente: lerTeclado.question("Qual seu nome?: "),
//     precoPrato: 0,
//     precoBebida: 0,
//     total: 0,
//     totalDesconto: 0
// }
// console.table(cardapio.pratos);
// pedido.numeroPrato = lerTeclado.questionInt("Qual o numero do prato desejado?:");
// console.table(cardapio.bebidas);
// pedido.numeroBebida = lerTeclado.questionInt("Qual o numero da bebida desejada?:");

// switch (pedido.numeroPrato) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         pedido.nomePrato = cardapio.pratos[pedido.numeroPrato - 1].nomePrato;
//         pedido.precoPrato += cardapio.pratos[pedido.numeroPrato - 1].preco;
//         break;
//     default:
//         console.log("Item inválido.(Prato)")
// }

// switch (pedido.numeroBebida) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         pedido.nomeBebida = cardapio.bebidas[pedido.numeroBebida - 1].nomeBebida;
//         pedido.precoBebida += cardapio.bebidas[pedido.numeroBebida - 1].preco;
//         break;
//     default:
//         console.log("Item inválido.(Bebida)")
// }
// pedido.totalDesconto = pedido.precoPrato + pedido.precoBebida;
// pedido.total = pedido.precoPrato + pedido.precoBebida;
// let pix = lerTeclado.keyInYN("vai pagar no pix?")
// if (pix) {
//     pedido.totalDesconto *= 0.9;
//     console.log(`Desconto de 10% aplicado. Novo valor: ${pedido.totalDesconto}`)
// } else {
//     console.log("Sem desconto")
// }
// console.table(pedido)
// if (pix) {
//     console.log(`
// ${pedido.nomeCliente}
// Seu pedido foi:
// ${pedido.nomePrato}: R$ ${pedido.precoPrato}
// ${pedido.nomeBebida}: R$ ${pedido.precoBebida}
// Total com desconto de 10%: R$ ${pedido.totalDesconto}
// `)
// } else {
//     console.log(`
// ${pedido.nomeCliente}
// Seu pedido foi:
// ${pedido.nomePrato}: R$ ${pedido.precoPrato}
// ${pedido.nomeBebida}: R$ ${pedido.precoBebida}
// Total: R$ ${pedido.total}
// `)
// }

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Conversor de unidades
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - O valor a converter (questionFloat()).
//    - O tipo de conversão (questionInt()):
//      1 – Km para Milhas
//      2 – Milhas para Km
//      3 – Celsius para Fahrenheit
//      4 – Fahrenheit para Celsius
//      5 – Kg para Libras
//      6 – Libras para Kg
// b) Com switch/case, aplique a fórmula correta:
//    - Km → Milhas:         valor * 0.621371
//    - Milhas → Km:         valor * 1.60934
//    - Celsius → Fahrenheit: (valor * 9/5) + 32
//    - Fahrenheit → Celsius: (valor - 32) * 5/9
//    - Kg → Libras:         valor * 2.20462
//    - Libras → Kg:         valor / 2.20462
//    - default: "Tipo de conversão inválido."
// c) Armazene a conversão em um objeto:
//    tipo, valorOriginal, unidadeOriginal, resultado, unidadeResultado.
// d) Exiba o objeto com console.table().
// e) Exiba: "<valorOriginal> <unidadeOriginal> = <resultado> <unidadeResultado>"

// → Seu código aqui:

console.log(`
  1 - Km → Milhas
  2 - Milhas → Km
  3 - Celsius → Fahrenheit
  4 - Fahrenheit → Celsius
  5 - Kg → Libras
  6 - Libras → Kg
`)
const unidades = ["Km", "Milhas", "Celsius", "Fahrenheit", "Kg", "Libras"]
const Conversor = {
    tipo: lerTeclado.questionInt("Escolha o tipo de conversão"),
    valorOriginal: lerTeclado.questionInt("Escolha um numero para converter"),
    unidadeOriginal: unidades[tipo - 1],
    unidadeResultado: null,
    resultado: null
}

switch (Conversor.tipo){
    case 1:
    conversor.valorOriginal = conversor.valorOriginal * 0.621371;
    conversor.unidadeResultado = unidades[1];
    break;
    case 2:
    conversor.valorOriginal = conversor.valorOriginal * 1.60934;
    conversor.unidadeResultado = unidades[0];
    break;
    case 3:
    conversor.valorOriginal = (conversor.valorOriginal * 9/5) + 32;
    conversor.unidadeResultado = unidades[3];
    break;
    case 4:
    conversor.valorOriginal = (conversor.valorOriginal - 32) * 5/9;
    conversor.unidadeResultado = unidades[2];
    break;
    case 5:
    conversor.valorOriginal = conversor.valorOriginal * 2.20462;
    conversor.unidadeResultado = unidades[5];
    break;
    case 6:
    conversor.valorOriginal = conversor.valorOriginal / 2.20462;
    conversor.unidadeResultado = unidades[4];
    break;
    default:
    console.log("Tipo de conversão inválido.");
}
console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Jogo de pedra, papel e tesoura
// ------------------------------------------------------------
// a) Gere a jogada do computador aleatoriamente:
//    const jogada = ["pedra", "papel", "tesoura"];
//    const computador = jogada[Math.floor(Math.random() * 3)];
// b) Pergunte ao usuário sua jogada - questionInt():
//    1 – Pedra | 2 – Papel | 3 – Tesoura
//    Para opções inválidas, exiba "Jogada inválida." e encerre.
// c) Exiba as jogadas: "Você: <jogada> | Computador: <computador>"
// d) Determine o vencedor ou empate com switch/case aninhado ou combinando
//    switch com if/else
// e) Exiba o resultado final.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Sistema de suporte técnico
// ------------------------------------------------------------
// Um sistema de atendimento automatizado funciona por menus.
//
// Menu principal (questionInt()):
//   1 – Internet | 2 – TV | 3 – Telefone | 4 – Falar com atendente | 0 – Encerrar
//
// Se o usuário escolher 1 (Internet), exiba um sub-menu (questionInt()):
//   1 – Sem conexão
//   2 – Conexão lenta
//   3 – Wi-Fi não aparece
//
// Se o usuário escolher 2 (TV), exiba um sub-menu (questionInt()):
//   1 – Sem sinal
//   2 – Imagem ruim
//   3 – Canais sumidos
//
// Para cada sub-opção, exiba uma mensagem de orientação específica.
// Para as opções 3 (Telefone) e 4 (Falar com atendente), exiba "Por favor, aguarde na linha.".
// Para a opção 0, exiba "Atendimento encerrado."
// No default, exiba "Opção inválida."
//
// a) Implemente o fluxo acima usando switch/case no menu principal
//    e switch/case nos sub-menus, com if/else se necessário.
// b) Exiba todas as mensagens com template literal.

// → Seu código aqui:


console.log("_______________________________");