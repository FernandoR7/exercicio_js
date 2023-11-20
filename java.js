function validarFormulario() {
    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;

    // Convertendo os valores para números
    campoA = parseFloat(campoA);
    campoB = parseFloat(campoB);

    var formulario = document.getElementById('meuFormulario');

    if (isNaN(campoA) || isNaN(campoB)) {
        alert('Por favor, insira números válidos em ambos os campos.');
    } else {
        if (campoB > campoA) {
            alert('Formulário válido! B é maior que A.');
        } else {
            alert('Formulário inválido! B deve ser maior que A.');
        }
    }
}
function validarFormulario() {
    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;

    campoA = parseFloat(campoA);
    campoB = parseFloat(campoB);

    var formulario = document.getElementById('meuFormulario');
    var mensagemElemento = document.getElementById('mensagem');

    if (isNaN(campoA) || isNaN(campoB)) {
        mensagemElemento.textContent = 'Por favor, insira números válidos em ambos os campos.';
        mensagemElemento.className = 'mensagem-invalida';
    } else {
        if (campoB > campoA) {
            mensagemElemento.textContent = 'Formulário válido! B é maior que A.';
            mensagemElemento.className = 'mensagem-valida';
        } else {
            mensagemElemento.textContent = 'Formulário inválido! B deve ser maior que A.';
            mensagemElemento.className = 'mensagem-invalida';
        }
    }
}