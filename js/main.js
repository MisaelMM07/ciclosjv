let numero = document.getElementById('numero');
let incrementa = document.getElementById('incrementa');
let decrementa = document.getElementById('decrementa');
let automatico = document.getElementById('automatico');
let configura = document.getElementById('configura');
let ejecuta = document.getElementById('ejecuta');

let valor;

incrementa.addEventListener('click', function () {
    valor = parseInt(numero.innerHTML, 10);
    numero.innerHTML = valor + 1;
    configura.style.visibility = 'hidden';
});

decrementa.addEventListener('click', function () {
    valor = parseInt(numero.innerHTML, 10);
    numero.innerHTML = valor - 1;
    configura.style.visibility = 'hidden';
});

automatico.addEventListener('click', function () {
    configura.style.visibility = 'visible';
});

ejecuta.addEventListener('click', function () {
    let minimo = parseInt(document.getElementById('minimo').value, 10);
    let maximo = parseInt(document.getElementById('maximo').value, 10);

    for (let i = 0; i <= maximo - minimo; i++) {
        setTimeout(() => {
            numero.innerHTML = i + minimo;
        }, 500 * i);
    }
});