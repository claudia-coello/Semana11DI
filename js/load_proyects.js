document.addEventListener("DOMContentLoaded", ()=> {
    const tbody = document.querySelector("$tablaProyect tbody");
    const countText = document.getElementById("proyectosCount");

    let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];

    //actualizar contador
    countText.textContent = `${proyectos.length} registrados`;

    //limpiar tabla
    tbody.innerHTML = "<th></th>";

    proyectos.forEach((proyecto, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td> 
            <td>${proyecto.titulo}</td> 
            <td>${proyecto.descripcion}</td> 
            <td><img src="${proyecto.imagen} width="70"></td>
        `;
        tbody.appendChild(tr);
    });
});