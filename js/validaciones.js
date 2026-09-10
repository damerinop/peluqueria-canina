// Array para Comunas dinámicas por Región
const comunasPorRegion = {
    "metropolitana": ["Maipú", "Santiago", "Providencia", "Puente Alto"],
    "valparaiso": ["Valparaíso", "Viña del Mar", "Quilpué"]
};

// Cargar comunas según la región seleccionada
function cargarComunas() {
    const regionSelect = document.getElementById("region");
    const comunaSelect = document.getElementById("comuna");
    const regionSeleccionada = regionSelect.value;

    comunaSelect.innerHTML = '<option value="">Seleccione una comuna</option>';

    if (regionSeleccionada && comunasPorRegion[regionSeleccionada]) {
        comunasPorRegion[regionSeleccionada].forEach(comuna => {
            const option = document.createElement("option");
            option.value = comuna.toLowerCase();
            option.textContent = comuna;
            comunaSelect.appendChild(option);
        });
    }
}

// Validación de inicio de sesión / contacto
function validarLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Dominios permitidos
    const dominios = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];
    const dominioValido = dominios.some(domain => email.endsWith(domain));

    if (!dominioValido) {
        alert("El correo debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com");
        return false;
    }

    if (password.length < 4 || password.length > 10) {
        alert("La contraseña debe tener entre 4 y 10 caracteres.");
        return false;
    }

    alert("¡Ingreso exitoso!");
    return true;
}

// Validación de Registro
function validarRegistro(event) {
    event.preventDefault();
    const run = document.getElementById("run").value;
    
    // Validar RUN sin puntos ni guión (entre 7 y 9 caracteres)
    const runRegex = /^[0-9]{7,8}[0-9kK]{1}$/;
    if (!runRegex.test(run)) {
        alert("El RUN debe ser sin puntos ni guión, por ejemplo: 19011022K");
        return false;
    }

    alert("¡Registro completado con éxito!");
    return true;
}