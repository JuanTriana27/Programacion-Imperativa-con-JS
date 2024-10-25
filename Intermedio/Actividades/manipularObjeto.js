// Creamos el Objeto
let persona = {
    nombre: "Juan Esteban",
    edad: 22,
    ocupacion: "Estudiante",
    habilidad: "Ninguna",
    ubicacion: {
        codigoPostal: "760001",
        ciudad: "Cali",
        calle: "44",
        numero: "14-57"
    }
};

// Eliminar una Porpiedad
function eliminarPropiedad(objeto, propiedad) {
    switch (propiedad) {
        //segun el caso, se elimina la propeidad
        case 'nombre':
            delete objeto.nombre;
            break;
        case 'edad':
            delete objeto.edad;
            break;
        case 'ocupacion':
            delete objeto.ocupacion;
            break;
        case 'habilidad':
            delete objeto.habilidad;
            break;
        case 'codigoPostal':
            delete objeto.ubicacion;
            break;
        case 'ciudad':
            delete objeto.ubicacion.ciudad;
            break;
        case 'calle':
            delete objeto.ubicacion.calle;
            break;
        case 'numero':
            delete objeto.ubicacion.numero;
            break;
        default:
            console.log("Opción no válida");
            break;
    }
}

// Cambiamos ocupación
persona.ocupacion = "Trabajador";

eliminarPropiedad(persona, "numero");
console.log(persona);

