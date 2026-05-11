const prompt = require("prompt-sync")();

let nombre = prompt("¿Cual es tu nombre?: ")
let edad = prompt("¿Cual es tu edad?: ")
let comuna = prompt("¿De donde eres?: ")
console.log()
console.log(`Hola mundo, mi nombre es ${nombre}, tengo ${edad} y vivo en ${comuna}`)