const btn = document.getElementById('botao')

let fonte = document.getElementById('credor')
let montante = document.getElementById('valor')
let detalhes = document.getElementById('detalhes')
let vencimento = document.getElementById('vencimento')
let transacao = document.getElementById('transacao')


// btn.addEventListener('click', function() {

//     // console.log(`fonte: ${fonte.value}`)
//     // console.log(`montante: ${montante.value}`)
//     // console.log(`detalhes: ${detalhes.value}`)
//     // console.log(`vencimento: ${vencimento.value}`)
//     // console.log(`transacao: ${transacao.value}`)

//     const pagar = document.createElement('div')
//     pagar.className = "item-2"

//     let fonteJS = document.createElement('p')
//     fonteJS.innerHTML = `${fonte.value}`
//     pagar.appendChild(fonteJS)

//     let montanteJS = document.createElement('p')
//     montanteJS.innerHTML = `R$ ${montante.value}`
//     pagar.appendChild(montanteJS)

//     let detalhesJS = document.createElement('p')
//     detalhesJS.innerHTML = `${detalhes.value}`
//     pagar.appendChild(detalhesJS)

//     let vencimentoJS = document.createElement('p')
//     vencimentoJS.innerHTML = `${transacao.value}`
//     pagar.appendChild(vencimentoJS)

//     let transacaoJS = document.createElement('p')
//     transacaoJS.innerHTML = `${vencimento.value}`
//     pagar.appendChild(transacaoJS)

//     pagar.innerHTML += `<i class="bi bi-check2-all btn-check"></i>`

//     const divPai = document.getElementById('aPagar')
//     divPai.appendChild(pagar)
// })


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

    if (vencimento.value == "") {
        window.alert(`Por favor, preencha o campo DATA DE NASCIMENTO`)
        return;
    }

    if (transacao.value == "") {
        window.alert(`Por favor, preencha o campo TRANSACAO`)
        return;
    }

    // se todos os campos do formulario tiver preenchido, o form vai djonguear
    // console.log(`fonte: ${fonte.value}`)
    // console.log(`montante: ${montante.value}`)
    // console.log(`detalhes: ${detalhes.value}`)
    // console.log(`vencimento: ${vencimento.value}`)
    // console.log(`transacao: ${transacao.value}`)

    const pagar = document.createElement('div')
    pagar.className = "item-2"

    let fonteJS = document.createElement('p')
    fonteJS.innerHTML = `${fonte.value}`
    pagar.appendChild(fonteJS)

    let montanteJS = document.createElement('p')
    montanteJS.innerHTML = `R$ ${montante.value}`
    pagar.appendChild(montanteJS)

    let detalhesJS = document.createElement('p')
    detalhesJS.innerHTML = `${detalhes.value}`
    pagar.appendChild(detalhesJS)

    let vencimentoJS = document.createElement('p')
    vencimentoJS.innerHTML = `${transacao.value}`
    pagar.appendChild(vencimentoJS)

    let transacaoJS = document.createElement('p')
    transacaoJS.innerHTML = `${vencimento.value}`
    pagar.appendChild(transacaoJS)

    pagar.innerHTML += `<i class="bi bi-check2-all btn-check"></i>`

    const divPai = document.getElementById('aPagar')
    divPai.appendChild(pagar)
    atualizarDespesas();
})


//adicionar entrada
const addMoneyButton = document.getElementById('addMoney')

addMoneyButton.addEventListener('click', function () {
    const entradasSpan = document.getElementById('entradas')

    let entradas = parseFloat(entradasSpan.textContent)

    let novoSaldo = parseFloat(prompt("Digite o valor a ser acrescentado:"))

    if (isNaN(novoSaldo) || novoSaldo < 0) {
        alert('Por favor, digite um valor válido!')
        return
    }

    let novoSaldoTotal = entradas + novoSaldo
    entradasSpan.textContent = novoSaldoTotal.toFixed(2)
});


//despesas (preciso pegar a div pagas e percorrer todos os valores(classe montante) e dps somar todas elas)
function atualizarDespesas() {
    const pagas = document.getElementById('pagas');
    let contas = pagas.getElementsByClassName('montante');

    let despesasTotal = 0;

    for (let i = 0; i < contas.length; i++) {
        let pegarValor = contas[i].textContent;

        if (!isNaN(pegarValor)) {
            let convertido = parseFloat(pegarValor);
            despesasTotal += convertido;
        }
    }

    let valorTotalElement = document.getElementById('valorTotal');
    if (valorTotalElement) {
        valorTotalElement.textContent = despesasTotal.toFixed(2);
    }
    console.log(despesasTotal)
}

// Aguarde o carregamento completo do documento
document.addEventListener('DOMContentLoaded', function() {
    // Chame a função para atualizar as despesas
    atualizarDespesas();
});
