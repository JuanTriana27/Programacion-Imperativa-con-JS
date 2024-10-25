//Crear Objeto
let persona = {
    nombre: "Juan Esteban",
    apellido: "Triana Gonzalez",
    edad: 22,
    coloresFavoritos: ["Verde", "Rojo", "Azul"],
    identificacion: 1000064883,

    saludar: function () {
        return "Hola a Todos, soy " + this.nombre;
    }
};

persona.nombre = "Natalia"

//Acceder a las Propiedades de un Objeto
console.log(persona.coloresFavoritos[1]);

//Cargar Nueva Propiedad
persona.deporteFavorito = "Futbol";
persona.edad = 23;

//Eliminar una Propiedad
delete persona.deporteFavorito;

//Acceder a un Metodo
let saludoRecibido = persona.saludar();
console.log(saludoRecibido);