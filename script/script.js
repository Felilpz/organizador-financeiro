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
    console.log(`fonte: ${fonte.value}`)
    console.log(`montante: ${montante.value}`)
    console.log(`detalhes: ${detalhes.value}`)
    console.log(`vencimento: ${vencimento.value}`)
    console.log(`transacao: ${transacao.value}`)

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
})


const addMoney = document.getElementById('addMoney')
addMoney.addEventListener('click', (event) => {
    event.preventDefault()
    let valorAdicional = window.prompt("O valor será acrescentado ao saldo. Digite o valor:")
    let saldoAtual = document.getElementById('valorCheio')
    console.log(valorAdicional)
})