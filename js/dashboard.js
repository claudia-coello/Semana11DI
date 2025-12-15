const tabla = document.querySelector("$tablaProyectos tbody");
const proyectos = JSON.parse(localStorage.getItem()) || [];

document.getElementById("proyectosCount").textContent = proyectos.length + "registrados";

if(proyectos.length ===0){
    tabla.innerHTML = `
    <tr><td colspan="4" style="text-align: center; color: gray;">No hay proyectos registrados</td></tr>
    `;
}else{
    tabla.innerHTML = proyectos.map((proyecto, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${proyecto.titulo}</td>
            <td>${proyecto.descripcion}</td>
            <td><img src="${proyecto.imagen}" alt="" width="80"></td>
        </tr>
    `).join("");
}

