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

    if (entrada.checked) {
        const principal = document.createElement('div')
        principal.className = 'item-2'

        let fonteEntrada = document.createElement('p')
        fonteEntrada.innerHTML = `${fonte.value}`
        principal.appendChild(fonteEntrada)

        let montanteEntrada = document.createElement('p')
        montanteEntrada.innerHTML = `${montante.value}`
        principal.appendChild(montanteEntrada)

        let detalhesEntrada = document.createElement('p')
        detalhesEntrada.innerHTML = `${detalhes.value}`
        principal.appendChild(detalhesEntrada)

        let transacaoEntrada = document.createElement('p')
        transacaoEntrada.innerHTML = `${transacao.value}`
        principal.appendChild(transacaoEntrada)

        principal.innerHTML += `<i class="bi bi-check2-all btn-check"></i>`

        const pai = document.getElementById('aPagar')
        pai.appendChild(principal)
    } else {
        const principal = document.createElement('div')
        principal.className = "item-2"

        let fonteSaida = document.createElement('p')
        fonteSaida.innerHTML = `${fonte.value}`
        principal.appendChild(fonteSaida)

        let montanteSaida = document.createElement('p')
        montanteSaida.innerHTML = `R$ ${montante.value}`
        principal.appendChild(montanteSaida)

        let detalhesSaida = document.createElement('p')
        detalhesSaida.innerHTML = `${detalhes.value}`
        principal.appendChild(detalhesSaida)

        let transacaoSaida = document.createElement('p')
        transacaoSaida.innerHTML = `${transacao.value}`
        principal.appendChild(transacaoSaida)

        principal.innerHTML += `<i class="bi bi-check2-all btn-check"></i>`

        const divPai = document.getElementById('aPagar')
        divPai.appendChild(principal)
    }

    // armazenando montante em um array e fazend soma para despesas
    banco.push(parseFloat(montante.value))
    console.log(banco)
    let soma = 0
    for (c = 0; c < banco.length; c++) {
        soma += Number(banco[c])
    }
})

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
    var title = document.getElementById("title");

    if (document.getElementById('entradasId').checked){
        title.innerText = "ENTRADAS";
        console.log('Entrada');
    } else if (document.getElementById('pegarId').checked) {
        title.innerText = "PAGAR";
        console.log('Pagar');
    } else {
        title.innerText = "PAGAS";
        console.log('Pagas');
    }
}

window.onload = function() {
    escolherTela();
};