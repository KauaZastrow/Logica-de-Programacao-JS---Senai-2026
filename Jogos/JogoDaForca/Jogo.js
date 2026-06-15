const lT = require("readline-sync")
let palavraEscolhida = null
let riscos = []
let erros = 0
const maxErros = 6
console.log("Made in China")
// Estados do boneco da forca baseados no número de erros
const estadosForca = [ // Este array foi feito com o chatGPT por falta de tempo
    "______\n|   \n|   \n|   \nL_   \n", // 0 erros
    "______\n|   o\n|   \n|   \nL_   \n", // 1 erro
    "______\n|   o\n|   |\n|   \nL_   \n", // 2 erros
    "______\n|   o\n|  /|\n|   \nL_   \n", // 3 erros
    "______\n|   o\n|  /|\\\n|   \nL_   \n",// 4 erros
    "______\n|   o\n|  /|\\\n|  / \nL_   \n",// 5 erros
    "______\n|   o\n|  /|\\\n|  / \\\nL_   \n" // 6 erros (Game Over)
]

const palavras = [
    "abacaxi", "janela", "caderno", "montanha", "oceano", "violao", "computador", "caneta", "girassol", "biblioteca", "viado"
];

function gerarPalavra() {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    return palavras[indiceAleatorio];
}

function riscosNoLugarDasLetras(escolhaDePalavra, risco) {
    risco.length = 0; // limpa o array antes
    for (let i = 0; i < escolhaDePalavra.length; i++) {
        risco.push("__") // Usando apenas um "_" para ficar visualmente melhor ao substituir
    }
}

function escolherLetra() {
    return lT.question("Escolha a letra: ").toLowerCase(); // Converte para minUsculo para evitar bugs
}

function ganhou() {
    console.log("\nPARABENS! Voce nao fez nada alem do esperado!");
    console.log(`A palavra era: ${palavraEscolhida}`);
}

function perdeu() {
    console.log("FIM. O silêncio que se segue é o peso da sua última escolha. \nNa tela, o personagem despenca — uma queda curta, \nsem o estalo misericordioso do pescoço, apenas o aperto lento e cruel da corda. \nNão há botão de recomeço. Bloqueado pelas limitações gráficas do jogo, \no modelo bidimensional não tem olhos para chorar e nem boca para clamar por socorro. \nMas, no vazio daquela textura inacabada, ele parece olhar direto para você, \nsufocando ser ar. O jogo acabou, mas a agonia dele continua presa na sua tela.\n");
    console.log(`A palavra correta era: ${palavraEscolhida}`);
}

function iniciar() {
    palavraEscolhida = gerarPalavra();
    riscosNoLugarDasLetras(palavraEscolhida, riscos);

    // JOGO EM SI
    while (erros < maxErros && riscos.includes("__")) {
        console.log(estadosForca[erros]); // Desenha a forca atual
        console.log("Palavra: " + riscos.join(" ") + "\n");

        let palpite = escolherLetra();
        let acertou = false;

        // Verifica se a letra existe na palavra
        for (let i = 0; i < palavraEscolhida.length; i++) {
            if (palavraEscolhida[i] === palpite) {
                // Se a letra nao foi descoberta, troca o risco
                if (riscos[i] === "__") {
                    riscos[i] = palpite;
                    acertou = true;
                }
            }
        }

        if (!acertou) {
            erros++;
            console.log(`\nVocê errou! Restam ${maxErros - erros} tentativas.`);
        }
    }

    // FIM DO JOGO
    if (!riscos.includes("__")) {
        ganhou()
    } else {
        perdeu()
        console.log(estadosForca[6])
    }
}

iniciar();