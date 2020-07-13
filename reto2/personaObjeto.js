var persona = {
    nombre: undefined,
    apellidoP: undefined,
    apellidoM: undefined,
    edad: undefined
}

persona.nombre = prompt ('¿Cúal es tu nombre?')
persona.apellidoP = prompt ('¿Cúal es tu apellido paterno?')
persona.apellidoM = prompt ('¿Cúal es tu apellido materno?')
persona.edad = prompt ('¿Cúal es tu edad?')



objetoPersona (persona)

function objetoPersona ({nombre,apellidoP,apellidoM,edad}) 
{
    nombre = nombre.toUpperCase(nombre)
    apellidoP = apellidoP.toUpperCase(apellidoP)
    apellidoM = apellidoM.toUpperCase(apellidoM)
    document.write(`HOLA, ME LLAMO  ${nombre} ${apellidoP} ${apellidoM} Y TENGO ${edad} AÑOS`)
    
    
}
