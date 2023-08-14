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

// function atualizarDespesa() {
//     let divsFilhas = divPai.querySelectorAll('.valores');
//     let soma = 0;

//     divsFilhas.forEach(function(divFilha) {
//         let valor = parseFloat(divFilha.textContent);
//         if(!isNaN(valor)) {
//             soma += valor;
//         }
//     });

//     console.log('Soma dos valores:', soma);
// }

function atualizarDespesa() {
    let banco = [];
    banco.push(montante.innerText)
    console.log(banco)
}

function atualizarDespesa() {
    let banco = [];
    let montanteInput = document.getElementById('montante');
    
    if (montanteInput) {
        banco.push(montanteInput.value);
        console.log(banco);
    } else {
        console.log("Elemento 'montante' não encontrado.");
    }
}

    // armazenando montante em um array e fazend soma para despesas
    banco.push(parseFloat(montante.value))
    console.log(banco)
    let soma = 0
    for (c = 0; c < banco.length; c++) {
        soma += Number(banco[c])
    }

    //marcar a "conta" como paga
    let acaoBtns = document.querySelectorAll('.btn-check');

    for (let i = 0; i < acaoBtns.length; i++) {
        let acaoBtn = acaoBtns[i];

        acaoBtn.addEventListener('click', function () {
            let resposta = confirm("Você tem certeza de que quer marcar a conta como PAGA?");

            if (resposta) {
                const contaPaga = this.parentElement; // Encontra a div da conta atual
                const pagasDiv = document.getElementById('pagasID');
                pagasDiv.appendChild(contaPaga);
            }
        });
    }


    function escolherTela() {
        // checar qual input radio está clicado e mostrar a tela
        let entradas = document.getElementsByName('chooseScreen')
        let titulo = document.getElementById('titulo')
    
        let pagasID = document.getElementById('pagasID')
        let pagarID = document.getElementById('pagarID')
        let entradaID = document.getElementById('entradaID')
    
        for (let i = 0; i < entradas.length; i++) {
            entradas[i].addEventListener('change', function () {
                for (let j = 0; j < entradas.length; j++) {
                    if (entradas[j].checked) {
                        // titulo.innerHTML = entradas[j].value.toUpperCase();
                        console.log(entradas[j].value)
                        // break;
                        if (entradas[j].value == 'Entradas') {
                            entradaID.style.display = 'block'
                            pagasID.style.display = 'none'
                            pagarID.style.display = 'none'
                        } else if (entradas[j].value == 'Pagar') {
                            entradaID.style.display = 'none'
                            pagasID.style.display = 'none'
                            pagarID.style.display = 'block'
                        } else {
                            entradaID.style.display = 'none'
                            pagasID.style.display = 'block'
                            pagarID.style.display = 'none'
                        }
                    }
                }
            });
        }
    
    }


    let acaoBtns = document.querySelector('.btn-check')

    for (let i = 0; i < acaoBtns.length; i++) {
        let acaoBtn = acaoBtns[i];
        console.log(acaoBtn)

        acaoBtns.addEventListener('click', function () {
            let resposta = confirm("Você tem certeza de que quer marcar a conta como PAGA?");

            if (resposta == true) {
                const contaPaga = this.parentElement // Encontra a div da conta atual
                const pagasDiv = document.getElementById('pagasID')
                pagasDiv.appendChild(contaPaga)
            }
        })
     }
})



//despesas (preciso pegar a div pagas e percorrer todos os valores(classe montante) e dps somar todas elas)
// function atualizarDespesas() {
//     let inputReceita = document.getElementById('entradas').value

//     banco.push(parseFloat(montante.value))
//     let soma = 0
//     for (c = 0; c < banco.length; c++) {
//         soma += Number(banco[c])
//     }

//     let despesas = document.getElementById('despesas')
//     despesas.innerText = soma
//     localStorage.setItem("projetoFinanca", main.innerHTML)
// }