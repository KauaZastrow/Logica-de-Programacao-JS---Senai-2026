// ============================================================
// ATIVIDADE AVALIATIVA N4
// Módulos: Variáveis, Tipos (primitivos e compostos), Arrays e Objetos, Input e Output de Dados
// ============================================================
//
// Instruções Gerais:
// • Copie todo este exercício para um novo arquivo em sua pasta de atividades
// • Nomeie o seu novo arquivo como "atividade-avaliativa-n4.js"
// • Resolva cada exercício no espaço indicado.
// • Utilize template literals sempre que precisar montar frases.
// • NÃO apague os separadores (console.log("_________")).
// • Leia com atenção cada enunciado antes de começar.
// • Cada letra representa um passo. Resolva na ordem.
//
// ============================================================

let lerTeclado = require('readline-sync');


console.log("_______________QUESTÃO 1________________");
// ------------------------------------------------------------
// QUESTÃO 1 (peso: 0.5) – Construindo um cartão de visita no console
// ------------------------------------------------------------
// a) Crie variáveis para armazenar as seguintes informações REAIS ou FICTÍCIAS:
// • nome (string)
// • profissao (string)
// • cidade (string)
// • email (string)
// • telefone (string)
// • anoExperiencia (number)
// • disponivelParaFreelance (boolean)
// b) Peça ao usuário para preencher as informações do cartão de visitas.
// c) Usando console.log() e template literals, exiba no console
// um cartão de visitas formatado, parecido com o modelo abaixo:
//
// ============================================
// | CARTÃO DE VISITAS |
// ============================================
// | Nome : <nome> |
// | Profissão : <profissao> |
// | Cidade : <cidade> |
// | E-mail : <email> |
// | Telefone : <telefone> |
// | Experiência : <anosExperiencia> anos |
// | Freelance : <disponivelParaFreelance> |
// ============================================

// → Seu código aqui:


// const nome = lerTeclado.question("Digite seu nome: ");
// const profissao = lerTeclado.question("Digite sua profissão: ");
// const cidade = lerTeclado.question("Digite a cidade onde você mora: ");
// const email = lerTeclado.question("Digite seu email: ");
// const telefone = lerTeclado.questionInt("Digite seu telefone: ");
// const anoExperiencia = lerTeclado.questionInt("Digite quantos anos você tem de experiencia: ");
// const disponivelParaFreelance = lerTeclado.keyInYN("Você aceita trabalhos Freelance?: ");

// console.log(`
// =============================================
// |           CARTÃO DE VISITAS               |
// =============================================
// |Nome: ${nome}|
// |Profissão: ${profissao}|
// |Cidade: ${cidade}|
// |E-mail: ${email}|
// |Telefone: ${telefone}|
// |Experiência: ${anoExperiencia}|
// |Freelance: ${disponivelParaFreelance}|
// =============================================
// `);


console.log("_______________QUESTÃO 2________________");


// ------------------------------------------------------------
// QUESTÃO 2 (peso: 0.5) – Criando e acessando arrays
// ------------------------------------------------------------
// a) Crie um array chamado "materias" com pelo menos 5 disciplinas escolares.
// b) Exiba a primeira e a última matéria usando seus índices.
// c) Exiba a quantidade total de matérias usando .length.
// d) Usando template literal, exiba a frase:
// "A 3ª matéria da lista é <...> e a lista tem <...> matérias no total."

// → Seu código aqui:


// //a)
// let materias = ["Matemática", "Ciências", "Química", "Física", "Biologia"];
// //b)
// console.log(materias[0], materias[4]);
// //c)
// console.log(materias.length);
// //d)
// console.log(`A 3ª matéria da lista é ${materias[2]} e a lista tem ${materias.length} matérias no total.`)


console.log("_______________QUESTÃO 3________________");


// ------------------------------------------------------------
// QUESTÃO 3 (peso: 0.5) – Manipulação direta de posições
// ------------------------------------------------------------
const notas = [6.5, 8.0, 4.5, 9.0, 7.5];

// a) Substitua a nota do índice 2 (4.5) pelo valor 6.0 usando atribuição direta.
// b) Substitua a nota do índice 3 (9.0) pelo valor 8.5 usando atribuição direta.
// c) Exiba o array atualizado.

// → Seu código aqui:

// //a)
// notas[2] = 6.0;
// //b)
// notas[3] = 8.5;
// //c)
// console.log(notas);

console.log("_______________QUESTÃO 4________________");


// ------------------------------------------------------------
// QUESTÃO 4 (peso: 0.5) – Métodos de array: push, pop, unshift, shift
// ------------------------------------------------------------
// Usando o array "materias" da questão anterior e as funções de array listadas acima:
// a) Adicione "Educação Física" ao FINAL da lista e exiba a lista.
// b) Remova o ÚLTIMO elemento da lista e exiba a lista.
// c) Adicione "Filosofia" ao INÍCIO da lista e exiba a lista.
// d) Remova o PRIMEIRO elemento da lista e exiba a lista.
// e) Após todas as operações, exiba quantos itens restaram.

// → Seu código aqui:

// //a)
// materias.push("Educação Física");
// console.log(materias);
// //b)
// materias.pop();
// console.log(materias);
// //c)
// materias.unshift("Filosofia");
// console.log(materias);
// //d)
// materias.shift();
// console.log(materias);
// //e)
// console.log(materias.length);

console.log("_______________QUESTÃO 5________________");


// ------------------------------------------------------------
// QUESTÃO 5 (peso: 0.5) – indexOf, includes, slice e concat
// ------------------------------------------------------------
const cidadesBrasil = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Manaus", "Fortaleza"];
const cidadesPortugal = ["Lisboa", "Porto", "Braga"];

// Utilizando as listas e as funções de array listadas acima:
// a) Verifique em qual índice está "Curitiba" e exiba o resultado.
// b) Verifique em qual índice está "Recife" (que NÃO existe na lista) e exiba.
// O que significa esse retorno? Escreva a explicação em um comentário.
// c) Use includes() para verificar se "Salvador" está na lista. Exiba o resultado.
// d) Use includes() para verificar se "Belém" está na lista. Exiba o resultado.
// e) Use concat() para unir "cidadesBrasil" e "cidadesPortugal" em um novo array "todasAsCidades".
// Exiba o novo array.
// f) Use slice() para criar um novo array "cidadesDoMeio" com apenas os elementos
// do índice 3 ao 7 de "todasAsCidades". Exiba o resultado.

// → Seu código aqui:

// // a)
// console.log(cidadesBrasil.indexOf("Curitiba"));
// // b)
// console.log(cidadesBrasil.indexOf("Recife"));
// //Significa que ele não existe. Já que os indices começam em 0 (e aumentam de forma crescente, ex.: 0, 1, 2, 3...)
// // c)
// console.log(cidadesBrasil.includes("Salvador"));
// // d)
// console.log(cidadesBrasil.includes("Belém"));
// // e)
// const todasCidades = cidadesBrasil.concat(cidadesPortugal);
// console.log(todasCidades);
// // f)
// const cidadeMeio = todasCidades.slice(3, 8);
// console.log(cidadeMeio);

console.log("_______________QUESTÃO 6________________");


// ------------------------------------------------------------
// QUESTÃO 6 (peso: 0.5) – Arrays mistos e flat
// ------------------------------------------------------------
// a) Crie um array aninhado (arrays dentro de outro array) chamado "grupos", conforme exemplo abaixo:
// [
// ["Ana", "Bruno", "Carlos"],
// ["Diana", "Eduardo"],
// ["Fernanda", "Gabriel", "Helena", "Igor"]
// ]
// b) Exiba "grupos".
// c) Exiba o nome do 2º aluno do 3ª grupo (antes de usar flat, usando índices).
// d) Use flat() para transformar "grupos" em um único array chamado "todosOsAlunos" e exiba o resultado.
// e) Exiba o tamanho total do array "grupos" e do array "todosOsAlunos". Explique porque desses valores serem diferentes, se os dados são os mesmos

// → Seu código aqui:

// //a)
// const grupos =
//     [
//         ["Kauã", "Mateus", "Jorge"],
//         ["Beto", "João"],
//         ["Igor", "Tom", "Manu"]
//     ]
// //b)
// console.log(grupos);
// //c)
// console.log(grupos[2][1]);
// //d)
// const  todosAlunos = grupos.flat();
// console.log(todosAlunos);
// //e)
// console.log(grupos.length);
// console.log(todosAlunos.length);
// //Porque o "grupos" conta quantos arrays tem dentro do array, por ele ser aninhado os arrays que esta dentro de "grupos" são contados como itens
// //Ja o "todosAlunos" não ha array dentro de array, então conta quantos itens ha dentro do array principal (todosAlunos)

console.log("_______________QUESTÃO 7________________");



// ------------------------------------------------------------
// QUESTÃO 7 (peso: 0.5) – Criando e acessando objetos
// ------------------------------------------------------------
// a) Crie um objeto chamado "produto" com as propriedades:
// nome (string), preco (number), disponivel (boolean), categoria (string).
// b) Exiba cada propriedade separadamente usando um console.log() para cada.
// c) Usando template literal, exiba:
// "O produto '<nome>' custa R$ <preco> e está disponível: <disponivel>."
// d) Exiba o objeto utilizando console.table().

// → Seu código aqui:

// // a)
// const produto =
// {
//     nome: "Maçã",
//     preco: 7.4,
//     disponivel: true,
//     categoria: "Frutas"
// };
// // b)
// console.log(produto.nome);
// console.log(produto.preco);
// console.log(produto.disponivel);
// console.log(produto.categoria);
// // c)
// console.log(`O produto ${produto.nome} custa R$ ${produto.preco} e está disponível: ${produto.disponivel}`);
// // d)
// console.table(produto);

console.log("_______________QUESTÃO 8________________");


// ------------------------------------------------------------
// QUESTÃO 8 (peso: 0.5) – Alterando e adicionando propriedades
// ------------------------------------------------------------
// Usando o objeto "produto" da questão anterior:
// a) Altere o preço para um valor diferente.
// b) Altere "disponivel" para o valor oposto ao atribuido anteriormente.
// c) Adicione uma nova propriedade "estoque" com o valor 20.
// d) Exiba o objeto completo.

// → Seu código aqui:

// //a)
// produto.preco = 8.7;
// //b)
// produto.disponivel = false;
// //c)
// produto.estoque = 20;
// //d)
// console.log(produto);

console.log("_______________QUESTÃO 9________________");


// ------------------------------------------------------------
// QUESTÃO 9 (peso: 1) – Array de objetos
// ------------------------------------------------------------
// a) Crie um array chamado "listaFuncionarios" com 3 objetos.
// Cada objeto deve ter: nome (string), cargo (string), salario (number), ativo (boolean).
// b) Exiba o nome do primeiro funcionário.
// c) Exiba o cargo do terceiro funcionário.
// d) Exiba o salário do segundo funcionário.
// e) Altere o cargo do primeiro funcionário para um cargo diferente.
// f) Crie um novo objeto e armazene-o em uma variável.
// g) Adicione esse 4º funcionário no array "listaFuncionarios" com push().
// h) Exiba o array completo após todas as alterações.

// → Seu código aqui:

// // a)
// let listaFuncionarios = 
// [
//     funcionario1 = {nome: "Kauã", cargo: "Elétro mecânico", salario: 1.498, ativo: true},
//     funcionario2 = {nome: "Jhonatan", cargo: "Eletrecista", salario: 1.543, ativo: true},
//     funcionario3 = {nome: "Renã", cargo: "Ferramenteiro", salario: 1.234, ativo: false}   
// ];
// // b)
// console.log(listaFuncionarios[0].nome);
// // c)
// console.log(listaFuncionarios[2].cargo);
// // d)
// console.log(listaFuncionarios[1].salario);
// // e)
// listaFuncionarios[0].cargo = "Técnico de TI";
// // f)
// let funcionario4 = 
// {
//     nome: "Charles", cargo: "Elétro mecânico", salario: 1.674, ativo: false
// };
// // g)
// listaFuncionarios.push(funcionario4);
// // h)
// console.log(listaFuncionarios)

console.log("_______________QUESTÃO 10________________");


// ------------------------------------------------------------
// QUESTÃO 10 (peso: 1.5) – Objetos com arrays e objetos aninhados
// ------------------------------------------------------------
// a) Crie um objeto "loja" com as propriedades:
// • nomeLoja (string)
// • cnpj (string)
// • endereco → objeto contendo: rua, numero, cidade, estado
// • categoriasProdutos → array com pelo menos 3 categorias
// • aberta (boolean)
// b) Exiba o nome da loja.
// c) Exiba a cidade onde a loja está localizada.
// d) Exiba a primeira categoria de produto.
// e) Exiba, usando template literal, a frase:
// "A loja '<nomeLoja>' fica em <cidade> - <estado> e está aberta: <aberta>."
// f) Adicione uma nova categoria ao final do array "categoriasProdutos".
// g) Exiba, usando template literal, a frase:
// "Algumas categorias da loja '<nomeLoja>' são: <primeira categoria> e <última categoria> ."
// h) Exiba o objeto "loja" completo.

// → Seu código aqui:

// // a)
// const loja = 
// {
//     nomeLoja: "Raimundo Peças",
//     cnpj: "1234567890",
//     endereco: {rua: "rt 08", numero: 43, cidade: "Tacunaina", estado: "Bento"},
//     categoriasProdutos: ["Aço", "Metal Duro", "Nhonha"],
//     aberta: false
// }
// // b)
// console.log(loja.nomeLoja);
// // c)
// console.log(loja.endereco.cidade);
// // d)
// console.log(loja.categoriasProdutos[0]);
// // e)
// console.log(`A loja ${loja.nomeLoja} fica em ${loja.endereco.cidade} - ${loja.endereco.estado} e está aberta: ${loja.aberta}.`);
// // f)
// loja.categoriasProdutos.push("Canhoto");
// // g)
// console.log(`Algumas categorias da loja ${loja.nomeLoja} são: ${loja.categoriasProdutos[0]} e ${loja.categoriasProdutos[3]}.`);
// // h)
// console.log(loja);

console.log("_______________QUESTÃO 11________________");


// ------------------------------------------------------------
// QUESTÃO 11 (peso: 1.5) – Objetos complexos com array de objetos aninhado
// ------------------------------------------------------------
// a) Crie um objeto "escola" com as seguintes propriedades:
// • nomeEscola (string)
// • cidade (string)
// • diretor → objeto com: nome (string), tempoDeServico (number)
// • turmas → array contendo 2 objetos, cada um com:
// - período (string) - ex: "Manhã", "Tarde"
// - alunos → array de strings com pelo menos 3 nomes
// b) Exiba o nome da escola.
// c) Exiba o nome do diretor.
// d) Exiba o período da segunda turma.
// e) Exiba o terceiro aluno da primeira turma.
// f) Adicione um novo aluno à segunda turma usando push().
// g) Altere o período da primeira turma para "Noite".
// h) Exiba o objeto "escola" completo no final.

// → Seu código aqui:

// // a)
// let escola = 
// {
//     nomeEscola: "SabeNão",
//     cidade: "Anti-Ontem",
//     diretor: {nome: "Japa", tempoDeServico: 7},
//     turmas: [turma1 = {periodo: "Tarde", alunos: ["Tomas", "Fernanda", "Amanda"]}, turma2 = {periodo: "Manhã", alunos: ["Tom", "Nanda", "Panda"]},],
// }
// // b)
// console.log(escola.nomeEscola);
// // c)
// console.log(escola.diretor.nome);
// // d)
// console.log(escola.turmas[1].periodo);
// // e)
// console.log(escola.turmas[0].alunos[2]);
// // f)
// escola.turmas[1].alunos.push("Renã");
// // g)
// escola.turmas[0].periodo = "Noite";
// // h)
// console.log(escola);

console.log("_______________QUESTÃO 12________________");


// ------------------------------------------------------------
// QUESTÃO 12 (peso: 2) – Sistema de Biblioteca
// ------------------------------------------------------------
//
// Você vai criar a estrutura de dados de uma biblioteca simples.
// Todos os dados dos passos A e B devem ser coletados via terminal (usando a lib readline-sync).
//
// PASSO A: Variáveis da biblioteca
// • Colete os dados para as seguintes variáveis/constantes:
// - "nomeBiblioteca" (string) → nome da biblioteca
// - "anoDeFundacao" (number) → ano de fundação
// - "capacidadeLivros" (number) → quantidade máxima de livros
// - "bibliotecaAberta" (boolean)→ true ou false
// • Exiba todas usando template literal em uma única frase descritiva.
//
// PASSO B: Acervo de livros (array de objetos)
// • Crie um array chamado "acervo" com 3 objetos de livros.
// Cada livro deve ter:
// - titulo (string)
// - autor (string)
// - ano (number)
// - paginas (number)
// - disponivel (boolean)
//
// PASSO C: Acessando o acervo
// • Exiba o título do 1º livro.
// • Exiba o autor do 2º livro.
// • Exiba o número de páginas do 3º livro.
// • Exiba a quantidade total de livros no acervo (.length).
//
// PASSO D: Alterando o acervo
// • Marque o 1º livro como indisponível (disponivel = false).
// • Altere o título do 3º livro para um título diferente.
// • Adicione um 4º livro ao array "acervo" usando push(),
// criando o objeto diretamente dentro do push (sem necessidade de coletar esse dado via terminal).
//
// PASSO E: Seções da biblioteca (array de strings)
// • Crie um array "secoes" com: "Ficção", "Ciências", "História", "Infantil".
// • Exiba a primeira e a última seção.
// • Adicione "Tecnologia" ao final de "secoes".
// • Remova a primeira seção de "secoes".
// • Exiba o array "secoes".
//
// PASSO F: Relatório final
// • Usando template literals, exiba um relatório/frase com:
// - Nome e ano de fundação da biblioteca
// - Quantidade de livros no acervo
// - Quantidade de seções disponíveis
// - Título e autor de CADA livro do acervo (um livro por linha)
//
// → Seu código aqui:


// // PASSO A:
// const nomeBiblioteca = lerTeclado.question("Escreva o nome da biblioteca: ")
// const anoDeFundacao = lerTeclado.questionInt("Escreva o ano de fundação dela: ")
// const capacidadeLivros = lerTeclado.questionInt("Escreva a capacidade de armazenamento de livros: ")
// const bibliotecaAberta = lerTeclado.keyInYN("A biblioteca esta aberta hoje?: ")
// console.log(`A biblioteca ${nomeBiblioteca}, foi fundada em ${anoDeFundacao} A.C, possui capacidade para guardar ${capacidadeLivros} livros, e ela esta ${bibliotecaAberta? "Aberta":"Fechada"} hoje`)


// // PASSO B:
// let acervo = 
// [
//     livro1 = {titulo: "Ryan", autor: "Tom", ano: 2021, paginas: 243, disponivel: true},
//     livro2 = {titulo: "Been", autor: "Mot", ano: 1021, paginas: 654, disponivel: true},
//     livro3 = {titulo: "Ryan", autor: "Amanda", ano: 1821, paginas: 253, disponivel: true}
// ]

// // PASSO C:
// console.log(acervo[0].titulo);
// console.log(acervo[1].autor);
// console.log(acervo[2].paginas);
// console.log(acervo.length);

// // PASSO D:
// acervo[0].disponivel = false;
// acervo[2].titulo = "false";
// acervo.push(livro4 = {titulo: "Taan", autor: "Amanda", ano: 1861, paginas: 353, disponivel: true});

// // PASSO E:
// let secoes = ["Ficção", "Ciências", "História", "Infantil"];
// console.log(secoes[0], secoes[3]);
// secoes.push("Tecnologia");
// secoes.shift();
// console.log(secoes);

// // PASSO F:
// console.log(`A biblioteca ${nomeBiblioteca}, foi fundada em ${anoDeFundacao} A.C, possui ${acervo.length} livros no acervo, seções disponiveis ${secoes.length} hoje. livros : 
// Titulo: ${acervo[0].titulo}, autor: ${acervo[0].autor},
// Titulo: ${acervo[1].titulo}, autor: ${acervo[1].autor},
// Titulo: ${acervo[2].titulo}, autor: ${acervo[2].autor},
// Titulo: ${acervo[3].titulo}, autor: ${acervo[3].autor}
// `)

console.log("_______________QUESTÃO 13________________");


// ------------------------------------------------------------
// QUESTÃO 13 (questão bonus - peso: 1) – Cardápio de Restaurante
// ------------------------------------------------------------
//
// Monte a estrutura de dados de um restaurante.
// Todos os dados do passo A devem ser coletados via terminal (usando a lib readline-sync).
//
// PASSO A:
// • Crie um objeto "restaurante" com:
// - nome (string)
// - tipoCozinha (string) ex: "Italiana", "Japonesa"
// - nota (number) ex: 8.7
// - aberto (boolean)
// - endereco → objeto com: rua, numero, bairro, cidade
// - cardapio → array com pelo menos 4 objetos de pratos, cada um com:
// • nomePrato (string)
// • preco (number)
// • vegano (boolean)
//
// PASSO B: Acessos e exibições
// • Exiba o nome do restaurante e sua nota.
// • Exiba o endereço completo em uma única frase (rua, numero, bairro, cidade). ex. "O restaurante <nome> está localizado na <rua>, <numero>, <bairro>, <cidade>".
// • Exiba o nome e o preço do 1º prato do cardápio.
// • Exiba se o 3º prato é vegano ou não, usando template literal. ex. "O prato <nomePrato> é vegano: <vegano>".
//
// PASSO C: Alterações
// • Altere o preço do 2º prato para um valor diferente.
// • Adicione um novo prato ao cardápio usando push().
// • Altere "aberto" para false.
//
// PASSO D: Relatório do cardápio
// • Usando console.log() e template literals, exiba:
// - Nome do restaurante, tipo de cozinha e nota
// - Status: aberto ou fechado
// - Quantos pratos há no cardápio (.length)
// - Nome, preço e se é vegano de CADA prato (um prato por linha)
//
// → Seu código aqui:

// // PASSO A:
// let restaurante = 
// {
//     nome: "kk",
//     tipoCozinha: "Italiana",
//     nota: 10,
//     aberto: true,
//     endereco: {rua: "tt", numero: 54, bairro: "yu", cidade: "uu"},
//     cardapio: [prato1 = {nomePrato: "Feijão", preco: 54, vegano: true}, prato2 = {nomePrato: "Arroz", preco: 54, vegano: true}, prato3 = {nomePrato: "Alcaçus", preco: 54, vegano: true}, prato4 = {nomePrato: "Torta", preco: 54, vegano: true}],
// }
// // PASSO B:
// console.log(restaurante.nome, restaurante.nota);
// console.log(`O restaurante ${restaurante.nome} está localizado na ${restaurante.endereco.rua}, ${restaurante.endereco.numero}, ${restaurante.endereco.bairro}, ${restaurante.endereco.cidade}`);
// console.log(restaurante.cardapio[0].nomePrato, restaurante.cardapio[0].preco);
// console.log(`O prato ${restaurante.cardapio[2].nomePrato} é vegano: ${restaurante.cardapio[0].vegano? "sim":"não"}`);

// // PASSO C:
// restaurante.cardapio[1].preco = 34;
// restaurante.cardapio.push(prato5 = {nomePrato: "Milho", preco: 54, vegano: true});
// restaurante.aberto = false;


// // PASSO D:
// console.log(`Nome do restaurante: ${restaurante.nome}, tipo de cozinha: ${restaurante.tipoCozinha} e nota: ${restaurante.nota}
// Status: ${restaurante.aberto? "aberto":"fechado"}
// ${restaurante.cardapio.length}
// Nome: ${restaurante.cardapio[0].nomePrato}, preço: ${restaurante.cardapio[0].preco}, é vegano${restaurante.cardapio[0].vegano}.
// Nome: ${restaurante.cardapio[1].nomePrato}, preço: ${restaurante.cardapio[1].preco}, é vegano${restaurante.cardapio[1].vegano}.
// Nome: ${restaurante.cardapio[2].nomePrato}, preço: ${restaurante.cardapio[2].preco}, é vegano${restaurante.cardapio[2].vegano}.
// Nome: ${restaurante.cardapio[3].nomePrato}, preço: ${restaurante.cardapio[3].preco}, é vegano${restaurante.cardapio[3].vegano}.
// Nome: ${restaurante.cardapio[4].nomePrato}, preço: ${restaurante.cardapio[4].preco}, é vegano${restaurante.cardapio[4].vegano}.
// `)

console.log("_______________________________");