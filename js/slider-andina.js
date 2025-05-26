document.addEventListener("DOMContentLoaded", function () {
    const imagenes = ["images/slider_a1.jpg", "images/slider_a2.jpg", "images/slider_a3.jpg"];
    let indice = 0;
    const imagenSlider = document.getElementById("slider-andina");

    function cambiarImagen() {
        imagenSlider.src = imagenes[indice];
        indice = (indice + 1) % imagenes.length;
    }

    setInterval(cambiarImagen, 3000);
});