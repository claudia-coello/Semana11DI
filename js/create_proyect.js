document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formProyecto");
    const previewImg = document.getElementById("previewImg");
    const imagenInput = document.getElementById("imagen");

    // Previsualizar imagen al seleccionar
    imagenInput.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewImg.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            previewImg.src = "";
        }
    });

    // Guardar proyecto
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Capturar datos del formulario
        const nuevoProyecto = {
            titulo: document.getElementById("titulo").value.trim(),
            descripcion: document.getElementById("descripcion").value.trim(),
            imagen: previewImg.src || ""
        };

        // Obtener proyectos existentes de localStorage
        let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];

        proyectos.push(nuevoProyecto);

        localStorage.setItem("proyectos", JSON.stringify(proyectos));

        alert("Proyecto creado con éxito!");

        window.location.href = "dashboard.html";
    });
});