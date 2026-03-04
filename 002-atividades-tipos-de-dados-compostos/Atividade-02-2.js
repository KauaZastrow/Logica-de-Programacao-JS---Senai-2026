// ============================================================
//   ATIVIDADE 02 – Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:

//a)
const aluno = {
    nome: "Kauã",
    idade: 18,
    curso: "TI"
};
//b)
console.log(aluno.nome);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

// → Seu código aqui:

//a)
aluno.endereco = {
    cidade: "Jaraguá do Sul",
    rua: "Karsten"
};
//b)
console.log(aluno.endereco.rua);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:

//a)
aluno.habilidades = ["Foco", "Correr", "Jogar"]
//b)
console.log(aluno.habilidades[0]);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:

//a)
aluno.notas = [7, 6, 10, 9];
//b)
console.log(`Aluno: ${aluno.nome}\n Notas: ${aluno.notas}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:

//a)
aluno.responsavel = {
    nome: "Djeyson",
    parentesco: "Pai"
};
//b)
console.log(aluno.responsavel.nome);
//c)
aluno.responsavel.nome = "Guilherme";
console.log(aluno.responsavel.nome);

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" e adicione o objeto "aluno".
// b) Crie outros dois objetos com dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// d) Exiba o nome do segundo aluno da lista.

// → Seu código aqui:

//a)
let listaAlunos = [aluno];
//b)
const aluno1 = {
    nome: "Ana",
    idade: 27,
    curso: "Mecanica",
};
const aluno2 = {
    nome: "Renã",
    idade: 23,
    curso: "TI",
};
//c)
listaAlunos = [aluno, aluno1, aluno2];
//d)
console.log(listaAlunos[1].nome);

console.log("_______________________________");