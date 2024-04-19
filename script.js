const numeroAzar = Math.floor(Math.random() * 100) + 1
let numeroEntrada = document.getElementById('numeroEntrada')
let contenedorMensajes = document.getElementById('contenedorMensajes')
let mensajeIntentos = document.getElementById('intentos')
const boton = document.getElementById('boton')

let intentos = 0

console.log(numeroAzar)

function comprobarNumero() {

    let numeroIngresado = parseInt(numeroEntrada.value)
    let mensaje
    intentos += 1
    mensajeIntentos.textContent = `Intentos: ${intentos}`

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        contenedorMensajes.innerHTML += '<p style="color: red">Por favor introduce un numero valido entre 1 y 100</p>'
        mensaje.style.color = 'red'
        return
    }

    if (numeroIngresado === numeroAzar) {
        if(intentos === 1){
            mensajeIntentos.innerHTML = `<p style="color: green">Acertaste en ${intentos} intento !</p>`
        } else {
            mensajeIntentos.innerHTML = `<p style="color: green">Acertaste en ${intentos} intentos !</p>`
        }
        numeroEntrada.disabled = true
        boton.disabled = true
    } else if (numeroIngresado < numeroAzar) {
        contenedorMensajes.innerHTML += `<p style="color: red">El numero es mayor que ${numeroIngresado}</p>`
        numeroEntrada.value = ""
        numeroEntrada.focus = true
    } else {
        contenedorMensajes.innerHTML += `<p style="color: red">El numero es menor que ${numeroIngresado}</p>`
        numeroEntrada.value = ""
        numeroEntrada.focus = true
    }
}