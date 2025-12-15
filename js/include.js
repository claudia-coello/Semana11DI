document.addEventListener("DOMContentLoaded", ()=>
{
    const file=el.getAtribute("data.include");

    fetch(file)
        .then(response => response.text())
        .then(html => {
            el.innerHTML = html;
        })
        .catch(err => {
            el.innerHTML = '<p style="color:red">Error cargando ${file}</p>';
        })
});