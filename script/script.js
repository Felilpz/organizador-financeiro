const btn = document.getElementById('botao')

let fonte = document.getElementById('credor')
let montante = document.getElementById('valor')
let detalhes = document.getElementById('detalhes')
let transacao = document.getElementById('transacao')
let entrada = document.getElementById('entradaRadio')
let saida = document.getElementById('radioSaida')
const divPai = document.getElementById('aPagar')
let banco = []


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

    const entradaSaida = document.getElementsByName('radio')
    let opcao
    for(c = 0; c < entradaSaida.length; c++) {
        if(entradaSaida[c].checked) {
            opcao = entradaSaida[c].value
            console.log(opcao)
            break
        }

        if(entradaSaida == 'saida') {

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
            }
    }


    // armazenando montante em um array e fazend soma para despesas
    banco.push(parseFloat(montante.value))
    console.log(banco)
    let soma = 0
    for(c = 0; c < banco.length; c++) {
        soma += Number(banco[c])
    }
    console.log(soma)

    form.reset()
    atualizarDespesas()
})

//despesas (preciso pegar a div pagas e percorrer todos os valores(classe montante) e dps somar todas elas)
function atualizarDespesas() {
    let inputReceita = document.getElementById('entradas').value
   
    banco.push(parseFloat(montante.value))
    let soma = 0
    for(c = 0; c < banco.length; c++) {
        soma += Number(banco[c])
    }
    
    let despesas = document.getElementById('despesas')
    despesas.innerText = soma
}