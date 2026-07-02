const lT = require("readline-sync")

let abcd = [a = { nomeTarefa: "hkj", descricaoTarefa: "shfd" }, b = { nomeTarefa: "hkj", descricaoTarefa: "shfd" }]

function abcdFunction(num, nomeTarefa, descricaoTarefa) {
    abcd.splice(num, 1, nome = { nomeTarefa, descricaoTarefa })
}

function editar() {
    let num2 = lT.questionInt("Qual Tarefa deseja editar?\nDigite seu numero: ") - 1
    let nome = abcd[num2].nomeTarefa
    let desc = abcd[num2].descricaoTarefa
    console.log("1 - TITULO\n2 - DESCRICAO\n3 - TUDO")

    let num1 = lT.questionInt("O que deseja editar?\nDigite seu numero: ")
    switch (num1) {
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
    abcdFunction(num2, nome, desc)
}

editar()
console.table(abcd)