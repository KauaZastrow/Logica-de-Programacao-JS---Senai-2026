const axios = require("axios")
const leitor = require("readline-sync")
// ID do deck de baralho
let deckID = null
// Lista de jogadores
let jogadores = []
// --------------- Functions ---------------
// Add Jogador(es) e Dealer
function addJogador() {
    let maisJogadores = null
    do {
        jogador = {
            nome: leitor.question("Your name: "),
            deckPessoal: [],
            pontos: null
        }
        jogadores.push(jogador)
        if (jogadores.length === 4) {
            console.log("Limite de jogadores alcançados!")
            maisJogadores = false
        }
        maisJogadores = leitor.keyInYN("Mais um jogador? ")
    } while (maisJogadores)
    dealer = {
        nome: "Dealer",
        deckPessoal: [],
        pontos: null
    }
    jogadores.unshift(dealer)
}
// Gera o deck inteiro
async function gerarBaralho() {
    try {
        const resposta = await axios.get(
            "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
        )
        deckID = resposta.data.deck_id
        console.log(deckID)
    }
    catch (error) {
        console.log("erro na function gerarBaralho()")
    }
}
// Sorteia uma ou mais cartas do deck e o add a array "comprarCartas" que tem um return
async function pegar_Carta(deckID, quantidade) {
    try {
        let comprarCartas = []
        const resposta = await axios.get(
            `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${quantidade}`
        )
        const cartasID = resposta.data.cards
        for (let i = 0; i < cartasID.length; i++) {
            comprarCartas.push(cartasID[i].code)
        }
        return comprarCartas
    }
    catch (error) {
        console.log("erro na function pegar_Carta()")
    }
}
// Add cartas iniciais (duas cartas)
async function addCartasIniciaisMaos() {
    try {
        let cartas = null
        for (const carta of jogadores) {
            cartas = pegar_Carta(deckID, 2)
            carta.deckPessoal.push(cartas[0], cartas[1])
        }
    }
    catch (error) {
        console.log("erro na function addCartasIniciaisMaos()")
    }
}
function mostrarMaos() {
    for (let i = 1; i < jogadores.length; i++) {
        for (let l = 0; l < jogadores[i].deckPessoal.length; l++) {
            console.log(jogadores[i].deckPessoal[l])
        }
    }
}
// Add uma carta ao pedir mais uma
async function addCartasMaos() {
    try {
        for (const carta of jogadores) {
            cartas = await pegar_Carta(deckID, 1)
            console.log(cartas)
            carta.deckPessoal.push(cartas[0])
        }
    }
    catch (error) {
        console.log("erro na function addCartasMaos()")
    }
}
async function iniciarJogo() {
    addJogador()
    await gerarBaralho()
    await addCartasIniciaisMaos()
    await mostrarMaos()
}
iniciarJogo()