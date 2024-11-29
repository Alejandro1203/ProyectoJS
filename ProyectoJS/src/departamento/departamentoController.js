function datosJSON() {
    fetch('../assets/departamentos.json').then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }

        return response.json();
    }).then(datos => {
        cargarDatosEnTabla(datos);
    }).catch(error => console.error('Hubo un problema con la solicitud fetch:', error));
}

function cargarDatosEnTabla(datosJSON) {
    const tabla = document.getElementsByClassName('tbody')[0];
    
    datosJSON.forEach(dato => {
        const fila = document.createElement('tr');
        
        const celdaId = document.createElement('td');
        celdaId.textContent = dato.id;
        
        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = dato.name;
        
        const celdaUbicacion = document.createElement('td');
        celdaUbicacion.textContent = dato.ubicacion;

        fila.appendChild(celdaId);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaUbicacion);

        tabla.appendChild(fila);
    });
}

window.onload = datosJSON;