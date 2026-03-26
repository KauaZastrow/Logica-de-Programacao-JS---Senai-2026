// ============================================================
//   ATIVIDADE 06 – Operadores Lógicos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-06.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

let lerTeclado = require('readline-sync');

// ------------------------------------------------------------
// EXERCÍCIO 1 – Tabela verdade do &&
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true && true → <resultado>"
//
// Combinações:
//   a) true && true
//   b) true && false
//   c) false && true
//   d) false && false

// → Seu código aqui:

// //   a) true && true
// const a = true && true;
// console.log(`true && true → ${a}`);
// //   b) true && false
// const b = true && false;
// console.log(`true && false → ${b}`);
// //   c) false && true
// const c = false && true;
// console.log(`false && true → ${c}`);
// //   d) false && false
// const d = false && false;
// console.log(`false && false → ${d}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Tabela verdade do ||
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true || false → <resultado>"
//
// Combinações:
//   a) true || true
//   b) true || false
//   c) false || true
//   d) false || false

// → Seu código aqui:

// //   a) true || true
// const a = true || true;
// console.log(`true || true → ${a}`);
// //   b) true || false
// const b = true || false;
// console.log(`true || false → ${b}`);
// //   c) false || true
// const c = false || true;
// console.log(`false || true → ${c}`);
// //   d) false || false
// const d = false || false;
// console.log(`false || false → ${d}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Operador ! (NOT)
// ------------------------------------------------------------
// a) Declare "sistemaAtivo" com valor true.
// b) Declare "modoManutencao" atribuindo o valor invertido de "sistemaAtivo" (usando !).
// c) Declare "lugarVago" com valor false.
// d) Declare "lugarOcupado" com o valor invertido de "lugarVago" (usando !).
// e) Exiba todas as 4 variáveis com template literal mostrando seus valores.

// → Seu código aqui:

// // a) Declare "sistemaAtivo" com valor true.
// let sistemaAtivo = true;
// // b) Declare "modoManutencao" atribuindo o valor invertido de "sistemaAtivo" (usando !).
// let modoManutencao = !sistemaAtivo;
// // c) Declare "lugarVago" com valor false.
// let lugarVago = false;
// // d) Declare "lugarOcupado" com o valor invertido de "lugarVago" (usando !).
// let lugarOcupado = !lugarVago;
// // e) Exiba todas as 4 variáveis com template literal mostrando seus valores.
// console.log(`
//     Sistema ativo: ${sistemaAtivo}, 
//     modo manutencao: ${modoManutencao}, 
//     lugar vago: ${lugarVago}, 
//     lugar ocupado: ${lugarOcupado}
//     `)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Combinando && com operadores relacionais
// ------------------------------------------------------------
// a) Pergunte ao usuário seu peso e altura. Armazene os valores em um objeto.
// b) Calcule o IMC: peso / (altura ** 2). Armazene em "imc" (dentro do objeto usuário).
// c) Armazene em "imcAbaixoDoPeso" o resultado de: imc < 18.5
// c) Armazene em "imcNormal" o resultado de: imc >= 18.5 && imc <= 24.9
// d) Armazene em "imcAcimaDoPeso" o resultado de: imc >= 25 && imc <= 29.9
// e) Exiba o IMC e os três resultados booleanos com template literal. Cada imc em um console.log() individual.

// → Seu código aqui:

// // a) Pergunte ao usuário seu peso e altura. Armazene os valores em um objeto.
// let usuario = {
//     peso: lerTeclado.questionFloat("Digite seu peso: "),
//     altura: lerTeclado.questionFloat("Digite sua altura: ")
// };
// // b) Calcule o IMC: peso / (altura ** 2). Armazene em "imc" (dentro do objeto usuário).
// usuario.imc = usuario.peso / (usuario.altura ** 2);
// // c) Armazene em "imcAbaixoDoPeso" o resultado de: imc < 18.5
// usuario.imcAbaixoDoPeso = usuario.imc < 18.5;
// // c) Armazene em "imcNormal" o resultado de: imc >= 18.5 && imc <= 24.9
// usuario.imcNormal = usuario.imc >= 18.5 && usuario.imc <= 24.9;
// // d) Armazene em "imcAcimaDoPeso" o resultado de: imc >= 25 && imc <= 29.9
// usuario.imcAcimaDoPeso = usuario.imc >= 25 && usuario.imc <= 29.9;
// // e) Exiba o IMC e os três resultados booleanos com template literal. Cada imc em um console.log() individual.
// console.log(`Seu IMC é: ${usuario.imc}, e voce ${usuario.imcAbaixoDoPeso ? "esta abaixo do peso" : "não esta abaixo do peso"}`);
// console.log(`Seu IMC é: ${usuario.imc}, e voce ${usuario.imcAcimaDoPeso ? "esta acima do peso" : "não esta acima do peso"}`);
// console.log(`Seu IMC é: ${usuario.imc}, e voce ${usuario.imcNormal ? "esta com o peso normal" : "não esta com o peso normal"}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Combinando || com operadores relacionais
// ------------------------------------------------------------
// a) Declare "notaFinal" com valor 4.8.
// b) Armazene em "precisaRecuperacao" o resultado de:
//    notaFinal >= 4 && notaFinal < 6
// c) Armazene em "reprovado" o resultado de:
//    notaFinal < 4
// d) Armazene em "precisaDeAjuda" o resultado de:
//    precisaRecuperacao || reprovado
// e) Exiba todos os resultados com template literal.

// → Seu código aqui:

// // a) Declare "notaFinal" com valor 4.8.
// let notaFinal = 4.8;
// // b) Armazene em "precisaRecuperacao" o resultado de:
// //    notaFinal >= 4 && notaFinal < 6
// let precisaRecuperacao = notaFinal >= 4 && notaFinal < 6;
// // c) Armazene em "reprovado" o resultado de:
// //    notaFinal < 4
// let reprovado = notaFinal < 4;
// // d) Armazene em "precisaDeAjuda" o resultado de:
// //    precisaRecuperacao || reprovado
// let precisaDeAjuda = precisaRecuperacao || reprovado;
// // e) Exiba todos os resultados com template literal.
// console.log(`
//     Nota final: ${notaFinal},
//     Precisa de recuperação: ${precisaRecuperacao},
//     Reprovado: ${reprovado},
//     Precisa de ajuda: ${precisaDeAjuda}
// `)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Operador ternário
// ------------------------------------------------------------
// a) Declare "temperatura" com valor 38.2.
// b) Usando o operador ternário, armazene em "diagnostico":
//    Se temperatura >= 37.6 → "Febre detectada"
//    Caso contrário → "Temperatura normal"
// c) Exiba a variável "diagnostico" com template literal mostrando a temperatura e o resultado do diagnóstico.

// → Seu código aqui:

// // a) Declare "temperatura" com valor 38.2.
// let temperatura = 38.2;
// // b) Usando o operador ternário, armazene em "diagnostico":
// //    Se temperatura >= 37.6 → "Febre detectada"
// //    Caso contrário → "Temperatura normal"
// let diagnostico = temperatura >= 37.6 ? "Febre detectada" : "Febre detectada";
// // c) Exiba a variável "diagnostico" com template literal mostrando a temperatura e o resultado do diagnóstico.
// console.log(`
//     Sua temperatura é: ${temperatura}
//     Diagnostico: ${diagnostico}
// `);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Operador ternário
// ------------------------------------------------------------
// a) Declare "velocidade" com valor 110 e "limiteVelocidade" com valor 100.
// c) Usando o operador ternário, armazene em "statusMulta":
//    Se velocidade > limiteVelocidade → "Multa aplicada"
//    Caso contrário                    → "Velocidade regular"
// c) Exiba a variável "statusMulta" com template literal mostrando a velocidade e o resultado da multa.

// → Seu código aqui:

// // a) Declare "velocidade" com valor 110 e "limiteVelocidade" com valor 100.
// let velocidade = 110;
// const limiteVelocidade = 100;
// // c) Usando o operador ternário, armazene em "statusMulta":
// //    Se velocidade > limiteVelocidade → "Multa aplicada"
// //    Caso contrário                    → "Velocidade regular"
// let statusMulta = velocidade > limiteVelocidade ? "Multa aplicada" : "Velocidade regular";
// //c) Exiba a variável "statusMulta" com template literal mostrando a velocidade e o resultado da multa.
// console.log(`
//     Sua velocidade é: ${velocidade}
//     Status da multa: ${statusMulta}
// `);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Operador ternário e questionamento
// ------------------------------------------------------------
// a) Pergunte ao usuário se ele é bolsista (keyInYN()). Armazene em "ehEstudante".
// b) Pergunte ao usuário se ele paga mais que R$ 1000,00 mensais pelo curso.
// b) Usando o operadores ternários, armazene em "mensagem":
//    Se é bolsista e paga mais que R$ 1000,00 → "Desconto aplicado!"
//    Caso contrário → "Desconto não aplicado."
// c) Exiba a variável "mensagem" com template literal.

// → Seu código aqui:

// // a) Pergunte ao usuário se ele é bolsista (keyInYN()). Armazene em "ehEstudante".
// let ehEstudante = lerTeclado.keyInYN("Você é bolsista? : ");
// // b) Pergunte ao usuário se ele paga mais que R$ 1000,00 mensais pelo curso.
// let pagaMais = lerTeclado.keyInYN("Você paga mais que R$ 1000,00 mensais pelo curso? : ");
// // c) Usando o operadores ternários, armazene em "mensagem":
// //    Se é bolsista e paga mais que R$ 1000,00 → "Desconto aplicado!"
// //    Caso contrário → "Desconto não aplicado."
// let mensagem = ehEstudante && pagaMais ? "Desconto aplicado!" : "Desconto não aplicado.";
// // d) Exiba a variável "mensagem" com template literal.
// console.log(`mensagem: ${mensagem}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Verificação de acesso com input
// ------------------------------------------------------------
// a) Peça ao usuário e armazene os dados em um objeto:
//    - Sua idade (questionInt()).
//    - Se possui ingresso (keyInYN()).
//    - Se é associado ao clube (keyInYN()).
// b) Armazene e exiba os resultados das seguintes verificações em outro objeto:
//    - "podeEntrarNormal": (idade maior ou igual a 18 e possuiIngresso) ou ehAssociado
//    - "podeEntrarSocio": possuiIngresso e ehAssociado
//    - "precisaAcompanhante": idade menor que 18
//    - "naoPodeEntrar": não possuiIngresso e não ehAssociado
// c) Exiba a mensagem final usando ternário:
//    Se podeEntrarNormal ou podeEntrarSocio → "Entrada liberada!"
//    Caso contrário → "Entrada negada."

// → Seu código aqui:

// let usuario = {
//     idade: lerTeclado.questionInt("Digite sua idade: "),
//     possuiIngresso: lerTeclado.keyInYN("Possui ingresso?: "),
//     associado: lerTeclado.keyInYN("você é associado?: ")
// };

// let verificacoes = {
//     podeEntrarNormal: usuario.idade >= 18 && usuario.possuiIngresso ? "Pode entrar normal" : "Não pode entrar",
//     podeEntrarSocio: usuario.associado && usuario.possuiIngresso ? "Pode entrar socio" : "Não pode entrar",
//     precisaAcompanhante: usuario.idade < 18 && usuario.possuiIngresso ? "Precisa de acompanhante" : "Não pode entrar",
//     naoPodeEntrar: usuario.associado === false  || usuario.possuiIngresso === false ? "Não pode entrar" : "Pode entrar"
// }

// console.log(`Você ${verificacoes.podeEntrarNormal || verificacoes.podeEntrarSocio || verificacoes.precisaAcompanhante ? "Entrada liberada!" : "Entrada negada."}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Verificação de estoque com objeto
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome do produto.
//    - Quantidade em estoque.
//    - Se o produto está ativo no sistema (keyInYN()).
// b) Armazene os dados em um objeto chamado "produto".
// c) Crie as seguintes verificações booleanas:
//    - "temEstoque": quantidade maior que 0
//    - "produtoDisponivel": temEstoque e está ativo
//    - "produtoIndisponivel": não temEstoque || não está ativo
// d) Exiba os resultados com template literal.

// → Seu código aqui:

// let produto = {
//     nome: lerTeclado.question("nome do produto: "),
//     quantidadeEstoque: lerTeclado.questionInt("quantidade do produto: "),
//     ativo: lerTeclado.keyInYN("o produto está ativo no sistema?")
// }

// produto.temEstoque = produto.quantidadeEstoque > 0 ? true : false;
// produto.produtoDisponivel = produto.temEstoque && produto.ativo ? true : false;
// produto.produtoIndisponivel = produto.temEstoque === false || produto.ativo === false ? true : false;
// console.log(`
//     Tem estoque: ${produto.temEstoque}
//     produto disponivel: ${produto.produtoDisponivel}
//     produto indisponivel ${produto.produtoIndisponivel}
// `)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 11 – Verificação de permissões
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Se ele é administrador (keyInYN())
//    - Se ele está logado (keyInYN())
//    - Se a conta está ativa (keyInYN())
// b) Armazene as respostas em um objeto chamado "usuario".
// c) Crie as seguintes verificações:
//    - "acessoSistema": logado e contaAtiva
//    - "acessoAdmin": acessoSistema e ehAdmin
//    - "acessoNegado": não logado ou não contaAtiva
// d) Exiba todos os resultados.

// → Seu código aqui:

// let usuario = {
//     ehAdmin: lerTeclado.keyInYN("vc é admin?"),
//     logado: lerTeclado.keyInYN("vc é esta logado?"),
//     contaAtiva: lerTeclado.keyInYN("sua conta esta ativa?")
// }

// usuario.acessoSistema = usuario.logado && usuario.contaAtiva ? true : false;
// usuario.acessoAdmin = usuario.logado && usuario.ehAdmin ? true : false;
// usuario.acessoNegado = usuario.logado === false && usuario.ehAdmin === false ? true : false;

// console.log(`
//     acessoSistema: ${usuario.acessoSistema}
//     acessoAdmin: ${usuario.acessoAdmin}
//     acessoNegado ${usuario.acessoNegado}
// `)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 12 – Sistema simples de login
// ------------------------------------------------------------
// a) Crie um objeto "credenciaisSistema" contendo:
//    usuario: "admin"
//    senha: "1234"
// b) Pergunte ao usuário:
//    - usuário
//    - senha
// c) Crie as verificações:
//    - "usuarioCorreto": usuarioDigitado estritamente igual a usuario
//    - "senhaCorreta": senhaDigitada estritamente igual a senha
//    - "loginValido": usuarioCorreto e senhaCorreta
// d) Usando ternário, exiba:
//    Se loginValido → "Login realizado com sucesso!"
//    Caso contrário → "Usuário ou senha incorretos."

// → Seu código aqui:

let credenciaisSistema = {
    usuario: "admin",
    senha: "1234",
}

credenciaisSistema.loginValido = credenciaisSistema.usuario && credenciaisSistema.senha ? "Login realizado com sucesso!" : "Usuário ou senha incorretos."

console.log(`
    usuario: ${credenciaisSistema.usuario = lerTeclado.question("digite seu usuario: ") === "admin" ? "Usuario Correto" : "Usuario incorreto"}
    senha: ${credenciaisSistema.senha = lerTeclado.question("digite sua senha: ") === 1234 ? "Senha Correta" : "Senha incorreta"}
    ${credenciaisSistema.loginValido}
`)

console.log("_______________________________");