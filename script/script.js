const btn = document.getElementById('botao')

let fonte = document.getElementById('credor')
let montante = document.getElementById('valor')
let detalhes = document.getElementById('detalhes')
let transacao = document.getElementById('transacao')
let entrada = document.getElementById('entradaRadio')
let saida = document.getElementById('radioSaida')
const divPai = document.getElementById('aPagar')

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

    const pagar = document.createElement('div')
    pagar.className = "item-2"

    let fonteJS = document.createElement('p')
    fonteJS.textContent = `${fonte.value}`
    pagar.appendChild(fonteJS)

    let montanteJS = document.createElement('p')
    montanteJS.innerHTML = `<span class="valores">R$ ${montante.value}</span>`
    pagar.appendChild(montanteJS)

    let detalhesJS = document.createElement('p')
    detalhesJS.textContent = `${detalhes.value}`
    pagar.appendChild(detalhesJS)

    let transacaoJS = document.createElement('p')
    let converterData = transacao.value.split('-').reverse().join('/')
    transacaoJS.textContent = `${converterData}`
    pagar.appendChild(transacaoJS)

    pagar.innerHTML += `<i class="bi bi-check2-all btn-check"></i>`

    divPai.appendChild(pagar)

    form.reset()
    atualizarDespesa()
})

//despesas (preciso pegar a div pagas e percorrer todos os valores(classe montante) e dps somar todas elas)

function atualizarDespesa() {
    let divsFilhas = divPai.querySelectorAll('.valores');
    let soma = 0;

    divsFilhas.forEach(function(divFilha) {
        let valor = parseFloat(divFilha.textContent);
        if(!isNaN(valor)) {
            soma += valor;
        }
    });

    console.log('Soma dos valores:', soma);
}

