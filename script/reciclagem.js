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

//marcar a "conta" como paga
let acaoBtns = document.querySelectorAll('.btn-check')

for (let c = 0; c < acaoBtns.length; c++) {
    let acaoBtn = acaoBtns[c]
    acaoBtn.addEventListener('click', function () {
        let resposta = confirm("Você tem certeza de que quer marcar a conta como PAGA?");
        console.log(resposta)
        if (resposta) {
            const contaPaga = this.parentElement // Encontra a div da conta atual
            // const contaPaga = document.querySelector('.item-2')
            // let valorUm = document.querySelector('.pegarValor').innerHTML
            // let valorDois = document.getElementById('disponivel').innerHTML
            // // console.log(atualizarConta.innerHTML - atualizarMontante.innerHTML)
            // let res = atualizarDespesa()
            // console.log(res)
            const pagasDiv = document.getElementById('pagasID')
            pagasDiv.appendChild(contaPaga)
        }

        let valorUm = document.querySelector('.pegarValor').innerHTML
        let valorDois = document.getElementById('disponivel').innerHTML
        // console.log(atualizarConta.innerHTML - atualizarMontante.innerHTML)
        
        //altera bloco despesas
        console.log(Math.abs(valorDois) - valorUm)
        let saidasInput = document.getElementById('despesas')
        saidasInput.textContent = Math.abs(valorDois) - valorUm

        //altera bloco disponivel
        let disponivel = document.getElementById('disponivel')
        disponivel.textContent = Math.abs(disponivel.innerHTML) - valorUm
    })
}

// retornar botão de pagar
// remover conta
// editar valor
// deixar o despesas vermelho se o valor for negativo

let fonte = document.getElementById('credor')
let montante = document.getElementById('valor')
let detalhes = document.getElementById('detalhes')
let transacao = document.getElementById('transacao')
// let entrada = document.getElementById('entradaRadio')
// let saida = document.getElementById('radioSaida')
const divPai = document.getElementById('aPagar')


//local storage
const main = document.getElementById('fourth')

let title = document.getElementById('titulo')

const form = document.querySelector('#form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (fonte.value == "") {
        window.alert(`Por favor, preencha o campo FONTE`)
        return
    }

    if (montante.value == "") {
        window.alert(`Por favor, preencha o campo MONTANTE`)
        return
    }

    if (detalhes.value == "") {
        window.alert(`Por favor, preencha o campo DETALHES`)
        return
    }

    if (transacao.value == "") {
        window.alert(`Por favor, preencha o campo TRANSACAO`)
        return
    }

    let radioValor = document.querySelector('input[name="radio"]:checked').value
    if (radioValor === "entrada") {
        const principal = document.getElementById('entradaID')
        const subPrincipal = document.createElement('div')
        subPrincipal.className = "item-2"

        let fonteEntrada = document.createElement('p')
        fonteEntrada.innerHTML = `${fonte.value}`
        subPrincipal.appendChild(fonteEntrada)

        let montanteEntrada = document.createElement('p')
        montanteEntrada.className = 'pegarValor'
        montanteEntrada.innerHTML = `${montante.value}`
        subPrincipal.appendChild(montanteEntrada)

        let detalhesEntrada = document.createElement('p')
        detalhesEntrada.innerHTML = `${detalhes.value}`
        subPrincipal.appendChild(detalhesEntrada)

        let transacaoEntrada = document.createElement('p')
        transacaoEntrada.innerHTML = `${transacao.value.split('-').reverse().join("/")}`
        subPrincipal.appendChild(transacaoEntrada)

        subPrincipal.innerHTML += `<i class="bi bi-check2-all btn-check"></i>`
        principal.appendChild(subPrincipal)

        //armazenar valor de entrada para fazer soma em "entrada"
        const valor = parseFloat(montante.value)
        saldo.push(valor)
    }

    if (radioValor === "saida") {
        const principal = document.getElementById('pagarID')
        const subPrincipal = document.createElement('div')
        // const subPrincipal2 = document.createElement('div')
        subPrincipal.className = "item-2"

        let fonteSaida = document.createElement('p')
        fonteSaida.innerHTML = `${fonte.value}`
        subPrincipal.appendChild(fonteSaida)
        // subPrincipal2.appendChild(fonteSaida)

        let montanteSaida = document.createElement('p')
        montanteSaida.className = 'pegarValor'
        montanteSaida.innerHTML = `${montante.value}`
        subPrincipal.appendChild(montanteSaida)
        // subPrincipal2.appendChild(montanteSaida)

        let detalhesSaida = document.createElement('p')
        detalhesSaida.innerHTML = `${detalhes.value}`
        subPrincipal.appendChild(detalhesSaida)
        // subPrincipal2.appendChild(detalhesSaida)

        let transacaoSaida = document.createElement('p')
        transacaoSaida.innerHTML = `${transacao.value.split('-').reverse().join("/")}`
        subPrincipal.appendChild(transacaoSaida)
        // subPrincipal2.append(transacaoSaida)



        subPrincipal.innerHTML += `<i class="bi bi-check-all btn-check"></i>`
        subPrincipal.innerHTML += `<i class="bi bi-pen-fill"></i>`
        subPrincipal.innerHTML += `<i class="bi bi-trash3-fill"></i>`
        principal.appendChild(subPrincipal)

        const valor = parseFloat(montante.value)
        banco.push(valor)
    }

    let acaoBtns = document.querySelectorAll('.btn-check');

    for (let i = 0; i < acaoBtns.length; i++) {
        let acaoBtn = acaoBtns[i];

        acaoBtn.addEventListener('click', function () {
            const contaPaga = this.parentElement; // Encontra a div da conta atual
            const pagasDiv = document.getElementById('pagasID');


            pagasDiv.appendChild(contaPaga);

            //ao inves de pegar o id do valor que tem no montante, pegar a soma dos vlaores do array e diminuir
            let numeroUm = document.getElementById('despesas').innerText
            let numeroDois = contaPaga.querySelector('.pegarValor').innerText
            let djonga = parseFloat(numeroUm) - parseFloat(numeroDois)


            document.getElementById('despesas').innerHTML = ''
            document.getElementById('despesas').innerHTML = djonga


            // atualizarSomas()
        });

        function atualizarSomas() {
            let banco = [] //saida
            let saldo = [] //entrada
            //saldo entrada
            let somaEntrada = 0
            for (let c = 0; c < saldo.length; c++) {
                somaEntrada += saldo[c]
                let entradasInput = document.getElementById('entradas')
                entradasInput.textContent = somaEntrada.toFixed(2)
            }

            //saldo saida
            let somaSaida = 0
            for (let c = 0; c < banco.length; c++) {
                somaSaida += banco[c]
                let saidasInput = document.getElementById('despesas')
                saidasInput.textContent = somaSaida.toFixed(2)
            }

            //saldo disponível
            let disponivel = document.getElementById('disponivel')
            let restante = (somaEntrada - somaSaida).toFixed(2)
            disponivel.textContent = restante
        }
    }

}

    // function atualizarSomas() {
    //     //saldo entrada
    //     let somaEntrada = 0
    //     for (let c = 0; c < saldo.length; c++) {
    //         somaEntrada += saldo[c]
    //         let entradasInput = document.getElementById('entradas')
    //         entradasInput.textContent = somaEntrada.toFixed(2)
    //     }

    //     //saldo saida
    //     let somaSaida = 0
    //     for (let c = 0; c < banco.length; c++) {
    //         somaSaida += banco[c]
    //         let saidasInput = document.getElementById('despesas')
    //         saidasInput.textContent = somaSaida.toFixed(2)
    //     }

    //     //saldo disponível
    //     let disponivel = document.getElementById('disponivel')
    //     let restante = (somaEntrada - somaSaida).toFixed(2)
    //     disponivel.textContent = restante
    // }

    // atualizarSomas()
    // // form.reset()
)
//saldo entrada
let somaEntrada = 0
for (let c = 0; c < saldo.length; c++) {
    somaEntrada += saldo[c]
    let entradasInput = document.getElementById('entradas')
    entradasInput.textContent = somaEntrada.toFixed(2)
}

//saldo saida
let somaSaida = 0
for (let c = 0; c < banco.length; c++) {
    somaSaida += banco[c]
    let saidasInput = document.getElementById('despesas')
    saidasInput.textContent = somaSaida.toFixed(2)
}

//saldo disponível
let disponivel = document.getElementById('disponivel')
let restante = (somaEntrada - somaSaida).toFixed(2)
disponivel.textContent = restante



function escolherTela() {
    // checar qual input radio está clicado e mostrar a tela
    let entradas = document.getElementsByName('chooseScreen')
    let titulo = document.getElementById('titulo')

    let pagasID = document.getElementById('pagasID')
    let pagarID = document.getElementById('pagarID')
    let entradaID = document.getElementById('entradaID')

    for (let i = 0; i < entradas.length; i++) {
        entradas[i].addEventListener('click', function () {
            for (let j = 0; j < entradas.length; j++) {
                if (entradas[j].checked) {
                    // titulo.innerHTML = entradas[j].value.toUpperCase();
                    // console.log(entradas[j].value)
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

escolherTela()