document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formProyecto");
    const previewImg = document.getElementById("previewImg");

    const imagenInput = document.getElementById("imagen");

    imagenInput.addEventListener("change", function () {
        const file = this.file[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewImg.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }else{
            previewImg.src = "";
        }
    })
});

//guardar el archivo
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nuevoProyecto = {
        titulo: document.getElementById("titulo").value.trim(),
        descripcion: document.getElementById("descripcion").value.trim(),
        imagen: previewImg.src || ""
    };

    let proyectos = JSON.parse(localStorage.getItem(proyectos)) || [];
    proyectos.push(nuevoProyecto);
    localStorage.setItem("proyectos", JSON.stringify(proyectos));

    alert("Proyecto creado con exito");
    window.location.href ="dashboard.html";
});