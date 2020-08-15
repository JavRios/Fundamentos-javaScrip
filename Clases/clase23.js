function heredaDe (prototipoHijo, PrototipoPadre){

    var fn = function(){}
    fn.prototype = PrototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona (nombreProto, apellidoProto, alturaProto) {

    this.nombreObj = nombreProto //atributo nombre
    this.apellidoObj = apellidoProto //atributo apellido
    this.alturaObj = alturaProto

}// esta funcion es para definir un prototipo, esto es lo que se conoce como contructor en otros lenguajes 

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombreObj} ${this.apellidoObj}`)
    
}

Persona.prototype.soyAlto = function() {

   return  this.alturaObj > 1.8
}

function Desarrollador (nombreDesa, apellidoDesa) {

        this.nombre2 = nombreDesa
        this.apellido2 = apellidoDesa
}

heredaDe(Desarrollador,Persona)

Desarrollador.prototype.saludar = function () {
    
    console.log(`Hola, me llamo ${this.nombre2} ${this.apellido2} y soy desarrollador/a`)  
}


//var javier = new Persona('Javier','Rios', 1.75) // la palabra new es una palabra reservada que se usa para crear nuevos objetos dado un prototipo como la funcion de arriba // la palabra persona es el nombre la fucnion prototipo
//var erika = new Persona ('Erika' ,'Luna',1.65)
//var arturo = new Persona ('Arturo', 'Martinez',1.85)
