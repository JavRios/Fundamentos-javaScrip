class Persona {
    constructor (nombreProto, apellidoProto, alturaProto) {

        this.nombreObj = nombreProto 
        this.apellidoObj = apellidoProto
        this.alturaObj = alturaProto

    }// se dice que va a existir la clase persona y va tener un metodo llamado constructor 

    saludar (fn){
        var nombreObj = this.nombreObj
        var apellidoObj = this.apellidoObj

        console.log(`Hola, me llamo ${this.nombreObj} ${this.apellidoObj}`)

        if (fn) {

            fn(nombreObj,apellidoObj,false)
            
        }
    }

    soyAlto () {

        return  this.alturaObj > 1.8
    }
}

class Desarrollador extends Persona{
    constructor(nombreDesa, apellidoDesa,alturaDesa) {

        super (nombreDesa, apellidoDesa,alturaDesa)
    }

    saludar (fn){
       var nombreObj = this.nombreObj
       var apellidoObj = this.apellidoObj

        console.log(`Hola, me llamo ${this.nombreObj} ${this.apellidoObj} y soy desarrollador/a`)  

        if (fn) {

            fn(nombreObj,apellidoObj,true)
            
        }

    }
}//para heredar en javaScript se usa la plabra extends de la clase que se desa heredar

//antes de usar la herencia es necesario llamar al constructor de la clase padre con la pablara super


function responderSaludo (nombreFun, ApellidoFun, esDev){
    console.log (`Buen día ${nombreFun} ${ApellidoFun}`)

    if (esDev) {

        console.log(`Ah mira no sabia que eras desarrollador/a`)
        
    }
}

var javier = new Persona('Javier','Rios', 1.75) 
var erika = new Persona ('Erika' ,'Luna',1.65)
var arturo = new Desarrollador ('Arturo', 'Martinez',1.85)

javier.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)



