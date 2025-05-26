document.addEventListener("DOMContentLoaded", function () {
    const imagenes = ["Images/slider_i1.jpg", "Images/slider_i2.jpg", "Images/slider_i3.jpg"];
    let indice = 0;
    const imagenSlider = document.getElementById("slider-index");

    function cambiarImagen() {
        imagenSlider.src = imagenes[indice];
        indice = (indice + 1) % imagenes.length;
    }

    setInterval(cambiarImagen, 3000);
});