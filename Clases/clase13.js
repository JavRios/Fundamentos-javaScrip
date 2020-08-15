var Francisco = {
    nombre: 'Francisco',
    apellido: 'Rios',
    edad: 34,
    peso: 100

}

const INCREMENTEO_PESO = 0.2

const aumentarDePeso = (persona) => persona.peso += INCREMENTEO_PESO

const adelgazar = persona => persona.peso -= INCREMENTEO_PESO

console.log(`Al inicio del año ${Francisco.nombre} pesa ${Francisco.peso} kg `)

for (let i = 0; i <= 365; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(Francisco)
    }else if (random < 0.50) {
        adelgazar(Francisco)
    }

}

console.log(`Al fial del año ${Francisco.nombre} pesa ${Francisco.peso.toFixed (1)} kg `)