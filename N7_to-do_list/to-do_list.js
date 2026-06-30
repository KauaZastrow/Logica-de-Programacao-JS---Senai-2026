const lT = require("readline-sync")

let listaTarefas = []
// ---------------------------ADD TAREFA----------------------------------

function preFab_tarefa(nomeTarefa = "Nao especificado", descricaoTarefa = "Nao vai escrever nada? Patetic!") {
    linhaSeparadoraAutomatica()
    listaTarefas.push(
        {
            nomeTarefa,
            descricaoTarefa,
        }
    )
}

function addTarefa() {
    let nomeItem = lT.question("Qual o nome do item?\nDigite aqui: ").trim()
    if (nomeItem === "") {
        nomeItem = undefined
    } else {
        nomeItem = nomeItem.toUpperCase()
    }

    let descricaoItem = lT.question("Tem descricao do item?\nDigite aqui: ").trim()
    if (descricaoItem === "") {
        descricaoItem = undefined
    } else {
        descricaoItem = descricaoItem.toLowerCase()
    }

    preFab_tarefa(nomeItem, descricaoItem)
}

// ---------------------------VISUALIZAR LISTA----------------------------------
for (let i = 0; i < listaTarefas.length; i++){
console.log(`===========================================\n|\n| ${listaTarefas[i].nomeTarefa}\n|\n===========================================\n|\n| ${listaTarefas[i++].descricaoTarefa}\n|\n===========================================`)
}
function mostrarMenu() {
    console.log("     ------------------")
    console.log("1 - [     Adicionar    ]")
    console.log("     ------------------")
    console.log("2 - [ Visualizar lista ]")
    console.log("     ------------------")
    console.log("3 - [ Visualizar item  ]")
    console.log("     ------------------")
    console.log("4 - [      Editar      ]")
    console.log("     ------------------")
    console.log("5 - [      Excluir     ]")
    console.log("     ------------------")
    console.log("6 - [      Filtrar     ]")
    console.log("     ------------------")
    console.log("7 - [      Encerrar    ]")
    console.log("     ------------------")
}

// ---------------------------MENU----------------------------------

function escolhaDaOpcao(num) {
    switch (num) {
        case 1:
            addTarefa()
            break
        case 2:
            
            break
        case 3:
            break
        case 4:
            break
        case 5:
            break
        case 6:
            break
        case 7:
            console.log("PARABENS, VOCE FOI O PRIMEIRO USUARIO DO MENUSlice!\n SAINDO...")
            break
        default:
            return false
    }
    return true
}

function escolherOpcaoMenu() {
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
    mostrarMenu()
    repeteMenu()
}

menu()
console.log(listaTarefas)
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