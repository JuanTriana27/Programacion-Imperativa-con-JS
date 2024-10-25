const promt = require("prompt-sync")({ sigint: true });

// Array para almacenar tareas
let tareas = [];

// Funcion para agregar tareas al arreglo
function agregarTarea(nombreRecibido, fechaLimiteRecibida = null) {
    tareas.push({
        nombre: nombreRecibido,
        completada: false,
        fechaLimite: fechaLimiteRecibida,
    });
}

// Funcion para eliminar tarea
function eliminarTarea(indice) {

    if (indice >= 0 && indice < tareas.length) {
        tareas.splice(indice, 1);
        console.log("Tarea Eliminada Correctamente");
    } else {
        console.log("Indice de Tarea Invalido");
    }

}

// Funcion para marcar tarea como completada
function completarTarea(indice) {

    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].completada = true;
        console.log("Tarea Marcada Correcta")
    } else {
        console.log("Indice de Tarea Invalido");
    }

}

// Funcion para modificar Tarea
function modificarTarea(indice, nuevoNombreRecibido, nuevaFechaRecibida = null) {

    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].nombre = nuevoNombreRecibido;

        if (nuevaFechaRecibida !== null) {
            tareas[indice].fechaLimite = nuevaFechaRecibida;
        }
        console.log("Tarea Modificada Correctamente");
    } else {
        console.log("Indice de Tarea Invalido");
    }

}

// Funcion Menu de Opciones
function mostrarMenu() {
    console.log("------MENU------");
    console.log("1. Agregar Tarea");
    console.log("2. Eliminar Tarea");
    console.log("3. Marcar Tarea Completada");
    console.log("4. Modificar Tarea");
    console.log("5. Mostrar Tareas");
    console.log("0. Salir");
}

// Funcion para Interactuar con User
function interactuarUsuario() {
    let op = -1;

    while (op != 0) {
        //Llamamos a la funcion menu
        mostrarMenu();

        //Usuario Ingresa Opcion
        op = parseInt(promt("Ingrese Una Opcion: "));

        switch (op) {
            case 1:
                let nombreTareaNueva = promt("Ingrese el Nombre de la Nueva Tarea: ");
                agregarTarea(nombreTareaNueva);
                break;

            case 2:
                let indiceEliminar = promt("Ingrese el Indice de la Tarea a Eliminar: ");
                eliminarTarea(indiceEliminar);
                break;

            case 3:
                let marcarCompletada = parseInt(promt("Ingrese el Indice de la Tarea a Completar: "));
                completarTarea(marcarCompletada);
                break;

            case 4:
                let indice = parseInt(promt("Ingrese Indice a Modificar"));
                let nuevoNombre = promt("Ingrese el Nuevo nombre de su Tarea: ");
                modificarTarea(indice, nuevoNombre);
                break;

            case 5:
                console.log("------LISTA DE TAREAS------");
                console.log(tareas);
                break;

            default:
                console.log("Opcion Incorrecta");
                break;
        }

    }
}

interactuarUsuario();