// retornar botão de pagar
// remover conta
// editar valor
// deixar o despesas vermelho se o valor for negativo
let banco = [] //saida
let saldo = [] //entrada

let fonte = document.getElementById('credor')
let montante = document.getElementById('valor')
let detalhes = document.getElementById('detalhes')
let transacao = document.getElementById('transacao')
// let entrada = document.getElementById('entradaRadio')
// let saida = document.getElementById('radioSaida')
const divPai = document.getElementById('aPagar')

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
        atualizarEntrada()
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
        atualizarSaida()
    }

    let acaoBtns = document.querySelectorAll('.btn-check');

    for (let i = 0; i < acaoBtns.length; i++) {
        let acaoBtn = acaoBtns[i];

        acaoBtn.addEventListener('click', function () {
            const contaPaga = this.parentElement; // Encontra a div da conta atual
            const pagasDiv = document.getElementById('pagasID');
            pagasDiv.appendChild(contaPaga);

            //ao inves de pegar o id do valor que tem no montante, pegar a soma dos vlaores do array e diminuir
            let first = document.getElementById('despesas').innerText
            let second = document.querySelector('.pegarValor').innerHTML
            // console.log(first, second)
            for (let i = 0; i < second.length; i++) {
                let calculo = parseFloat(first) - parseFloat(second)
                console.log(calculo)
                // console.log(tentativa)
                atualizarSomas();
                return acaoBtn
            }


        });
    }
}
)

//se for entrada
const divEntrada = document.getElementById('entradaID')
const divs = divEntrada.querySelectorAll('.pegarValor');
let totalEntrada = 0;
function atualizarEntrada() {
        let valores = document.querySelectorAll('.pegarValor')
        let total = 0

        for(let i = 0; i < valores.length; i++) {
            let valor = parseFloat(valores[i].textContent)
            total += valor
        }
        document.getElementById('entradas').textContent = total.toFixed(2)
}

//se for saida
const divSaida = document.getElementById('entradaID')
const divs2 = divSaida.querySelectorAll('.pegarValor');
let totalSaida = 0;
function atualizarSaida() {
        let valores = document.querySelectorAll('.pegarValor')
        let total = 0

        for(let i = 0; i < valores.length; i++) {
            let valor = parseFloat(valores[i].textContent)
            total += valor
        }
        document.getElementById('despesas').textContent = total.toFixed(2)
}

//se for disponivel
let n1 = document.getElementById('entradaID')
let n2 = document.getElementById('despesas')
let calculo = parseFloat(n1) - parseFloat(n2)
document.getElementById('disponivel').textContent = calculo


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

// desisti. tentar qnd tiver mais conheecimento.
// motivo? nao consegui atualizar valores nos displays
// quando adicionava uma conta, o valor nao subtraia da maneira certa e o valor nao atualizava do mesmo jeito no display
// conflito de div (pegava os dados da div entrada dps da saida etc)