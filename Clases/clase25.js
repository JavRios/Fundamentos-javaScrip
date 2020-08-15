class Persona {
    constructor (nombreProto, apellidoProto, alturaProto) {

        this.nombreObj = nombreProto 
        this.apellidoObj = apellidoProto
        this.alturaObj = alturaProto

    }// se dice que va a existir la clase persona y va tener un metodo llamado constructor 

    saludar (){
        console.log(`Hola, me llamo ${this.nombreObj} ${this.apellidoObj}`)
    }

    soyAlto () {

        return  this.alturaObj > 1.8
    }
}

class Desarrollador extends Persona{
    constructor(nombreDesa, apellidoDesa,alturaDesa) {

        super (nombreDesa, apellidoDesa,alturaDesa)
    }

    saludar (){

        console.log(`Hola, me llamo ${this.nombreObj} ${this.apellidoObj} y soy desarrollador/a`)  

    }
}//para heredar en javaScript se usa la plabra extends de la clase que se desa heredar

//antes de usar la herencia es necesario llamar al constructor de la clase padre con la pablara super



