const promt = require("prompt-sync")({ sigint: true });

// Array para almacenar tareas
let tareas = [];
let categoriasNombres = [
    "Trabajo",
    "Personal",
    // Agregar mas categorias si es necesario
];


// Funcion que Muestra todas las Categorias
function mostrarCategorias() {
    console.log("------CATEGORIAS------");
    categoriasNombres.forEach(function (categoria, indice) {
        console.log(indice + ": " + categoria);
    });
}


// Funcion para Cargar nuevas Categorias
function cargarCategoriaNueva(nombreCategoria) {
    categoriasNombres.push(nombreCategoria); // Agregamos la nueva categoria al arreglo
    console.log("Categoria Cargada Correctamente"); // Mensaje de Confirmacion
}


// Funcion para agregar tareas al arreglo
function agregarTarea(nombreRecibido, fechaLimiteRecibida = null) {

    mostrarCategorias();
    let numeroCategoria = parseInt(promt("Ingrese el Numero de la Categoria: "));

    if (numeroCategoria >= 0 && numeroCategoria < categoriasNombres.length) {
        tareas.push({
            nombre: nombreRecibido,
            completada: false,
            fechaLimite: fechaLimiteRecibida,
            categoria: numeroCategoria,
        });
    } else {
        console.log("Categoria Invalida");
    }
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
function modificarTarea(indice, nuevoNombreRecibido, nuevaFechaRecibida = null, nuevoNumeroCategoria) {

    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].nombre = nuevoNombreRecibido !== undefined ? nuevoNombreRecibido : tareas[indice].nombre; // Si el nuevo nombre no es undefined, se asigna el nuevo nombre, de lo contrario se mantiene el nombre actual
        tareas[indice].fechaLimite = nuevaFechaRecibida !== undefined ? nuevaFechaRecibida : tareas[indice].fechaLimite; // Si la nueva fecha no es undefined, se asigna la nueva fecha, de lo contrario se mantiene la fecha actual
        tareas[indice].categoria = nuevoNumeroCategoria !== undefined ? nuevoNumeroCategoria : tareas[indice].categoria; // Si la nueva categoria no es undefined, se asigna la nueva categoria, de lo contrario se mantiene la categoria actual
        console.log("Tarea Modificada Correctamente");
    } else {
        console.log("Indice de Tarea Invalido");
    }

}


// Funcion que Filtra tareas por Categoria
function filtrarTareasPorCategoria(numeroCategoria) {
    let tareasFiltradas = tareas.filter(function (tarea) {
        return tarea.categoria === numeroCategoria;
    });
    return tareasFiltradas;
}


// Funcion para mostrar Cuantas tareas tiene Completadas
function tareasCompletadasporCategoria(numeroCategoria) {
    let tareasCategoria = filtrarTareasPorCategoria(numeroCategoria);
    let tareasCompletadas = tareasCategoria.reduce(function (contador, tarea) {
        return tarea.completada ? contador + 1 : contador;
    }, 0);

    let tareasTotales = tareasCategoria.length;

    console.log("------TAREAS COMPLETADAS------");
    console.log("Tareas Completadas: " + numeroCategoria + ": " + tareasCompletadas + " de " + tareasTotales + " tareas.");
}


// Funcion para mostrar tareas pendientes
function tareasPendientes() {
    console.log("------TAREAS PENDIENTES------");
    tareas.forEach(function (tarea, indice) {
        if (!tarea.completada) {
            console.log("- Nombre:" + tarea.nombre + ", categoria: " + categoriasNombres[tarea.categoria]);
        }

    });
}


// Funcion Menu de Opciones
function mostrarMenu() {
    console.log("------MENU------");
    console.log("1. Agregar Tarea");
    console.log("2. Eliminar Tarea");
    console.log("3. Marcar Tarea Completada");
    console.log("4. Modificar Tarea");
    console.log("5. Mostrar Tareas");
    console.log("6. Ver Categorias");
    console.log("7. Agregar Categoria");
    console.log("8. Filtrar Tareas por Categoria");
    console.log("9. Tareas Completadas por Categoria");
    console.log("10. Tareas Pendientes");
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

                if (indice >= 0 && indice < tareas.length) {
                    console.log("------MODIFICAR TAREA------");
                    let opccion = parseInt(promt("¿Que Propiedad Desea Modificar? 1. Nombre 2. Fecha Limite 3. Categoria"));

                    switch (opccion) {
                        case 1:
                            let nuevoNombre = promt("Ingrese el Nuevo Nombre de la Tarea: ");
                            modificarTarea(indice, nuevoNombre);
                            break;

                        case 2:
                            let nuevaFecha = promt("Ingrese la Nueva Fecha Limite de la Tarea: ");
                            modificarTarea(indice, undefined, nuevaFecha);
                            break;

                        case 3:
                            mostrarCategorias();
                            let nuevaCategoria = parseInt(promt("Ingrese el Nuevo Numero de Categoria: "));
                            if (nuevaCategoria >= 0 && nuevaCategoria < categoriasNombres.length) {
                                modificarTarea(indice, undefined, undefined, nuevaCategoria);
                            }
                            break;

                        default:
                            console.log("Opcion Incorrecta");
                            break;
                    }

                } else {
                    console.log("Indice Invalido");
                }

                break;

            case 5:
                console.log("------LISTA DE TAREAS------");
                console.log(tareas);
                break;

            case 6:
                mostrarCategorias();
                break;

            case 7:
                let nombreCategoriaNueva = promt("Ingrese el Nombre de la Nueva Categoria: ");
                cargarCategoriaNueva(nombreCategoriaNueva);
                break;

            case 8:
                mostrarCategorias();
                let numeroCategoria = parseInt(promt("Ingrese el Numero de la Categoria: "));
                let tareasCategoria = filtrarTareasPorCategoria(numeroCategoria);

                console.log("------TAREAS DE LA CATEGORIA------");
                console.log(tareasCategoria);
                break;

            case 9:
                mostrarCategorias();
                let numeroCategoriaCompletadas = parseInt(promt("Ingrese el Numero de la Categoria: "));
                tareasCompletadasporCategoria(numeroCategoriaCompletadas);
                break;

            case 10:
                tareasPendientes();
                break;

            default:
                console.log("Opcion Incorrecta");
                break;
        }

    }
}

interactuarUsuario();