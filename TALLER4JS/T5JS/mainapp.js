import Contacto from './contacto.js';

let contactos = [];


const idInput = document.getElementById('identificacion');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const correoInput = document.getElementById('correo');
const celularInput = document.getElementById('celular');
const tablaBody = document.getElementById('tabla-body');


function limpiarCampos() {
  idInput.value = '';
  nombreInput.value = '';
  apellidoInput.value = '';
  correoInput.value = '';
  celularInput.value = '';
}


function mostrarContactos() {
  tablaBody.innerHTML = '';
  contactos.forEach(contacto => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${contacto.identificacion}</td>
      <td>${contacto.nombre}</td>
      <td>${contacto.apellido}</td>
      <td>${contacto.correo}</td>
      <td>${contacto.celular}</td>
    `;
    tablaBody.appendChild(fila);
  });
}

// Agregar contacto
document.getElementById('btnAgregar').addEventListener('click', () => {
  const id = idInput.value.trim();
  const nombre = nombreInput.value.trim();
  const apellido = apellidoInput.value.trim();
  const correo = correoInput.value.trim();
  const celular = celularInput.value.trim();

  if (!id || !nombre || !apellido || !correo || !celular) {
    alert('Todos los campos son obligatorios');
    return;
  }

  // Validar que no exista otro con el mismo ID
  if (contactos.some(c => c.identificacion === id)) {
    alert('Ya existe un contacto con esta identificación');
    return;
  }

  const nuevoContacto = new Contacto(id, nombre, apellido, correo, celular);
  contactos.push(nuevoContacto);
  mostrarContactos();
  limpiarCampos();
});

// Consultar contacto
document.getElementById('btnConsultar').addEventListener('click', () => {
  const id = idInput.value.trim();
  if (!id) {
    alert('Ingrese una identificación para consultar');
    return;
  }

  const contacto = contactos.find(c => c.identificacion === id);

  if (!contacto) {
    alert('Contacto no encontrado');
    return;
  }

  nombreInput.value = contacto.nombre;
  apellidoInput.value = contacto.apellido;
  correoInput.value = contacto.correo;
  celularInput.value = contacto.celular;
});

// Actualizar contacto
document.getElementById('btnActualizar').addEventListener('click', () => {
  const id = idInput.value.trim();
  const contacto = contactos.find(c => c.identificacion === id);

  if (!contacto) {
    alert('Contacto no encontrado para actualizar');
    return;
  }

  contacto.nombre = nombreInput.value.trim();
  contacto.apellido = apellidoInput.value.trim();
  contacto.correo = correoInput.value.trim();
  contacto.celular = celularInput.value.trim();

  mostrarContactos();
  limpiarCampos();
  alert('Contacto actualizado con éxito');
});

// Eliminar contacto
document.getElementById('btnEliminar').addEventListener('click', () => {
  const id = idInput.value.trim();
  const indice = contactos.findIndex(c => c.identificacion === id);

  if (indice === -1) {
    alert('Contacto no encontrado para eliminar');
    return;
  }

  contactos.splice(indice, 1);
  mostrarContactos();
  limpiarCampos();
  alert('Contacto eliminado con éxito');
});
