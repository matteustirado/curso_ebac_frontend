const form = document.getElementById('form');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');

const campoAErro = document.querySelector('.campo-a-erro');
const campoBErro = document.querySelector('.campo-b-erro');
const messageNone = document.querySelector('.message-none');
const messageN = document.querySelector('.message-n');
const messageP = document.querySelector('.message-p');

const isNumber = (value) => {
    return !isNaN(value) && value.trim() !== '';
};

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    campoAErro.style.display = 'none';
    campoBErro.style.display = 'none';
    messageNone.style.display = 'none';
    messageN.style.display = 'none';
    messageP.style.display = 'none';

    const valorA = campoA.value.trim();
    const valorB = campoB.value.trim();

    let formsValido = true;

    if (valorA !== '' && !isNumber(valorA)) {
        campoAErro.style.display = 'flex';
        formsValido = false;
    }

    if (valorB !== '' && !isNumber(valorB)) {
        campoBErro.style.display = 'flex';
        formsValido = false;
    }

    if (valorA === '' || valorB === '') {
        messageNone.style.display = 'flex';
        campoAErro.style.display = 'none';
        campoBErro.style.display = 'none';
        formsValido = false;
    }

    if (isNumber(valorA) && isNumber(valorB)) {
        if (parseFloat(valorA) > parseFloat(valorB)) {
            messageN.style.display = 'flex';
            formsValido = false;
        }
    }

    if (formsValido && parseFloat(valorB) > parseFloat(valorA)) {
        messageP.style.display = 'flex';
    }
});
