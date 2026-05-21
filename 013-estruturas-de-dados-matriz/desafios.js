// ============================================================
//   DESAFIOS – Matriz
// ============================================================
let lerTeclado = require("readline-sync")
// ------------------------------------------------------------
// DESAFIO 1 – Jogo da velha simplificado
// ------------------------------------------------------------
// a) Declare um tabuleiro 3x3 vazio (preencha os espaços vazios com "-") e exiba-o.
// b) Faça 5 jogadas alternando entre "X" e "O":
//    - Peça a linha e a coluna.
//    - Se a posição já estiver ocupada, exiba aviso e peça novamente.
//    - Após cada jogada, exiba o tabuleiro com console.table().
// c) Não precisa verificar vencedor — apenas alternar X e O.

// → Seu código aqui:
let jogoVelha = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"]
]
let i = 0
let vitoria = false
while (true) {
  let linha = lerTeclado.questionInt("linha: ") - 1
  let coluna = lerTeclado.questionInt("coluna: ") - 1
  if ((linha < 0 || coluna < 0) || (linha > 2 || coluna > 2)) {
    continue
  } else if (jogoVelha[linha][coluna] == "x" || jogoVelha[linha][coluna] == "o") {
    continue
  }
  if (i % 2 === 0) {
    jogoVelha[linha][coluna] = "O"
  } else {
    jogoVelha[linha][coluna] = "X"
  }
  i++
  console.table(jogoVelha)
  if ((jogoVelha[0][0] == "x" && jogoVelha[0][1] == "x" && jogoVelha[0][2] == "x") || (jogoVelha[0][0] == "o" && jogoVelha[0][1] == "o" && jogoVelha[0][2] == "o")) { vitoria = true }
  if ((jogoVelha[1][0] == "x" && jogoVelha[1][1] == "x" && jogoVelha[1][2] == "x") || (jogoVelha[1][0] == "o" && jogoVelha[1][1] == "o" && jogoVelha[1][2] == "o")) { vitoria = true }
  if ((jogoVelha[2][0] == "x" && jogoVelha[2][1] == "x" && jogoVelha[2][2] == "x") || (jogoVelha[2][0] == "o" && jogoVelha[2][1] == "o" && jogoVelha[2][2] == "o")) { vitoria = true }
  /////
  if ((jogoVelha[0][0] == "x" && jogoVelha[1][0] == "x" && jogoVelha[2][0] == "x") || (jogoVelha[0][0] == "o" && jogoVelha[1][0] == "o" && jogoVelha[2][0] == "o")) { vitoria = true }
  if ((jogoVelha[0][1] == "x" && jogoVelha[1][1] == "x" && jogoVelha[2][2] == "x") || (jogoVelha[0][1] == "o" && jogoVelha[1][1] == "o" && jogoVelha[2][2] == "o")) { vitoria = true }
  if ((jogoVelha[0][2] == "x" && jogoVelha[1][2] == "x" && jogoVelha[2][2] == "x") || (jogoVelha[0][2] == "o" && jogoVelha[1][2] == "o" && jogoVelha[2][2] == "o")) { vitoria = true }
  /////
  if ((jogoVelha[0][0] == "x" && jogoVelha[1][1] == "x" && jogoVelha[2][2] == "x") || (jogoVelha[0][0] == "o" && jogoVelha[1][1] == "o" && jogoVelha[2][2] == "o")) { vitoria = true }
  if ((jogoVelha[2][2] == "x" && jogoVelha[1][1] == "x" && jogoVelha[0][0] == "x") || (jogoVelha[2][2] == "o" && jogoVelha[1][1] == "o" && jogoVelha[0][0] == "o")) { vitoria = true }
  if (vitoria === true) {
    console.log(`${jogoVelha[linha][coluna]} Wins`)
    break
  } else if (i === 9) {
    console.log(`Velha`)
    break
  }
}
console.log(`${jogoVelha[linha][coluna]} Wins`)

console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 2 – Batalha naval simplificada
// ------------------------------------------------------------
// a) Crie um tabuleiro 5x5 (matriz de objetos):
//    cada célula = { temNavio: false, atingida: false }
// b) Posicione 5 navios em coordenadas aleatórias utilizando Math.random()
//    Garanta que não haja repetição de posição.
// c) Usando while, peça ao usuário tiros (linha e coluna).
//    - Se acertar:  exiba "Acertou!" (e marque atingida = true).
//    - Se errar:    exiba "Água..."
//    - Não permita atirar 2x na mesma posição.
// d) Após cada tiro, mostre o "mapa":
//    "~" = água, "O" = navio não atingido, "X" = navio atingido.
// e) Pare quando todos os 5 navios forem atingidos.
// f) Exiba o número total de tiros usados.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Boletim escolar com console.table
// ------------------------------------------------------------
// a) Utilizando:
const turma = [
  { nome: "Ana", notas: [8.0, 7.5, 9.0, 6.5] },
  { nome: "Bruno", notas: [4.0, 5.5, 6.0, 5.0] },
  { nome: "Carla", notas: [9.5, 9.0, 9.5, 10] },
  { nome: "Diego", notas: [7.0, 6.5, 7.0, 8.5] },
  { nome: "Eva", notas: [3.5, 4.0, 5.0, 4.5] },
];
// b) Construa um vetor 'boletim' onde cada item seja:
//    { nome, b1, b2, b3, b4, media, situacao }
//    - situacao: "Aprovado" (>=7), "Recuperação" (>=5 e <7), "Reprovado" (<5)
// c) Exiba o boletim com console.table().
// d) Exiba também:
//    - Aluno(a) com a maior média.
//    - Aluno(a) com a menor média.
//    - Média geral da turma.
//    - Quantidade de aprovados, recuperação e reprovados.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Cinema com sessões
// ------------------------------------------------------------
// Sistema simplificado de reserva para 3 SESSÕES diferentes,
// cada uma com sua matriz própria de poltronas (4 fileiras x 6 poltronas).
//
// a) Crie uma estrutura:
//    sessoes = [
//      { filme: "Ação X",   sala: matriz4x6 com "L" },
//      { filme: "Drama Y",  sala: matriz4x6 com "L" },
//      { filme: "Comédia Z", sala: matriz4x6 com "L" },
//    ]
// b) Usando do...while, exiba o menu:
//    1 – Listar sessões e ocupação (% ocupada de cada uma)
//    2 – Mostrar mapa de uma sessão (peça o índice 0..2)
//    3 – Reservar poltrona (peça sessão, fileira e poltrona)
//    4 – Cancelar reserva  (peça sessão, fileira e poltrona)
//    0 – Sair
// c) Valide TODOS os inputs e nunca quebre o programa.

// → Seu código aqui:


console.log("_______________________________");