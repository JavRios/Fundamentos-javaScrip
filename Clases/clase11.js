var Francisco = {
    nombre: 'Francisco',
    apellido: 'Rios',
    edad: 34,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    analista: true
}

function imprimirProfesiones (persona) {

    console.log(`${persona.nombre} es: `)

    if (persona.ingeniero){
        console.log('Ingeniero')
    }
    if (persona.cocinero){
        console.log('Cocinero')
    }
    if (persona.cantante){
        console.log('Cantente')
    }
    if (persona.dj){
        console.log('DJ')
    }
    if (persona.guitarrista){
        console.log('Gutarrista')
    }
    if (persona.analista){
        console.log('Analista de Datos')
    }

    
}

const MAYORIA_DE_EDAD = 18

function esMayorEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
    
}
function imprimirMayorEdad(persona) {

    if (esMayorEdad (persona)) {

        console.log(`${persona.nombre} es mayor de edad`)
        
    } else 

    console.log(`${persona.nombre} es menor de edad`)
    
}