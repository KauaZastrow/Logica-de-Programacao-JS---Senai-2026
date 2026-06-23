// Integrantes: Felipe Dama, Felipe, Kauã Zastrow (Slice)

const lT = require("readline-sync")

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
        historico: [],
        bloqueadaAte: null,
        limites: { saque: 5000, deposito: 12000 }
    }
]

// FUNCOES DO BANCO

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
    let email = lT.question.email("Digite seu email: ")
    let senha = lT.question("Digite sua senha: ")
    let bloqueadaAte = null
    contas.push(
        {
            nome,
            idade,
            cpf,
            telefone,
            email,
            senha,
            saldo: 0,
            historico: [],
            bloqueadaAte,
            limites: { saque: 5000, deposito: 12000 }
        }
    )

    console.log("Conta criada!")
}


// VAI VERIFICAR SE O USUÁRIO EXISTE E SE A SENHA ESTÁ CERTA
function login() {
    let contador = 0
    do {
        console.log("LOGIN")

        // VAI PERGUNTAR O EMAIL E A SENHA
        let email = lT.question("Email: ")
        let senha = lT.question("Senha: ")

        let contaEncontrada = null;

        for (let conta of contas) {
            if (conta.email === email) {
                contaEncontrada = conta;
                break;
            }
        }

        // E-mail não existe
        if (contaEncontrada === null) {
            console.log("\nLogin inválido.");
            continue;
        }

        // Conta bloqueada
        if (
            contaEncontrada.bloqueadaAte &&
            Date.now() < contaEncontrada.bloqueadaAte
        ) {
            let restante = Math.ceil(
                (contaEncontrada.bloqueadaAte - Date.now()) / 1000
            );

            console.log(`Conta bloqueada. Tente novamente em ${restante} segundos.`);
            return false;
        }

        // Senha correta
        if (contaEncontrada.senha === senha) {
            return contaEncontrada;
        }

        // Senha errada
        console.log("\nSenha incorreta.");
        contador++;
        if (contador < 3) {
            console.log(`Sua conta será bloqueada em ${3 - contador} tentativas!`);
        }
        if (contador === 3) {
            contaEncontrada.bloqueadaAte = Date.now() + 5 * 60 * 1000;

            let horario = new Date(contaEncontrada.bloqueadaAte);

            console.log(
                `Desbloqueio às ${horario.toLocaleTimeString("pt-BR", {
                    timeZone: "America/Sao_Paulo",
                    hour: "2-digit",
                    minute: "2-digit"
                })}`
            );

            return false;
        }
    } while (contador < 4);
}

// FUNCAO DE DEPOSITO
function depositar(conta) {

    // VALOR DO DEPOSITO
    let valor = lT.questionFloat("\nQual o valor do deposito: ")

    if (valor <= 0) {
        console.log("\nFalha no deposito. Valor invalido.")
        return // UNICO MEIO QUE ACHEI PARA PARAR A EXECUÇÃO DA FUNÇÃO SE O VALOR FOR INVALIDO. O MESMO SE SEGUE COM AS OUTRAS FUNÇÕES ABAIXO
    }

    // ADD O VALOR
    conta.saldo += valor

    // REGISTRO
    registrar(conta, "Deposito", valor)// CONTA, TIPO DE TRANSACAO, VALOR

    console.log("\nDeposito realizado com sucesso.")
}

// FUNCAO DE SAQUE
function sacar(conta) {

    // VALOR DO SAQUE
    let valor =
        lT.questionFloat("\nValor do saque: ")

    // VERIFICA O SALDO DA CONTA E SE O VALOR E VALIDO
    if (valor <= 0 || valor > conta.saldo) {
        console.log("\nFalha no saque. Saldo insuficiente.")
        return
    }

    // VAI DESCONTAR O VALOR DO SAQUE DO SALDO DA CONTA
    conta.saldo -= valor

    // REGISTRO
    registrar(conta, "Saque", valor)// CONTA, TIPO DE TRANSACAO, VALOR
    console.log("Saque realizado com sucesso.")
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
        return
    }

    // VERIFICA O VALOR E O SALDO, SE TEM DINHEIRO SUFICIENTE PARA A TRANSFERENCIA
    if (valor <= 0 || valor > conta.saldo) {
        console.log("Falha na transferencia. Saldo insuficiente.")
        return
    }

    // VAI TRANSFERIR E DESCONTAR O VALOR TRANSFERIDO
    conta.saldo -= valor
    destino.saldo += valor

    // REGISTRO PARA A CONTA DE ORIGEM
    registrar(conta, "Transferencia enviada", valor)

    // REGISTRO PARA DESTINO
    registrar(destino, "Transferencia recebida", valor)
    console.log("\nTransferencia realizada.")
}

function extrato(conta) {
    console.log("=========| EXTRATO |=========")

    // CASO SEJA SEM TRANSFERENCIA NENHUMA
    if (conta.historico.length === 0) {
        console.log("\nNenhuma movimentacao.")
        return
    }

    // EXIBE AS INFORMAÇÕES DE CADA TRANSACAO DO HISTORICO DO USUARIO
    for (let item of conta.historico) {

        console.log(`${item.tipo_De_transacao}:`)
        console.log(`Valor: R$${item.valor_Da_Transacao.toFixed(2)}`)
        console.log(`Data: ${item.data}`)
        console.log(`Hora: ${item.hora}`)
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
        console.log("\n== Banco nacional da SliceLandia ==")
        console.log("___________________________________")
        console.log("Digite o numero da opcao desejada:")
        console.log("MENU PRINCIPAL DO BANCO")
        console.log("1: Depositar")
        console.log("2: Sacar")
        console.log("3: Transferir")
        console.log("4: Saldo")
        console.log("5: Extrato")
        console.log("0: Logout")
        console.log("___________________________________")

        opcao = lT.questionInt("Opcao desejada: ")

        // VAI CHAMAR A FUNCAO CORRESPONDENTE AO PEDIDO
        switch (opcao) {
            case 0:
                console.log("\nsaindo...")
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
        console.log("\n== Banco nacional da SliceLandia ==")
        console.log("========= SISTEMA BANCARIO =========")
        console.log("___________________________________")
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