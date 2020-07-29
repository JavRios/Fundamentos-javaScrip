function Persona (nombreProto, apellidoProto, alturaProto) {

    this.nombreObj = nombreProto //atributo nombre
    this.apellidoObj = apellidoProto //atributo apellido
    this.alturaObj = alturaProto

}// esta funcion es para definir un prototipo, esto es lo que se conoce como contructor en otros lenguajes 

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombreObj} ${this.apellidoObj}`)
    
}

Persona.prototype.soyAlto = function() {

    this.alturaObj > 1.8
}

var javier = new Persona('Javier','Rios', 1.75) // la palabra new es una palabra reservada que se usa para crear nuevos objetos dado un prototipo como la funcion de arriba // la palabra persona es el nombre la fucnion prototipo
var erika = new Persona ('Erika' ,'Luna',1.65)
var arturo = new Persona ('Arturo', 'Martinez',1.85)
