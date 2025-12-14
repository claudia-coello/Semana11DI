const formRegistro = document.getElementById("registroForm");

formRegistro.addEventListener("submit", function(e){
    e.preventDefault();

    const user = {
        nombres: document.getElementById("nombres").value,
        apellidos: document.getElementById("apellidos").value,
        cedula: document.getElementById("cedula").value,
        fecha: document.getElementById("fecha").value,
        email: document.getElementById("email").value,
        direccion: document.getElementById("direccion").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }
    console.log("Usuario creado", user);

    //leer usuarios previos
    const users = JSON.parse(localStorage.getItem("users")) || [];

    //agregar el nuevo usuario
    users.push(user);

    //guardar en el local storage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registro exitoso. Ahora puedes iniciar sesion");
    window.location.href = "login.html"

})