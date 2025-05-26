document.addEventListener("DOMContentLoaded", function () {
    // Saludo dinámico
    const mensajeBienvenida = document.getElementById("mensaje-bienvenida");
    const horaActual = new Date().getHours();

    if (horaActual < 12) {
        mensajeBienvenida.textContent = "¡Buenos días! Bienvenido a nuestro sitio por favor disfruta de nuestro contenido.";
    } else if (horaActual < 18) {
        mensajeBienvenida.textContent = "¡Buenas tardes! Esperamos que disfrutes tu visita, continua explorando y aprendiendo.";
    } else {
        mensajeBienvenida.textContent = "¡Buenas noches! Gracias por visitarnos, esperanos haber sido de ayuda.";
    }

    document.addEventListener("DOMContentLoaded", function () {
        const desplegables = document.querySelectorAll(".menu-desplegable");
    
        // 💻 Activar menú con hover en escritorio
        desplegables.forEach(menu => {
            menu.addEventListener("mouseover", () => {
                const submenu = menu.querySelector(".submenu");
                submenu.style.display = "block";
            });
    
            menu.addEventListener("mouseout", () => {
                const submenu = menu.querySelector(".submenu");
                submenu.style.display = "none";
            });
        });
    
        // 📱 Alternativa para móviles: abrir con clic
        desplegables.forEach(menu => {
            menu.addEventListener("click", (event) => {
                event.preventDefault(); // Evita que el enlace redirija
                const submenu = menu.querySelector(".submenu");
                submenu.style.display = submenu.style.display === "block" ? "none" : "block";
            });
        });
    
        // ❌ Cerrar menú si el usuario toca fuera de él
        document.addEventListener("click", (event) => {
            desplegables.forEach(menu => {
                const submenu = menu.querySelector(".submenu");
                if (!menu.contains(event.target) && !submenu.contains(event.target)) {
                    submenu.style.display = "none";
                }
            });
        });
    });
})