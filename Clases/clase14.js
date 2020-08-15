var Francisco = {
    nombre: 'Francisco',
    apellido: 'Rios',
    edad: 34,
    peso: 100

}
console.log(`Al inicio del año ${Francisco.nombre} pesa ${Francisco.peso} kg `)


const INCREMENTEO_PESO = 0.3
const DIAS_DEL_ANNIO = 365

const aumentarDePeso = (persona) => persona.peso += INCREMENTEO_PESO
const adelgazar = persona => persona.peso -= INCREMENTEO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random () < 0.4

var dias = 0

const META = Francisco.peso - 3

while (Francisco.peso > META){
    //debugger
    if (comeMucho()){
        aumentarDePeso(Francisco)
    }
    if (realizaDeporte())
    {
        adelgazar(Francisco)

    }

    dias += 1
}

console.log(`Pasaro ${dias} dias hasta que ${Francisco.nombre} adelgazo 3 kg`)