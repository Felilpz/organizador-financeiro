const btn = document.getElementById('botao')

let fonte = document.getElementById('credor').value
let montante = Number(document.getElementById('valor').value)
let detalhes = String(document.getElementById('valor'))


btn.addEventListener('click', function() {
    
    console.log(fonte, montante, detalhes)

})