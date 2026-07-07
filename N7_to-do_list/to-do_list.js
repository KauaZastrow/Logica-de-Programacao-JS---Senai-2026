const lT = require("readline-sync")

let listaTarefas = []
// ---------------------------ADD TAREFA----------------------------------

function preFab_tarefa(nomeTarefa, descricaoTarefa) {
    listaTarefas.push(
        {
            nomeTarefa,
            descricaoTarefa
        }
    )
}

function verificarNomeTitulo() {
    let nomeItem = lT.question("Qual o nome do item?\nDigite aqui: ").trim()
    while (nomeItem === "") {
        console.log("O nome do item nao pode estar vazio! Tente novamente.")
        nomeItem = lT.question("Qual o nome do item?\nDigite aqui: ").trim()
    }
    while (nomeItem.length > 50) {
        console.log("O nome do item nao pode ter mais de 50 caracteres! Tente novamente.")
        nomeItem = lT.question("Qual o nome do item?\nDigite aqui: ").trim()
    }
    while (nomeItem.length < 10) {
        console.log("O nome do item nao pode ter menos de 10 caracteris! Tente novamente.")
        nomeItem = lT.question("Qual o nome do item?\nDigite aqui: ").trim()
    }
    return nomeItem
}

function addTitulo() {

    let nomeItem = verificarNomeTitulo()
    nomeItem = nomeItem.toUpperCase()

    return nomeItem
}

function verificarDescricao() {
    let descricaoItem = lT.question("Qual a descricao do item?\nDigite aqui: ").trim()
    while (descricaoItem === "") {
        console.log("A descricao do item nao pode estar vazio! Tente novamente.")
        descricaoItem = lT.question("Qual a descricao do item?\nDigite aqui: ").trim()
    }
    while (nomeItem.length > 100) {
        console.log("A descricao do item nao pode ter mais de 100 caracteres! Tente novamente.")
        nomeItem = lT.question("Qual o nome do item?\nDigite aqui: ").trim()
    }
    while (nomeItem.length < 20) {
        console.log("A descricao do item nao pode ter menos de 20 caracteris! Tente novamente.")
        nomeItem = lT.question("Qual o nome do item?\nDigite aqui: ").trim()
    }
    return descricaoItem
}

function addDescricao() {
    let descricao = verificarDescricao()
    descricao = descricao.toLowerCase()
    return descricao
}

function addTarefa() {

    const nomeTitulo = addTitulo()
    const textoDescricao = addDescricao()

    preFab_tarefa(nomeTitulo, textoDescricao)
}



// ---------------------------------LISTA VAZIA?--------------------------------

function verificacaoLista(lista) {
    if (lista.length === 0) return false
    else return true
}

function mensagemListaVazia() {
    console.log("LISTA DE TAREFAS VAZIA!")
}

function verificacaoMaisMensagem(lista) {
    const verificacao = verificacaoLista(lista)
    if (!verificacao) mensagemListaVazia()
    return verificacao
}

// ---------------------------MENSAGEM NUMERO INVALIDO---------------------------

function mensagemNumInvalido() {
    console.log("TAREFA INESISTENTE! TENTE NOVAMENTE OU DIGITE 0 PARA SAIR.")
}

// ------------------------EXIBIR TITULO / EXIBIR TEXTO------------------------

function titulo(lista, indice) {
    console.log(`\n--------------------- TAREFA ${indice + 1} ---------------------\n\n===========================================\n|\n| ${lista[indice].nomeTarefa}\n|\n===========================================`)
}

function descricao(lista, indice) {
    console.log(`\n--------------------- TAREFA ${indice + 1} ---------------------\n\n===========================================\n|\n| ${lista[indice].descricaoTarefa}\n|\n===========================================`)
}

function tituloMaisDescricao(lista, indice) {
    console.log(`\n--------------------- TAREFA ${indice + 1} ---------------------\n\n===========================================\n|\n| ${lista[indice].nomeTarefa}\n|\n===========================================`)
    console.log(`|\n| ${lista[indice].descricaoTarefa}\n|\n===========================================`)
}

// -----------------------VERIFICACAO DA ESCOLHA DE TITULO-----------------------

function verificacaoEscolhaDescricao(lista) {

    let numTitulo = lT.questionInt("\nDigite o numero da tarefa que deseja ver a descricao: ") - 1
    while (numTitulo < 0 || numTitulo >= lista.length) {
        numTitulo = lT.questionInt("\nNumero invalido! Digite zero para sair.\nDigite o numero da tarefa que deseja ver a descricao: ") - 1
        if (numTitulo === -1) break
    }
    if (numTitulo != -1) return numTitulo
}

// --------------------------------EXIBIR TITULO--------------------------------

function consoleTitulos(lista) {
    const exibir = verificacaoMaisMensagem(lista)
    if (exibir) {
        for (let i = 0; i < lista.length; i++) {
            titulo(lista, i)
        }
    }
}

// --------------------------------EXIBIR TEXTO--------------------------------

function consoleDescricao(lista) {
    const exibir = verificacaoMaisMensagem(lista)
    if (exibir) {

        consoleTitulos(lista)
        const num = verificacaoEscolhaDescricao(lista)
        descricao(lista, num)

    }
}

// --------------------------------EDITAR--------------------------------

function trocaDeValores(num, nome, desc) {
    listaTarefas.splice(num, 1, { nomeTarefa: nome, descricaoTarefa: desc })
}

function verificacaoEscolhaEdicao(lista) {
    consoleTitulos(lista)
    let numTitulo = lT.questionInt("\nDigite o numero da tarefa que deseja editar: ") - 1
    while (numTitulo < 0 || numTitulo >= lista.length) {
        consoleTitulos(lista)
        numTitulo = lT.questionInt("\nNumero invalido! Digite zero para sair.\nDigite o numero da tarefa que deseja editar: ") - 1
        if (numTitulo === -1) break
    }
    if (numTitulo !== -1) return numTitulo
}

function editar(num) {
    let nome = listaTarefas[num].nomeTarefa
    let desc = listaTarefas[num].descricaoTarefa
    console.log("1 - TITULO\n2 - DESCRICAO\n3 - TUDO")

    let tresOpcoesDeEdicao = lT.questionInt("O que deseja editar?\nDigite seu numero: ")
    switch (tresOpcoesDeEdicao) {
        case 1:
            nome = addTitulo()
            break
        case 2:
            desc = addDescricao()
            break
        case 3:
            nome = addTitulo()
            desc = addDescricao()
            break
    }
    trocaDeValores(num, nome, desc)
}

function edicao() {
    const vazia = verificacaoMaisMensagem(listaTarefas)
    if (vazia) {
        const num = verificacaoEscolhaEdicao(listaTarefas)
        if (num !== undefined) {
            editar(num)
        }
    }
}

// -----------------------------------EXCLUIR-----------------------------------

function verificacaoEscolhaExclusao(lista) {
    let numTitulo = lT.questionInt("\nDigite o numero da tarefa que deseja excluir: ") - 1
    while (numTitulo < 0 || numTitulo >= lista.length) {
        numTitulo = lT.questionInt("\nNumero invalido! Digite zero para sair.\nDigite o numero da tarefa que deseja excluir: ") - 1
        if (numTitulo === -1) break
    }
    if (numTitulo !== -1) return numTitulo
}

function excluirTarefa(lista) {
    const exibir = verificacaoMaisMensagem(lista)
    if (exibir) {
        const num = verificacaoEscolhaExclusao(lista)
        if (num !== undefined) {
            lista.splice(num, 1)
            console.log("\nTarefa excluida\n")
        }
    }
}

// -----------------------------------FILTRO------------------------------------

function palavraFiltrada() {
    let tituloNome = lT.question("Digite a palavra a ser filtrada: ")
    tituloNome = tituloNome.toUpperCase().trim()
    return tituloNome
}


function filtroDeLista(lista, nome) {
    for (let i = 0; i < lista.length; i++) {
        let item = lista[i].nomeTarefa
        if (item.includes(nome)) {
            tituloMaisDescricao(lista, i)
        }
    }
}

function consoleTitulosFiltrados(lista, nome) {
    const exibir = verificacaoMaisMensagem(lista)
    if (exibir) {
        if (lista.includes(nome)) {
            return true
        } else {
            console.log("Palavra não encontrada!")
            return undefined
        }

    }
}

function filtro(lista) {
    const tituloDigitado = palavraFiltrada()
    const existe = consoleTitulosFiltrados(lista, tituloDigitado)
    if (existe != undefined || existe != false) filtroDeLista(lista, tituloDigitado)
}

// -------------------------------VISUALIZAR MENU-------------------------------

function mostrarMenu() {
    console.log("\n        ------------------\n")
    console.log("   1 - [     ADICIONAR    ]") // Pronto👌🤌🤏👍
    console.log("\n        ------------------\n")
    console.log("   2 - [ VISUALIZAR LISTA ]") // Pronto👌🤌🤏👍
    console.log("\n        ------------------\n")
    console.log("   3 - [ VISUALIZAR ITEM  ]") // Pronto👌🤌🤏👍
    console.log("\n        ------------------\n")
    console.log("   4 - [      EDITAR      ]") // Pronto👌🤌🤏👍
    console.log("\n        ------------------\n")
    console.log("   5 - [      EXCLUIR     ]") // Pronto👌🤌🤏👍
    console.log("\n        ------------------\n")
    console.log("   6 - [      FILTRAR     ]") // Pronto👌🤌🤏👍
    console.log("\n        ------------------\n")
    console.log("   7 - [      ENCERRAR    ]") // Pronto👌🤌🤏👍
    console.log("\n        ------------------\n")
}

// ---------------------------MENU----------------------------------

function escolhaDaOpcao(num) {
    switch (num) {
        case 1:
            addTarefa()
            break
        case 2:
            consoleTitulos(listaTarefas)
            break
        case 3:
            consoleDescricao(listaTarefas)
            break
        case 4:
            edicao()
            break
        case 5:
            excluirTarefa(listaTarefas)
            break
        case 6:
            filtro(listaTarefas)
            break
        case 7:
            console.log("PARABENS, VOCE FOI O PRIMEIRO USUARIO DO MENUSlice!\n SAINDO...")
            break
        default:
            console.log("\nEste numero nao é valido! por favor tente novamente\n")
            return false
    }
    return true
}

function escolherOpcaoMenu() {
    mostrarMenu()
    const numeroDaOpcao = lT.questionInt("\nDigite a opcao desejada: ")
    escolhaDaOpcao(numeroDaOpcao)
    return numeroDaOpcao
}

function verificacaoDeNumeroDeOpcao_FazerAcao() {
    let veredito = escolherOpcaoMenu()
    while (!veredito) {
        console.log("Valor invalido! Tente novamente.")
        veredito = escolherOpcaoMenu()
    }
    return veredito
}

function repeteMenu() {
    let numVeredito = null
    do {
        numVeredito = verificacaoDeNumeroDeOpcao_FazerAcao()
    } while (numVeredito != 7)
}

function menu() {
    repeteMenu()
}

menu()
// 1. Adicionar – cadastrar uma nova tarefa (card), informando título e texto/descrição.
// 2. Visualizar lista – exibir a lista de tarefas mostrando apenas os títulos cadastrados.
// 3. Visualizar item – solicitar ao usuário qual item deseja exibir, e o sistema deve exibir o texto/descrição
// completa daquela tarefa.
// 4. Editar – solicitar ao usuário qual item deseja editar e se a edição é do título ou do texto/descrição; permitir
// a edição da informação desejada do item selecionado.
// 5. Excluir – solicitar ao usuário uma tarefa existente e removê-la da lista.

// 6. Filtrar – buscar tarefas a partir de um termo digitado pelo usuário, comparando com o título das tarefas, e
// exibir somente os resultados que atendam ao filtro.
// 7. Encerrar – O menu deve permanecer em execução (loop) até que o usuário escolha a opção de saída,
// retornando sempre ao menu principal após concluir uma ação
