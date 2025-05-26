document.addEventListener("DOMContentLoaded", function () {
    const imagenes = ["images/slider_i1.jpg", "images/slider_i2.jpg", "images/slider_i3.jpg"];
    let indice = 0;
    const imagenSlider = document.getElementById("slider-index");

    function cambiarImagen() {
        imagenSlider.src = imagenes[indice];
        indice = (indice + 1) % imagenes.length;
    }

    setInterval(cambiarImagen, 3000);
});