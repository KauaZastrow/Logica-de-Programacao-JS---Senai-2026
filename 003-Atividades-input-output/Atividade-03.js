// ============================================================
//   ATIVIDADE 03 – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================

let lerTeclado = require("readline-sync");

// ------------------------------------------------------------
// EXERCÍCIO 1 – Explorando os métodos do console
// ------------------------------------------------------------
// a) Use console.log() para exibir a mensagem: "Iniciando o programa..."
// b) Use console.info() para exibir uma mensagem informando sobre o que é a atividade atual.
// c) Use console.warn() para exibir um aviso de que o usuário sempre precisa iniciar o programa com node e o nome do arquivo.
// d) Use console.error() para exibir uma mensagem de erro aleatória de sua escolha.

// → Seu código aqui:

//a)
console.log("Iniciando o programa...");
//b)
console.info("Atividade sobre input e output");
//c)
console.warn("Sempre inicie o programa com node + o nome do arquivo");
//d)
console.error("Teclado desconectado");

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Saudação personalizada
// ------------------------------------------------------------
// a) Peça ao usuário que digite seu nome usando question().
// b) Peça ao usuário que digite sua idade usando questionInt().
// c) Exiba no console uma saudação usando template literal, no formato:
//    "Olá, <nome>! Você tem <idade> anos."

// → Seu código aqui:

/*
//a)
const nomeUsuario = lerTeclado.question("Digite seu nome: ");
//b)
const idadeUsuario = lerTeclado.questionInt("Digite sua idade: ");
//c)
console.log(`Olá, ${nomeUsuario}! Você tem ${idadeUsuario} anos`);

console.log("_______________________________");
*/



// ------------------------------------------------------------
// EXERCÍCIO 3 – Ficha pessoal
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados: nome, idade e cidade.
// b) Crie um objeto chamado "ficha" com as propriedades: nome, idade e cidade.
// c) Exiba o objeto com console.table().

// → Seu código aqui:

/*

//a)
const nomeUsuario = lerTeclado.question("Me diga seu nome: ");
const idadeUsuario = lerTeclado.questionInt("Me diga sua idade: ");
const cidadeUsuario = lerTeclado.question("Me diga sua cidade: ");
//b)
const ficha = {
    nome : nomeUsuario,
    idade : idadeUsuario,
    cidade : cidadeUsuario
}
//c)
console.table(ficha);
*/


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.

// → Seu código aqui:


/*

//a)
let jogar = lerTeclado.keyInYN("Você gosta de jogar?");
let programar = lerTeclado.keyInYN("Você gosta de estudar Programação?");
//b)
let gostaJogar = jogar;
let gostaProgramar = programar;
//c)
console.log(`${gostaJogar ? "Gosta" : "Não gosta"} de jogar!`);
console.log(`${gostaProgramar ? "Gosta" : "Não gosta"} de programar!`);

*/

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().

// → Seu código aqui:

/*
//a)
let comida1 = lerTeclado.question("Me informe uma de suas comidas favoritas: ")
let comida2 = lerTeclado.question("Me informe mais uma de suas comidas favoritas: ")
let comida3 = lerTeclado.question("Me informe apeans mais uma de suas comidas favoritas: ")
//b)
let comidasFavoritas = [
    comida1, 
    comida2, 
    comida3
];
//c)
console.table(comidasFavoritas);
*/


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Apresentação completa
// ------------------------------------------------------------
// a) Peça ao usuário: nome, profissão e cidade.
// b) Armazene estes dados em um objeto 'cadastroPessoal'
// c) Exiba no console uma frase completa com os dados, usando template literal:
//    "Me chamo <nome>. Profissão: <profissão> e moro na cidade de: <cidade>."
// d) Exiba a mesma informação com console.table().

// → Seu código aqui:

/*
//a)
let nomeUsuario = lerTeclado.question("Me informe seu nome: ");
let profissaoUsuario = lerTeclado.question("Me informe sua profissão: ");
let cidadeUsuario = lerTeclado.question("Me informe a cidade onde mora: ");
//b)
let cadastroPessoal = {
    nome : nomeUsuario,
    profissao : profissaoUsuario,
    cidade : cidadeUsuario
}
//c)
console.log(`Me chamo ${cadastroPessoal.nome}. Meu trablho é ${cadastroPessoal.profissao} e moro em ${cadastroPessoal.cidade}.`);
//d)
console.table(cadastroPessoal);
*/

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Lista de objetos
// ------------------------------------------------------------
// a) Através do terminal, capture o dado de 3 usuários fictícios, cada um com as seguintes propriedades:
//    nome(string), idade(number) e endereço(objeto).
//    objeto endereço deve conter as propriedades: cidade(string), rua(string) e numero(number)
// b) Armazene cada usuário em um objeto.
// c) Armazene os objetos em um array 'listaDeUsuarios'
// d) Exiba o array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:

/*
//a)
let nomeUsuario1 = lerTeclado.question("Digite seu nome: ");
let idadeUsuario1 = lerTeclado.questionInt("Digite sua idade: ");
let enderecoUsuario1 = {
    cidade : lerTeclado.question("Qual sua cidade: "),
    rua : lerTeclado.question("Qual sua rua: "),
    numero : lerTeclado.questionInt("Qual o número: ")
}

let nomeUsuario2 = lerTeclado.question("Digite seu nome: ");
let idadeUsuario2 = lerTeclado.questionInt("Digite sua idade: ");
let enderecoUsuario2 = {
    cidade : lerTeclado.question("Qual sua cidade: "),
    rua : lerTeclado.question("Qual sua rua: "),
    numero : lerTeclado.questionInt("Qual o número: ")
}

let nomeUsuario3 = lerTeclado.question("Digite seu nome: ");
let idadeUsuario3 = lerTeclado.questionInt("Digite sua idade: ");
let enderecoUsuario3 = {
    cidade : lerTeclado.question("Qual sua cidade: "),
    rua : lerTeclado.question("Qual sua rua: "),
    numero : lerTeclado.questionInt("Qual o número: ")
}
//b)
let usuario1 = {
    nome: nomeUsuario1,
    idade: idadeUsuario1,
    endereco: enderecoUsuario1
}
let usuario2 = {
    nome: nomeUsuario2,
    idade: idadeUsuario2,
    endereco: enderecoUsuario2
}
let usuario3 = {
    nome: nomeUsuario3,
    idade: idadeUsuario3,
    endereço: enderecoUsuario3
}
//c)
let listaUsuarios = [usuario1, usuario2, usuario3]
//d)
console.table(listaUsuarios);
//e)
console.log(nomeUsuario2, idadeUsuario2);
//f)
console.log(enderecoUsuario3);
//g)
console.log(nomeUsuario1, enderecoUsuario1.rua);
*/

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Exiba o array 'turma' com console.table().
// e) Exiba o nome e a 1ª nota do 2º aluno.
// f) Exiba o nome e a 2ª nota do 3º aluno.
// g) Exiba o nome e a 3ª nota do 1º aluno.

// → Seu código aqui:

//a)
let nomeAluno1 = lerTeclado.question("Digite seu nome: ");
let nota1Aluno1 = lerTeclado.questionInt("Digite sua primeira nota: ");
let nota2Aluno1 = lerTeclado.questionInt("Digite sua segunda nota: ");
let nota3Aluno1 = lerTeclado.questionInt("Digite sua terceira nota: ");

let nomeAluno2 = lerTeclado.question("Digite seu nome: ");
let nota1Aluno2 = lerTeclado.questionInt("Digite sua primeira nota: ");
let nota2Aluno2 = lerTeclado.questionInt("Digite sua segunda nota: ");
let nota3Aluno2 = lerTeclado.questionInt("Digite sua terceira nota: ");

let nomeAluno3 = lerTeclado.question("Digite seu nome: ");
let nota1Aluno3 = lerTeclado.questionInt("Digite sua primeira nota: ");
let nota2Aluno3 = lerTeclado.questionInt("Digite sua segunda nota: ");
let nota3Aluno3 = lerTeclado.questionInt("Digite sua terceira nota: ");
//b)
let aluno1 = {
    nome: nomeAluno1,
    notas : {
        nota1: nota1Aluno1,
        nota2: nota2Aluno1,
        nota3: nota3Aluno1
    }
}

let aluno2 = {
    nome: nomeAluno2,
    notas : {
        nota1: nota1Aluno2,
        nota2: nota2Aluno2,
        nota3: nota3Aluno2
    }
}

let aluno3 = {
    nome: nomeAluno3,
    notas : {
        nota1: nota1Aluno3,
        nota2: nota2Aluno3,
        nota3: nota3Aluno3
    }
}
//c)
let turma = [
    aluno1,
    aluno2,
    aluno3
]
//d)
console.table(turma);
//e)

//f)

//g)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Cadastro de produto
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de um produto:
//    - nome (string)
//    - categoria (string)
//    - preço (float)
//    - quantidade em estoque (inteiro)
//    - está disponível para venda? (sim/não, usando keyInYN())
// b) Crie um objeto 'produto' com todas essas propriedades.
//    A propriedade de disponibilidade deve se chamar 'disponivel' e ser boolean (true/false).
// c) Exiba o objeto completo com console.table().
// d) Exiba no console uma frase resumo usando template literal:
//    "Produto: <nome> | Categoria: <categoria> | Estoque: <quantidade> un".

// → Seu código aqui:

//a)

//b)

//c)

//d)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Farmacia
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de dois medicamento com as seguintes propriedades:
//    - nome (string)
//    - preco (float)
//    - emEstoque (boolean) - (sim/não, usando keyInYN())
// b) Crie uma lista "estoqueFarmacia" e insira os objetos criados com push().
// c) Exiba a lista com console.table().
// d) Exiba somente o nome e preço do 2 medicamento.
// e) Exiba somente o nome e se está em estoque o 1 medicamento.


//a)

//b)

//c)

//d)

//e)
