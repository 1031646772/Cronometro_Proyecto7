const botonI = document.querySelector('.botonIniciar');
const botonD = document.querySelector('.botonDetener');
const botonR = document.querySelector('.botonReiniciar');
let hr = mn = seg = mis = "0" + 0, IniciarTiempo;

function iniciar() {
    botonI.classList.add("on");
    IniciarTiempo = setInterval(() => {
        mis++;
        mis = mis < 10 ? "0" + mis : mis;

        if (mis == 99) {
            seg++;
            seg = seg < 10 ? "0" + seg : seg;
            mis = "0" + 0;
        }
        if (seg == 60) {
            mn++;
            mn = mn < 10 ? "0" + mn : mn;
            seg = "0" + 0;
        }
        if (mn == 60) {
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            mn = "0" + 0;
        }
        ingresarValor();
    }, 10);
}

function detener() {
    botonI.classList.remove("on");
    clearInterval(IniciarTiempo);
}

function reiniciar() {
    botonI.classList.remove("on");
    clearInterval(IniciarTiempo);
    hr = mn = seg = mis = "0" + 0;
    ingresarValor();
}

function ingresarValor() {
    document.querySelector('.milisegundo').innerHTML = mis;
    document.querySelector('.segundo').innerHTML = seg;
    document.querySelector('.minuto').innerHTML = mn;
    document.querySelector('.hora').innerHTML = hr;
}

botonI.addEventListener("click", iniciar);
botonD.addEventListener("click", detener);
botonR.addEventListener("click", reiniciar);