var francisco = {
    nombre: 'Francisco',
    apellido: 'Rios',
    edad: 28
}

function ImprimirNombreEnMayusculas({apellido}) {
    apellido = apellido.toUpperCase(apellido)
    console.log(apellido)
}//con las {} dentro del parametro de una funcion estamos llamando el atributo de un objeto

ImprimirNombreEnMayusculas(francisco)


 // se hablo de variables globales o scope locales y globales 