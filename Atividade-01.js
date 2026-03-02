// ============================================================
//   ATIVIDADE 01 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Declaração de variáveis
// ------------------------------------------------------------
// a) Declare uma variável com "var" chamada "meuNome" e atribua o seu nome.
// b) Declare uma variável com "var" chamada "naoUsarVar" e no valor, atribua a explicação de porque não é recomendado utilizar 'var'.
// c) Declare uma variável com "let" chamada "minhaIdade" e atribua a sua idade.
// d) Declare uma variável com "const" chamada "ANO_NASCIMENTO" e atribua o ano em que você nasceu.
// e) Exiba as quatro variáveis no console.

// → Seu código aqui:

// a)
var meuNome = "Kauã";
// b)
var naoUsarVar = "Pois é uma forma mais antiga de se declarar variavel no JS";
// c)
let minhaIdade = 18;
// d)
const ANO_NASCIMENTO = 2008;
// e)
console.log(`Meu nome é: ${meuNome}\n Minha idade é: ${minhaIdade}\n Nasci no ano: ${ANO_NASCIMENTO}\n Não usar var, pois: ${naoUsarVar}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Strings e template literals
// ------------------------------------------------------------
// a) Declare uma variável "cidade" com o nome da cidade onde você mora.
// b) Declare uma variável "pais" com o nome do seu país.
// c) Usando um template literal, crie a frase:
//    "Eu moro em <cidade>, no <pais>." e armazene em "fraseMoradia".
// d) Exiba "fraseMoradia" e seu tipo (typeof) no console.

// → Seu código aqui:

// a)
const cidade = "Corupá";
// b)
const pais = "Brasil";
// c)
let fraseMoradia = (`Eu moro em ${cidade}, no ${pais}.`);
// d)
console.log(fraseMoradia, typeof fraseMoradia);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Boolean
// ------------------------------------------------------------
// a) Declare "maiorDeIdade" como true se você tem 18 anos ou mais, false caso contrário.
// b) Declare "temCNH" com um valor booleano que represente se você tem carteira de motorista.
// c) Exiba as duas variáveis e seus tipos (typeof).

// → Seu código aqui:

// a)
let maiorDeIdade = true;
// b)
let temCNH = false;
// c)
console.log(maiorDeIdade, typeof maiorDeIdade, temCNH, typeof temCNH);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Undefined e Null
// ------------------------------------------------------------
// a) Declare uma variável "apelido" sem atribuir nenhum valor.
// b) Declare uma variável "enderecoAtual" e atribua null intencionalmente.
// c) Exiba as duas variáveis e seus respectivos tipos (typeof).
// d) Explique (em um comentário) por que typeof null retorna "object".

// → Seu código aqui:

// a)
let apelido;
// b)
let enderecoAtual = null;
// c)
console.log(apelido, typeof apelido, enderecoAtual, typeof enderecoAtual)
// d)
// "object" - regra do JS para o null

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Identificando tipos (typeof)
// ------------------------------------------------------------
// Para cada valor abaixo, use typeof e exiba o resultado no console.
// Tente adivinhar o resultado ANTES de executar!

// 42
// "texto"
// true
// undefined
// null
// 3.14

let numero = 42;// number
let palavra = "texto"; // string
let estouEstudando = true;// boolean
let hoje;// undefined
let senha = null;// object
let PI = 3.14;// number

console.log(typeof numero, typeof palavra, typeof estouEstudando, typeof hoje, typeof senha, typeof PI);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – DESAFIO: Mini perfil
// ------------------------------------------------------------
// Usando tudo que aprendeu, crie variáveis para armazenar:
//   • nome, idade, altura (número decimal), cidade, estudandoJS (boolean)
// Em seguida, exiba no console uma mensagem completa usando template literal:
//   "Olá! Meu nome é <nome>, tenho <idade> anos, moro em <cidade>,
//    meço <altura>m e estou estudando JavaScript: <estudandoJS>."

// → Seu código aqui:

const nome = "Kauã";
let idade = 18; 
let altura = 1.80;
const xCidade = "Jaraguá";
let estudandoJS = true;

console.log(`Olá! Meu nome é ${nome},
    tenho ${idade} anos,
    moro em ${xCidade},
    meço ${altura}m e estou estudando JavaScript: ${estudandoJS}.`);

console.log("_______________________________");
