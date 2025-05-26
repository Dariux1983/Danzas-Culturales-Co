document.addEventListener("DOMContentLoaded", function () {
    const imagenes = ["Images/slider_a1.jpg", "Images/slider_a2.jpg", "Images/slider_a3.jpg"];
    let indice = 0;
    const imagenSlider = document.getElementById("slider-andina");

    function cambiarImagen() {
        imagenSlider.src = imagenes[indice];
        indice = (indice + 1) % imagenes.length;
    }

    setInterval(cambiarImagen, 3000);
});