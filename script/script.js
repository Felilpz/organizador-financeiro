const btn = document.getElementById('botao')

let fonte = document.getElementById('credor')
let montante = document.getElementById('valor')
let detalhes = document.getElementById('detalhes')
let transacao = document.getElementById('transacao')
let entrada = document.getElementById('entradaRadio')
let saida = document.getElementById('radioSaida')
const divPai = document.getElementById('aPagar')
let banco = []

const title = document.getElementById('titulo')


const form = document.querySelector('#form')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (fonte.value == "") {
        window.alert(`Por favor, preencha o campo FONTE`)
        return;
    }

    if (montante.value == "") {
        window.alert(`Por favor, preencha o campo MONTANTE`)
        return;
    }

    if (detalhes.value == "") {
        window.alert(`Por favor, preencha o campo DETALHES`)
        return;
    }

    if (transacao.value == "") {
        window.alert(`Por favor, preencha o campo TRANSACAO`)
        return;
    }
    
    // armazenando montante em um array e fazend soma para despesas
    banco.push(parseFloat(montante.value))
    console.log(banco)
    let soma = 0
    for (c = 0; c < banco.length; c++) {
        soma += Number(banco[c])
}})

//despesas (preciso pegar a div pagas e percorrer todos os valores(classe montante) e dps somar todas elas)
function atualizarDespesas() {
    let inputReceita = document.getElementById('entradas').value

    banco.push(parseFloat(montante.value))
    let soma = 0
    for (c = 0; c < banco.length; c++) {
        soma += Number(banco[c])
    }

    let despesas = document.getElementById('despesas')
    despesas.innerText = soma
}

function escolherTela() {
    // checar qual input radio está clicado e mostrar a tela
    if (document.getElementById('entradasId').checked) {
        title.innerText = "ENTRADAS"
        console.log('Entrada')
    } else if(document.getElementById('pegarId').checked) {
        title.innerText = "PAGAR"
        console.log('Pagar')
    } else {
        title.innerText = "PAGAS"
        console.log('Pagas')
    }
}

escolherTela();