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

imprimirProfesiones (Francisco)
 