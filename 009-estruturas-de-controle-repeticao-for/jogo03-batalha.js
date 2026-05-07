// ============================================================
//   JOGO: Batalha por Turnos
// ============================================================
//

let lerTeclado = require("readline-sync")

// Um herói enfrenta uma sequência de 3 inimigos em batalhas por turnos.
// A cada turno, herói e inimigo atacam um ao outro simultaneamente.
// O combate continua até que um dos dois chegue a 0 ou menos de HP (pontos de vida).
//
// REGRAS:
//   - O herói começa com 100 HP.
//   - Cada inimigo é um objeto com HP, dano mínimo e dano máximo definidos em um array de inimigos.
//   - A cada turno, o herói escolhe uma ação:
//       1 – Atacar → causa dano aleatório entre seu dano mínimo e máximo
//       2 – Defender → reduz em 75% o dano recebido neste turno (arredonde para baixo)
//       3 – Curar → recupera HP entre 10 e 20 (possível usar apenas 1 vez por batalha)
//   - O inimigo deve ter por turno:
//     70% de chance de atacar → causa dano aleatório entre seu dano mínimo e máximo
//     20% de chance de defender → reduz em 75% o dano recebido neste turno (arredonde para baixo)
//     10% de chance de curar  → recupera HP entre 10 e 20 (possível usar apenas 1 vez por batalha)
//   - O inimigo ataca sempre com dano aleatório entre seu dano mínimo e dano máximo.
//   - O ataque tanto do jogador quando do inimigo devem ser realizados simultaneamente.
//   - Há uma chance de 5% do ataque (de ambos) ser um golpe crítico, causando o dobro de dano.
//     Caso isso corra, exiba que foi um dado crítico.
//   - Se o herói vencer, recupera 25 HP (sem ultrapassar 100).
//   - Se o herói perder, o jogo termina.
//
// AO FINAL DE CADA BATALHA:
//   - Exiba o resultado e a vida atual do herói.
//   - Se o herói vencer as 3 batalhas, exiba o resultado final.
//
// Após o desenvolvimento das regras base acima descritas, 
//   sinta-se livre para implementar melhorias e adicionar novos recursos.
//   - Exemplos de mecânicas adicionais:
//      - 2 tipos de armas para o herói, uma possuindo maior dano, mas possui menor precisão e a outra o inverso.
//      - Inimigos gerados aleatoriamente com atributos variados, aumentando exponencialmente a dificuldade.
//      - Sistema de níveis para o herói, permitindo que ele ganhe experiência e aumente suas habilidades.
//      - Itens e equipamentos que podem ser encontrados ou comprados (derrotar inimigos concede ouro), oferecendo bônus e habilidades especiais.
//      - Eventos aleatórios que podem ocorrer durante as batalhas, como a intervenção de aliados ou armadilhas no campo de batalha.
//
// ============================================================

// ============================================================
// HERÓI (não altere a estrutura — altere os valores se quiser)
// ============================================================

const heroi = {
  nome: "", // Deve ser preenchido pelo jogador
  hpAtual: 100,
  hpMax: 100,
  danoMin: 15,
  danoMax: 25
};

// ============================================================
// INIMIGOS (não altere a estrutura — altere os valores se quiser)
// Remova o inimigo da lista se ele for derrotado
// ============================================================

const inimigos = [
  {
    nome: "Goblin",
    hp: 30,
    danoMin: 6,
    danoMax: 12
  },
  {
    nome: "Orc Guerreiro",
    hp: 50,
    danoMin: 10,
    danoMax: 18
  },
  {
    nome: "Dragão Negro",
    hp: 80,
    danoMin: 15,
    danoMax: 25
  }
];

// ============================================================
// INÍCIO DO JOGO
// ============================================================

console.log("╔═══════════════════════════╗");
console.log("║   BEM VINDO(A) AO %¨$$@   ║");
console.log("╚═══════════════════════════╝");

// Peça o nome do herói e exiba as regras do jogo resumidamente.
// → Seu código aqui:
while (true) {
  if (heroi.nome == "" || heroi.nome == null) {
    heroi.nome = lerTeclado.question("Digite seu nome: ")
    break
  } else {
    console.log("Felipe seu animal. Usa as letras!! e não o SPACE")
  }
}

console.log("_______________________________");

// ============================================================
// LOOP DE BATALHAS
// ============================================================

console.log("╔════════════════════════════╗");
console.log("║    VAMOS AS BATATALHAS!    ║");
console.log("╚════════════════════════════╝");

// → Seu código aqui:
console.log("╔════════════════════════════════════════════╗");
console.log("║    SEU OBJETIVO É A VITÓRIA E NADA MAIS!   ║");
console.log("║                POR ESPARTA!!!              ║");
console.log("╚════════════════════════════════════════════╝");
let acao = null
let acaoInim = null
let atacar = null //Math.floor(Math.random() * (heroi.danoMax - heroi.danoMin) + heroi.danoMin)
let atacarInimi = null //Math.floor(Math.random() * (heroi.danoMax - heroi.danoMin) + heroi.danoMin)
let defender = 0.25
let curar = null//Math.floor(Math.random() * 10 + 10)
let curaInimi = null//Math.floor(Math.random() * 10 + 10)

console.log("_______________________________");

// ============================================================
// RESULTADO FINAL
// ============================================================
//
// PASSO 5 – Após o for de batalhas:
//
//   a) Se heroi.hp > 0 (venceu todas as batalhas):
//        Exiba:
//        "══════════════════════════════"
//        "VOCÊ VENCEU O JOGO!"
//        "<heroi.nome> sobreviveu a todas as batalhas!"
//        "HP final: <heroi.hp>/<heroi.hpMax>"
//        "══════════════════════════════"
//
//   b) Se heroi.hp <= 0 (foi derrotado):
//        Exiba:
//        "══════════════════════════════"
//        "GAME OVER"
//        "<heroi.nome> caiu em batalha contra o <nome do inimigo>"
//        "══════════════════════════════"

// → Seu código aqui:

while (inimigos.length > 0) {
  if (inimigos[0].hp <= 0) {
    inimigos.shift()
    if (inimigos.length === 0) {
      console.log(`\n══════════════════════════════════════════════\nVOCÊ VENCEU O JOGO!\n${heroi.nome} sobreviveu a todas as batalhas!\nHP final: ${heroi.hp}/${heroi.hpMax}\n══════════════════════════════════════════════`)
      if (heroi.nome == "mario") {
        console.log(`
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⡀⣀⣀⣀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣶⣿⣶⣷⣿⡷⢓⣡⣬⣤⣭⣘⡚⢿⣿⣶⣦⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⢟⣡⣾⠿⠛⢿⣿⠛⠻⣿⣷⣌⢻⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⡿⢣⣾⣿⠏⠀⠄⠀⠃⠀⢀⠘⢿⣿⣷⡹⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⠃⣿⣿⠋⢀⠀⣿⣄⣀⣾⡄⠠⠈⢻⣿⡗⣹⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡁⢿⣇⣀⠀⣼⣿⣿⣿⣿⣷⠀⣁⣠⣽⢇⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣭⣭⣭⣽⣬⣭⣭⣭⣭⣭⣭⣭⣫⣾⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⠿⠟⢛⣉⣥⡄⢀⣠⡄⣀⢑⣿⣷⣿⣶⡗⠀⢠⣀⡀⠢⣍⣛⠿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⠟⣡⡴⣶⣻⢯⣟⡾⡽⢋⣤⣶⠦⠈⢿⣿⣿⣿⠟⠪⣶⣭⡹⣿⣿⣿⣿⣶⡌⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⡏⣰⣯⡽⢾⣽⣻⢾⡝⢡⣿⣿⠃⠀⠀⠈⢿⣿⠁⠀⠀⠌⢿⣷⡘⣿⣿⣿⣿⣷⠸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠁⠙⣾⣱⢾⡽⣿⣞⠇⣾⣿⣟⠀⠀⢀⡀⣾⡯⠀⣀⠀⠀⢸⣿⡇⢻⣿⣿⣿⣿⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡴⣦⠀⠀⣷⣹⢾⣽⣿⢿⣇⢹⣿⣷⠀⠀⠈⠀⣿⣧⠀⠉⠀⠀⣾⣿⠇⣿⣿⣿⣿⡿⢸⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣳⢻⢧⠀⠀⣳⣞⣿⠼⣿⣿⣿⣦⠻⣿⠧⢀⣠⣼⣿⣿⣷⣦⣄⡰⠿⠟⣼⣿⣿⣿⣿⡇⢸⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢫⣯⢟⣦⠀⣵⣻⢾⠁⢸⣿⣻⢿⣗⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣿⣿⣿⠏⢻⣇⣼⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢮⣟⢮⣟⡷⣯⠁⠀⠀⠛⠽⣻⣞⣳⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⠀⠈⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢯⣞⡽⣶⠀⠀⠀⠀⠀⠀⢼⣳⣟⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢀⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠽⣳⢦⠀⠀⠀⠀⠀⠸⣳⢾⣽⣾⣻⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⢀⣼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢟⣦⣀⢀⡀⠀⠀⠋⠿⣞⣷⣻⢿⣻⣿⢿⣿⣿⠿⠋⠀⢀⣠⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡀⠀⠈⠋⢿⣵⣲⣴⣲⠾⣝⡶⣽⢫⣟⣾⢻⣟⡥⣤⡾⠟⣋⣴⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣶⣿⣿⣿⣧⣾⠃⠀⠙⠒⠷⠫⠟⡾⣝⡾⣝⡾⡼⠛⠾⠝⠃⠁⣾⣿⣿⣿⣿⣿⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⠀⠐⠠⠀⠄⢠⣷⣶⣦⣭⣥⣶⣶⡄⠀⠠⠐⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⡈⠄⠡⠀⢸⣿⣿⣿⣿⣿⣿⣿⣧⠀⠁⠄⠡⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣠⣦⣭⣭⣛⣛⣛⠿⠿⣿⣿⣿⣿⡟⠀⠠⠐⢀⠂⠁⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠈⠐⡀⠂⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠙⣿⡿⠁⠀⣁⣤⣤⣄⠀⠛⠛⠛⠛⠛⠛⠛⠛⠛⠃⠀⣡⣤⣌⠀⠘⠅⠉⠙⠿⣛⣭⣭⣶⣶⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠋⠀⠀⢰⣿⣿⣿⣿⣧⠀⠠⠀⠄⠠⠀⠄⠠⠀⠄⣼⣿⣿⣿⣷⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀
⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠫⠀⠀⠠⠁⠐⣝⠻⠿⠟⠋⠀⠄⠡⠈⡀⠡⠈⡀⠡⠀⢨⡻⠿⠿⡛⠀⠀⠀⠠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆
⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠂⡁⠄⠈⠉⠉⠁⠠⢈⠀⠂⡁⠄⠂⢁⠀⢂⠁⡀⠉⠓⠉⠀⡀⠀⠀⠀⠈⢙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠠⢁⠀⠂⢁⠂⠁⠌⠐⡀⢈⠐⢀⠐⠈⡀⠌⢀⠐⢀⠂⡐⠈⠠⠐⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠐⡀⠌⠐⠠⢀⠁⢂⠐⢀⠂⢈⠠⠀⠡⢀⠂⠄⡈⠠⢀⠐⠈⡐⠠⠁⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
⠀⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠀⠠⠐⢈⠠⠀⠌⢀⠐⠠⠐⡀⠄⠁⠂⠄⡐⠠⠀⡁⠄⠂⢁⠠⠐⡀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀
⠀⠀⠀⠀⠈⠉⠉⠛⠛⠛⠛⠛⠉⠉⠀⠀⢀⠐⡀⠡⢀⠐⠈⡀⠂⠈⠄⠂⠠⢀⠡⠈⡀⠄⠠⠁⠠⠐⢈⠀⡐⠠⠐⠀⠀⠀⠉⠛⠿⢿⣿⣿⣿⣿⣿⡿⠿⠟⠛⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠂⠄⠐⡀⠂⢈⠐⠀⠡⢈⠠⠈⠐⠀⠄⠂⠄⠂⠁⠌⠐⡀⠂⡐⢀⠐⠈⠄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠌⢀⠐⡀⠡⠐⢈⠀⠂⠄⡈⠀⠀⠀⠀⠀⠀⠠⠐⠠⠐⢀⠁⠂⢁⠈⡐⠠⢀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⢈⠠⢀⠐⠠⢈⠀⠄⡁⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠡⠐⡀⠌⠐⡀⠂⠄⡐⠀⠌⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠂⢀⠂⠠⠁⠠⢈⠀⡐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡐⠠⢀⠂⠐⡀⢂⠐⠀⠌⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⢈⠀⠄⡁⠌⠐⡀⠐⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠐⠠⠀⠂⡁⠠⢀⠂⠡⢀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⡀⠌⠀⠄⡐⠠⢀⠁⠄⡀⠀⠀⠀⠀⠀⠀⢀⠀⠂⠄⢁⠂⠁⠄⠂⠄⡐⠀⢂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣶⣤⣤⣀⠁⠂⠠⠐⡀⠈⠄⠀⠀⠀⠀⠀⠀⠀⣿⣷⣦⡈⠀⠄⡁⠂⠌⠀⣀⣤⣶⣾⣷⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣷⣦⣅⡀⠄⢁⣴⣇⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣷⣄⡀⣂⣴⣾⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠈⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠛⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⠋⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`)
      }
    }
    continue
  } else if (heroi.hpAtual <= 0) {
    console.log(`\n════════════════════════════════════════════\nGAME OVER\ncaiu em batalha contra o ${inimigos[0].nome}\n════════════════════════════════════════════`)
    break
  }
  console.log(`\nInimigo: ${inimigos[0].nome}.\nHp: ${inimigos[0].hp}.\n\nNome do Heroi: ${heroi.nome}\nHp: ${heroi.hpAtual}`)
  console.log(`\nEscolha sua ação:\n1 - atacar | 2 - defender-se | 3 - curar-se\n`)
  acao = lerTeclado.questionInt("Digite aqui: ")
  acaoInim = Math.floor(Math.random() * 9 + 1)
  atacar = Math.floor(Math.random() * (heroi.danoMax - heroi.danoMin) + heroi.danoMin)
  atacarInimi = Math.floor(Math.random() * (inimigos[0].danoMax - inimigos[0].danoMin) + inimigos[0].danoMin)
  curar = Math.floor(Math.random() * 10 + 10)
  curaInimi = Math.floor(Math.random() * 10 + 10)
atacar = 1000000
  if (acaoInim < 1) {
    console.log(`\n${inimigos[0].nome} esta se curando`)
    if (acao === 1) inimigos[0].hp -= atacar
    else if (acao === 3) heroi.hpAtual += curar
    inimigos[0].hp += curaInimi
    continue
  } else if (acaoInim < 2) {
    console.log(`\n${inimigos[0].nome} esta se defendendo`)
    if (acao === 1) {
      atacar *= defender
      inimigos[0].hp -= atacar
    } else if (acao === 3) heroi.hpAtual += curar
    continue
  } else {
    console.log(`\n${inimigos[0].nome} esta atacando com ${atacarInimi} de dano`)
    if (acao === 1) inimigos[0].hp -= atacar
    else if (acao === 2) atacarInimi *= defender
    else if (acao === 3) heroi.hpAtual += curar
    heroi.hpAtual -= atacarInimi
  }
}