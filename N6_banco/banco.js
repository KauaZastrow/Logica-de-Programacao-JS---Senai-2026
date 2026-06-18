const lT = require("readline-sync")
// Banco
/*

*/
const taxa = {
    // ==============taxa de deposito==============|
    deposito_7a12: 0.15,
    deposito_12a18: 0.10,
    deposito_18a7: 0.25,
    // ==============taxa de saque=================|
    saque_7a12: 0.10,
    saque_12a18: 0.08,
    saque_18a7: 0.20,
}
function usuarioBase() {
    const usuario = {
        info_pessoais: {
            nome: "John",
            idade: 19,
            cpf: "45878935499",
            telefone: "(55) 15 996765994",
            email: "johnLock@gmail.com",
        },
        saldo: {
            contaCorrente: 0,
            poupanca: 0,
            investimento: 0
        },
        historico: [
            {
                tipo: "Deposito",
                valor: 1200.00,
                data: "12/21/2012",
                hora: "21:43"
            }
        ],
        tipo: "Cartão",
        logado: false,
        limites: {},
        cep: "76815986",
    }
    usuario.limites = {
        //-------------------DEPOSITO-----------------------
        limiteDeposito_7a12: 2 * usuario.saldo.contaCorrente,
        limiteDeposito_12a18: 3 * usuario.saldo.contaCorrente,
        limiteDeposito_18a7: usuario.saldo.contaCorrente,
        //--------------------SAQUE-------------------------
        limiteSaque_7a12: 1.5 * usuario.saldo.contaCorrente,
        limiteSaque_12a18: 2 * usuario.saldo.contaCorrente,
        limiteSaque_18a7: 0.5 * usuario.saldo.contaCorrente
    }
    return usuario
}
let conta = usuarioBase()