
// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:

const meuNome = "Kauã";
let idade = 18;
let hobbyFavorito = "Jogar";
console.log(`Meu nome é ${meuNome}\n tenho ${idade} anos\n meu hobby é ${hobbyFavorito}.`);

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:

const cidade = "Jaraguá do Sul";
let temperaturaAtual = 28;

console.log(`Hoje em ${cidade} esta fazendo ${temperaturaAtual}°C, perfeito para para quem quer ficar em casa e assistir um filme.`);

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui:

let pais = "Brasil";
let id = 6143;
let estaVentando = true;
let seuPais;
let minhaIdade = null;

console.log(`Eu moro no ${pais}, desde que nasci. ${typeof pais}`);
console.log(`Seu ID de acesso é ${id}. ${typeof id}`);
console.log(`Hoje esta ventando: ${estaVentando}. ${typeof estaVentando}`)
console.log(`Você mora em: ${seuPais}. ${typeof seuPais}`)
console.log(`Eu tenho ${minhaIdade} anos. ${typeof minhaIdade}`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:

 let nomePersonagem = "Alex";
 idade = 240;
 const cidadeOrigem = "SkullLand";
 const missao = " Recuperar sua costela roubada";

 console.log(`${nomePersonagem} a caveira, é um ser amaldiçoado, de ${idade} anos.
  Sua maldição implica em mantelo preso na cidade ${cidadeOrigem}, até que ele complete sua missão
  de ${missao}.`);

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – De:safio Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:

let nome = "Kauã";
const objetivo = "criar um aplicativo monetizado";

console.log(`Meu nome é ${nome},tenho o objetivo de ${objetivo} e sei que o esforço vence o talento.`);

console.log("_______________________________");