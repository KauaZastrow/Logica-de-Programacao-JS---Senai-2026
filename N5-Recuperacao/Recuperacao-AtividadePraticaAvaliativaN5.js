let lerTeclado = require("readline-sync");

// ============================================================
//   RECUPERAÇÃO – ATIVIDADE AVALIATIVA N5
//   Módulos: Operadores e Estruturas Condicionais (if/else, switch/case)
// ============================================================
//
//  Instruções Gerais:
//  • NÃO utilize funções (function) nem laços de repetição (for, while, do/while).
//  • Utilize readline-sync para entrada de dados.
//  • O código deve ser elaborado individualmente (códigos identicos serão considerados plágio - nota 0).
//
// ============================================================


// ------------------------------------------------------------
// QUESTÃO ÚNICA (peso: 10) – Triagem Hospitalar
// ------------------------------------------------------------
//
// Crie um sistema de triagem de pronto-socorro que colete dados
// do paciente e determine o nível de urgência.
//
// Sempre que o usuário digitar um valor inválido, exiba uma mensagem de erro e encerre o programa.
//
// ─────────────────────────────────────────────────────────────
// PASSO A – Coleta de dados
// ─────────────────────────────────────────────────────────────
//
// Colete via terminal:
//   • "nomePaciente"  → nome
//   • "nivelDor"      → nível de dor de 1 a 10
//   • "temperatura"   → temperatura corporal em °C
//
// Exiba: "Paciente <nomePaciente> registrado. Iniciando triagem."
//
// ─────────────────────────────────────────────────────────────
// PASSO B – Categoria do sintoma (switch/case)
// ─────────────────────────────────────────────────────────────
//
// Exiba o menu e colete "categoria":
//
//   Qual é a categoria do sintoma principal?
//   1) Cardiorrespiratório
//   2) Infeccioso / Febril
//   3) Trauma / Lesão
//
// Use switch/case para exibir a categoria escolhida:
//   1 → "Categoria: Cardiorrespiratório"
//   2 → "Categoria: Infeccioso / Febril"
//   3 → "Categoria: Trauma / Lesão"
//
// ─────────────────────────────────────────────────────────────
// PASSO C – Nível de urgência (if/else if/else)
// ─────────────────────────────────────────────────────────────
//
// Com base na combinação de "categoria", "nivelDor" e "temperatura",
// determine o nível de urgência usando if/else:
//
//   categoria igual a 1 (Cardiorrespiratório):
//     nivelDor maior ou igual a 7 OU temperatura maior ou igual a 38.5 → urgencia = "A"
//     senão → urgencia = "B"
//
//   categoria igual a 2 (Infeccioso):
//     temperatura maior ou igual a 39.0 OU nivelDor maior ou igual a 7 → urgencia = "B"
//     senão → urgencia = "D"
//
//   categoria igual a 3 (Trauma):
//     nivelDor maior ou igual a 7 → urgencia = "A"
//     nivelDor maior ou igual a 5 → urgencia = "C"
//     senão → urgencia = "E"
//
// ─────────────────────────────────────────────────────────────
// PASSO D – Exibição do resultado
// ─────────────────────────────────────────────────────────────
//
// Exiba com console.log() e template literal:
//
//   =========================================
//   Paciente    : <nomePaciente>
//   Nível de dor: <nivelDor> de 10
//   Temperatura : <temperatura>°C
//   Resultado   : <descrição do nível>
//   =========================================
//
// Use switch/case para traduzir "urgencia" na descrição:
//   "A"  →  "EMERGÊNCIA — Atendimento imediato"
//   "B"  →  "URGÊNCIA ALTA — Será chamado em breve"
//   "C"  →  "URGÊNCIA MODERADA — Aguarde na sala de espera"
//   "D"  →  "CONSULTA NORMAL — Agende pelo sistema"
//   "E"  →  "BAIXA PRIORIDADE — Procure uma UBS"

// → Seu código aqui:
let urgencia = null;
const nomePaciente = lerTeclado.question("digite seu nome: ");
if (nomePaciente == "") {
    console.log("este nome não existe. refaça")
    process.exit();
}
const nivelDor = lerTeclado.questionInt("digite seu nivel de dor (de 1 a 10): ");
if (nivelDor > 11 || nivelDor < 1) {
    console.log("esta opção não existe. refaça")
    process.exit();
}
const temperatura = lerTeclado.questionFloat("digite sua temperatura: ");
if (temperatura >= 46 || temperatura < 38) {
    console.log(`
    voce digitou um numero incorreto.
    Tente novamente, por favor`)
    process.exit();
}
console.log(`Paciente ${nomePaciente} registrado. Iniciando triagem.`);
let categoria = lerTeclado.questionInt(`
Qual é a categoria do sintoma principal ?
1) Cardiorrespiratório 
2) Infeccioso / Febril 
3) Trauma / Lesão
: `)
if (categoria < 1 || categoria > 3) {
    console.log("esta opção não existe. refaça")
    process.exit();
}
switch (categoria) {
    case 1:
        console.log("Categoria: Cardiorrespiratório")
        break
    case 2:
        console.log("Categoria: Infeccioso / Febril")
        break
    case 3:
        console.log("Categoria: Trauma / Lesão")
        break
}
if (categoria === 1 && (nivelDor >= 7 || temperatura >= 38.5)) {
    urgencia = "A"
} else {
    urgencia = "B"
}
if (categoria === 2 && (nivelDor >= 7 || temperatura >= 39)) {
    urgencia = "B"
} else {
    urgencia = "D"
} if (categoria === 3 && nivelDor >= 7) {
    urgencia = "A"
} else if (nivelDor >= 5) {
    urgencia = "C"
} else {
    urgencia = "E"
}
switch (urgencia) {
    case "A":
        urgencia = "EMERGÊNCIA — Atendimento imediato"
        break
    case "B":
        urgencia = "URGÊNCIA ALTA — Será chamado em breve"
        break
    case "C":
        urgencia = "URGÊNCIA MODERADA — Aguarde na sala de espera"
        break
    case "D":
        urgencia = "CONSULTA NORMAL — Agende pelo sistema"
        break
    case "E":
        urgencia = "BAIXA PRIORIDADE — Procure uma UBS"
        break
}
console.log(`
=========================================
Paciente    : ${nomePaciente}
Nível de dor: ${nivelDor} de 10
Temperatura : ${temperatura}°C
Resultado   : ${urgencia}
=========================================
`)