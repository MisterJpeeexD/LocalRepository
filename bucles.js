const prompt = require("prompt-sync")();

// Variables

let edad = parseInt(prompt("Cual es tu edad: "))

// Codigo condicional
console.log()
if(edad >= 18){
    console.log("Eres mayor de edad")
    edadProxima = edad+1
    console.log("El proximo año tendras",edadProxima)
} else if(edad >=12 && edad <= 17){
    console.log("Eres adolescente")
    edadProxima = edad+1
    console.log("El proximo año tendras",edadProxima)
} else {
    console.log("Eres un niño")
    edadProxima = edad+1
    console.log("El proximo año tendras",edadProxima)
}
console.log()

// Codigo bucle
// Calculadora de tabla hasta el 12, n*1~12

let n1 = prompt("Ingresa el numero a multiplicar: ")
let n2 = 1
while(n2<=12){
    console.log(n1*n2)
    n2++
}

// Codigo bucle 2

console.log()
while(true){
    let edadNueva = parseInt(prompt("Ingresa tu edad: "))
        if(edadNueva >= 18){
            console.log("Eres mayor de edad")
            edadProxima = edadNueva+1
            console.log("El proximo año tendras",edadProxima)
            break
        } else if(edadNueva >=12 && edadNueva <= 17){
            console.log("Eres adolescente")
            edadProxima = edadNueva+1
            console.log("El proximo año tendras",edadProxima)
            break
        } else if(edadNueva <= 11 && edadNueva >= 0){
            console.log("Eres un niño")
            edadProxima = edadNueva+1
            console.log("El proximo año tendras",edadProxima)
            break
        } else {
            console.log("Valor invalido, intentalo de nuevo")
            break
        }
    }