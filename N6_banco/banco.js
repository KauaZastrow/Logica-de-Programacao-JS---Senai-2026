const lT = require("readline-sync")

// É PARA A VERIFICACAO OBRIGATORIA DE EMAIL
const gmailCom = "@gmail.com"

// CASO TENTE UM EMAIL MAIS DE 3 VEZES E AINDA ERRE || CASO ERRE A SENHA 3 VEZES || OUTRO MOTIVO
let bloqueio_De_Seguranca = false

// BANCO

let contas = [
    {
        nome: "John",
        idade: 19,
        cpf: "45878935499",
        telefone: "(55) 15 996765994",
        email: "johnLock@gmail.com",
        senha: "1234",
        saldo: 1234,
        historico: []
    }
]

// FUNCOES DO BANCO

// VERIFICAR SE O EMAIL TEM "@GMAIL.COM"
function vericacao_De_Email() {

    let email_Verificado = null
    email_Verificado = lT.question("Digite seu email: ")

    if (!email_Verificado.includes(gmailCom)) {

        // VAI RODAR ENQUANTO NAO HOUVER "@GMAIL.COM"
        for (let i = 0; i < 3; i++) {

            // EXIBE EM CASO DE VC ESQUECER
            console.log("Voce esqueceu de escrever => @gmail.com")
            email_Verificado = lT.question("\nDigite seu email novamente: ")
            if (email_Verificado.includes(gmailCom)) {
                // VAI RETORNAR CASO TENHA O "@GMAIL.COM"
                break
            }
            console.log("")
        }
    }
    return email_Verificado
}

// QUANDO O USUARIO FAZER UMA TRANSACAO VAI FICAR REGISTRADA NO HISTORICO DENTRO DA CONTA
function registrar(conta, tipo_De_transacao, valor_Da_Transacao) {
    // PEGA A DATA E HORA ATUAL PARA REGISTR
    const agora = new Date()

    conta.historico.push(
        {
            tipo_De_transacao,
            valor_Da_Transacao,
            data: agora.toLocaleDateString(),
            hora: agora.toLocaleTimeString()

        }
    )
}

function cadastrar() {
    console.log("CADASTRO DE CONTA")

    let nome = lT.question("Digite seu nome: ")
    let idade = lT.questionInt("Digite sua idade: ")
    let cpf = lT.question("Digite seu CPF: ")
    let telefone = lT.question("Digite seu telefone: ")
    let email = lT.question("Digite seu email: ")
    let senha = lT.question("Digite sua senha: ")
    contas.push(
        {
            nome,
            idade,
            cpf,
            telefone,
            email,
            senha,
            saldo: 0,
            historico: []
        }
    )

    console.log("Conta criada!")
}

// VAI VERIFICAR SE O USUÁRIO EXISTE E SE A SENHA ESTÁ CERTA
function login() {
    console.log("LOGIN")

    // VAI PERGUNTAR O EMAIL E A SENHA
    let email = vericacao_De_Email()
    let senha = lT.question("Senha: ")

    for (let conta of contas) {

        // VAI VERIFICAR AS INFORMAÇÕES
        if (conta.email === email && conta.senha === senha) {
            return conta
        }
    }

    // SE ERRAR
    console.log("Login invalido.")
}

// FUNCAO DE DEPOSITO
function depositar(conta) {

    // VALOR DO DEPOSITO
    let valor = lT.questionFloat("Qual o valor do deposito: ")

    if (valor <= 0) {
        console.log("Falha no deposito. Valor invalido.")
    } else {
        // ADD O VALOR
        conta.saldo += valor

        // REGISTRO
        registrar(conta, "Deposito", valor)// CONTA, TIPO DE TRANSACAO, VALOR

        console.log("Deposito realizado com sucesso.")
    }
}

// FUNCAO DE SAQUE
function sacar(conta) {

    // VALOR DO SAQUE
    let valor =
        lT.questionFloat("Valor do saque: ")

    // VERIFICA O SALDO DA CONTA E SE O VALOR E VALIDO
    if (valor <= 0 || valor > conta.saldo) {
        console.log("Falha no saque. Saldo insuficiente.")
    } else {
        // VAI DESCONTAR O VALOR DO SAQUE DO SALDO DA CONTA
        conta.saldo -= valor

        // REGISTRO
        registrar(conta, "Saque", valor)// CONTA, TIPO DE TRANSACAO, VALOR
        console.log("Saque realizado com sucesso.")
    }
}

// FUNCAO DE TRANSFERENCIA
function transferir(conta) {

    // EMAIL DE DESTINO E VALOR DA TRANSFERENCIA
    let email = lT.question("Email de destino: ")
    let valor = lT.questionFloat("Valor: ")
    let destino = null

    // VAI PROCURAR O DESTINO DENTRO DO ARRAY "CONTAS"
    for (let c of contas) {
        if (c.email === email) {
            destino = c
            break
        }
    }

    // CASO O DESTINO NAO EXISTA
    if (!destino) {
        console.log("Conta nao encontrada.")
    } else if (valor <= 0 || valor > conta.saldo) {// VERIFICA O VALOR E O SALDO, SE TEM DINHEIRO SUFICIENTE PARA A TRANSFERENCIA
        console.log("Falha na transferencia. Saldo insuficiente.")
    } else {
        // VAI TRANSFERIR E DESCONTAR O VALOR TRANSFERIDO
        conta.saldo -= valor
        destino.saldo += valor

        // REGISTRO PARA A CONTA DE ORIGEM
        registrar(conta, "Transferencia enviada", valor)

        // REGISTRO PARA DESTINO
        registrar(destino, "Transferencia recebida", valor)
        console.log("Transferencia realizada.")
    }
}

function extrato(conta) {
    console.log("EXTRATO")

    // CASO SEJA SEM TRANSFERENCIA NENHUMA
    if (conta.historico.length === 0) {
        console.log("Nenhuma movimentacao.")
    } else {

        // EXIBE AS INFORMAÇÕES DE CADA TRANSACAO DO HISTORICO DO USUARIO
        for (let item of conta.historico) {

            console.log(`${item.tipo_De_transacao}:`)
            console.log(`Valor: R$${item.valor_Da_Transacao.toFixed(2)}`)
            console.log(`Data: ${item.data}`)
            console.log(`Hora: ${item.hora}`)
        }
    }
}

// FUNCAO QUE MOSTRA SALDO POIS VAIS SER USADA MAIS VEZES
function mostrarSaldo(conta) {
    console.log(`Saldo atual: R$${conta.saldo.toFixed(2)}`)
}

// MENU PRINCIPAL DO BANCO
function menuBanco(conta) {
    let opcao = null

    do {
        console.log("Digite o numero da opcao desejada:")
        console.log("MENU PRINCIPAL DO BANCO")
        console.log("1: Depositar")
        console.log("2: Sacar")
        console.log("3: Transferir")
        console.log("4: Saldo")
        console.log("5: Extrato")
        console.log("0: Logout")

        opcao = lT.questionInt("Opcao desejada: ")

        // VAI CHAMAR A FUNCAO CORRESPONDENTE AO PEDIDO
        switch (opcao) {
            case 0:
                console.log("saindo...")
                console.log("Contagem relampago")
                console.log("3 ...")
                console.log("2 ...")
                console.log("1 ...")
                console.log("0")
                break
            case 1:
                depositar(conta)// FUNCAO DE DEPOSITO
                break
            case 2:
                sacar(conta)// FUNCAO DE SAQUE
                break
            case 3:
                transferir(conta)// FUNCAO DE TRANSFERENCIA
                break
            case 4:
                mostrarSaldo(conta)// FUNCAO QUE MOSTRA O SALDO
                break
            case 5:
                extrato(conta) // HISTORICO DE TRANSACOES
                break
            default:
                console.log("Opcao invalida.")
        }
    } while (opcao !== 0)
}

// PERGUNTA SE O USUÁRIO QUER ENTRAR, SE CADASTRAR OU SAIR
function menuInicial() {
    let opcao = null

    do { // SE REPETE ENQUANTO O USUÁRIO NÃO QUISER SAIR, MAS SO ATE UMA FUNCAO SER ESCOLHIDA, SE NAO VAI FICAR EM LOOP INFINITO ATE SAIR
        console.log("SISTEMA BANCARIO")
        console.log("1 - Login")// VAI CHAMAR A FUNCAO DE LOGIN
        console.log("2 - Cadastro")// VAI CHAMAR A FUNCAO DE CADASTRO
        console.log("0 - Sair")// VAI SAIR DO CODIGO
        opcao = lT.questionInt("Opcao: ")

        // VAI CHAMAR A FUNCAO CORRESPONDENTE AO PEDIDO
        switch (opcao) {
            case 0:
                console.log("Encerrando...")
                break
            case 1:
                let conta = login()
                if (conta) { menuBanco(conta) }
                break
            case 2:
                cadastrar()
                break
            default:
                console.log("Opcao invalida.")
        }
    } while (opcao !== 0)
}

// INICIO DO PROGRAMA
// MADE BY SLICE
menuInicial()