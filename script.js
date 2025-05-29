function validarFormulario() {
  const apellido = document.getElementById("apellido").value.trim();
  const nombre = document.getElementById("nombre").value.trim();
  const dni = document.getElementById("dni").value.trim();
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const email = document.getElementById("email").value.trim();

  const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  const soloNumeros = /^\d+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let errores = [];

  if (!soloLetras.test(apellido)) errores.push("Apellido no válido.");
  if (!soloLetras.test(nombre)) errores.push("Nombre no válido.");
  if (!soloNumeros.test(dni) || dni.length !== 8) errores.push("DNI no válido.");
  
  const fecha = new Date(fechaNacimiento);
  if (isNaN(fecha) || fecha.getFullYear() <= 2006) errores.push("Fecha de nacimiento no válida.");

  if (!emailRegex.test(email)) errores.push("Email no válido.");

  if (errores.length > 0) {
    alert("Errores:\n" + errores.join("\n"));
  } else {
    alert("Formulario válido.");
  }
}

function preguntar() {
  const nacionalidad = prompt("¿Cuál es tu nacionalidad?");
  const color = prompt("¿Cuál es tu color favorito?");
  const mascota = prompt("¿Cómo se llama tu mascota?");

  const div = document.getElementById("respuestas");
  div.innerHTML = `
    <p><strong>Nacionalidad:</strong> ${nacionalidad}</p>
    <p><strong>Color favorito:</strong> ${color}</p>
    <p><strong>Nombre de mascota:</strong> ${mascota}</p>
  `;
}
