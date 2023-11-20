const form = document.getElementById('meuFormulario');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita a atualização da página ao enviar o formulário

    // Restante do código
    validarFormulario();
});

function validarFormulario() {
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);

    if (isNaN(campoA) || isNaN(campoB)) {
        exibirMensagem('Por favor, insira números válidos em ambos os campos.', 'mensagem-invalida');
    } else {
        if (campoB > campoA) {
            exibirMensagem('Formulário válido! B é maior que A.', 'mensagem-valida');
        } else {
            exibirMensagem('Formulário inválido! B deve ser maior que A.', 'mensagem-invalida');
        }
    }
}

function exibirMensagem(mensagem, classe) {
    var mensagemElemento = document.getElementById('mensagem');
    mensagemElemento.textContent = mensagem;
    mensagemElemento.className = classe;
}