const formulario = document.getElementById('formulario');
const inputComida = document.getElementById('tipoComida');
const inputSabor = document.getElementById('sabor');
const tabelaCardapio = document.getElementById('cardapio');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const comida = inputComida.value;
    const sabor = inputSabor.value;

    const novaLinha = document.createElement('tr');
    const celulaComida = document.createElement('td');
    const celulaSabor = document.createElement('td');

    celulaComida.textContent = comida;
    celulaSabor.textContent = sabor;

    novaLinha.appendChild(celulaComida);
    novaLinha.appendChild(celulaSabor);
    tabelaCardapio.appendChild(novaLinha);

    formulario.reset();
    inputComida.focus();
});