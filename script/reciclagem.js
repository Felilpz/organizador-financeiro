    // se todos os campos do formulario tiver preenchido, o form vai djonguear
    // console.log(`fonte: ${fonte.value}`)
    // console.log(`montante: ${montante.value}`)
    // console.log(`detalhes: ${detalhes.value}`)
    // console.log(`vencimento: ${vencimento.value}`)
    // console.log(`transacao: ${transacao.value}`)

    
    // if (vencimento.value == "") {
    //     window.alert(`Por favor, preencha o campo DATA DE NASCIMENTO`)
    //     return;
    // }

    
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

    // let vencimentoJS = document.createElement('p')
    // vencimentoJS.innerHTML = `${transacao.value}`
    // pagar.appendChild(vencimentoJS)

    
// adicionar entrada
// const addMoneyButton = document.getElementById('addMoney')

// addMoneyButton.addEventListener('click', function () {
//     const entradasSpan = document.getElementById('entradas')

//     let entradas = parseFloat(entradasSpan.textContent)

//     let novoSaldo = parseFloat(prompt("Digite o valor a ser acrescentado:"))

//     if (isNaN(novoSaldo) || novoSaldo < 0) {
//         alert('Por favor, digite um valor válido!')
//         return
//     }

//     let novoSaldoTotal = entradas + novoSaldo
//     entradasSpan.textContent = novoSaldoTotal.toFixed(2)
// });
