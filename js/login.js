document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value.trim();

    //leer usuario
    const users = JSON.parse(localStorage.getItem("users")) || [];

    //buscar usuario o correo
    const userFound = users.find(
        u => (u.email === email || u.username === email) && u.password === password
    );

    console.log("Usuarios registrados: ", users);
    console.log("Usuarios registrados: ", email, password);

    if (!userFound) {
        alert("Usuario o contraseña incorrecto");
        return;
    }

    //guardar usuario actual
    localStorage.setItem("currentUser", JSON.stringify(userFound));

    alert("Login exitoso");
    window.location.href = "dashboard.html";
});

//Mostrar ocultar constraseña
document.getElementById("togglePass").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.textContent = "Ocultar contraseña";
    } else {
        passwordInput.type = "password";
        this.textContent = "Mostrar contraseña";
    }
});
