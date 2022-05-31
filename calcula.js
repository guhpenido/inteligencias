function calcula() {
    let voltasInput = document.getElementById("voltas");
    let distanciaInput = document.getElementById("distancia");
    let paradasInput = document.getElementById("paradas");

    let distanciaPercorrida = voltasInput.value * 2;
    let paradasTotal = voltasInput.value / 2;

    if (voltasInput.value < 0) {
        alert("Digite algum valor válido!");
    } else {
        paradasInput.value = "Helena deu " + paradasTotal + " paradas.";
        distanciaInput.value = "Helena percorreu " + distanciaPercorrida + " KM a cavalo.";
    }
};

function reseta() {
    window.location.replace("https://guhpenido.github.io/inteligencias/");
}
