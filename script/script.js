let fonte = document.getElementById('credor')
let montante = document.getElementById('valor')
let detalhes = document.getElementById('detalhes')
let transacao = document.getElementById('transacao')
// let entrada = document.getElementById('entradaRadio')
// let saida = document.getElementById('radioSaida')
const divPai = document.getElementById('aPagar')
let banco = []

let title = document.getElementById('titulo')

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

    let radioValor = document.querySelector('input[name="radio"]:checked').value
    if (radioValor === "entrada") {
        const principal = document.getElementById('entradaID')
        const subPrincipal = document.createElement('div')
        subPrincipal.className = "item-2"

        let fonteEntrada = document.createElement('p')
        fonteEntrada.innerHTML = `${fonte.value}`
        subPrincipal.appendChild(fonteEntrada)

        let montanteEntrada = document.createElement('p')
        montanteEntrada.innerHTML = `${montante.value}`
        subPrincipal.appendChild(montanteEntrada)

        let detalhesEntrada = document.createElement('p')
        detalhesEntrada.innerHTML = `${detalhes.value}`
        subPrincipal.appendChild(detalhesEntrada)

        let transacaoEntrada = document.createElement('p')
        transacaoEntrada.innerHTML = `${transacao.value}`
        subPrincipal.appendChild(transacaoEntrada)

        principal.appendChild(subPrincipal)
    }

    if (radioValor === "saida") {
        const principal = document.getElementById('pagarID')
        const subPrincipal = document.createElement('div')
        subPrincipal.className = "item-2"

        let fonteSaida = document.createElement('p')
        fonteSaida.innerHTML = `${fonte.value}`
        subPrincipal.appendChild(fonteSaida)

        let montanteSaida = document.createElement('p')
        montanteSaida.innerHTML = `${montante.value}`
        subPrincipal.appendChild(montanteSaida)

        let detalhesSaida = document.createElement('p')
        detalhesSaida.innerHTML = `${detalhes.value}`
        subPrincipal.appendChild(detalhesSaida)

        let transacaoSaida = document.createElement('p')
        transacaoSaida.innerHTML = `${transacao.value}`
        subPrincipal.appendChild(transacaoSaida)

        subPrincipal.innerHTML += `<i class="bi bi-check2-all btn-check"></i>`

        principal.appendChild(subPrincipal)
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

escolherTela()
