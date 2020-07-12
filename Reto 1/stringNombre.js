var nombre = prompt ('¿Cúal es tu nombre?')
var apellido = prompt ('¿Cúal es tu apellido?')


document.write (`${"La última letra de tu nombre es:"} ${ultimaLetra(nombre)} <br>`)
document.write (`${"La última letra de tu apellido es:"} ${ultimaLetra(apellido)}`)


function ultimaLetra (cadena){
  var largo = cadena.length
  largo = largo - 1
  var letra = cadena.charAt(largo)
  return  letra.toUpperCase()
}
