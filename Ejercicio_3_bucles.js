// Preconfigs
let prompt = require("prompt-sync")();

// Ejercicio 1 - For

console.log()
console.log("Ejercicio 1: Escribe un programa que imprima los números del 1 al 10")
let e1 = 1

for(let f1 = 1;e1 <= 10;e1++){
    console.log(e1)
}

// Ejercicio 2 - For
console.log()
console.log("Ejercicio 2: Imprime los números pares del 1 al 20")
let e2 = 1
for(let f1 = 2;e2 <= 20;e2++){
    if(e2%2==0){
        console.log(e2)
    }
}

// Ejercicio 3 - For
console.log()
console.log("Ejercicio 3: Escribe un programa que muestre la tabla de multiplicar")
let e3 = prompt("Ingresa el valor a revisar su tabla de multiplicar: ")
for(let f3 = 1;f3 <= 12;f3++){
    console.log(f3,"x",e3,"=",f3*e3)
}

// Ejercicio 4 - For
console.log()
console.log("Ejercicio 4: calcula la suma de todos los elementos utilizando un bucle")
let lista = [1,2,3,4,5,6,7,8,9,10]
let suma = 0;
console.log()
console.log(`La lista a utilizar es ${lista}`)
for(f4 of lista){
    console.log(suma += f4)
}

// Ejercicio 1 - While
console.log()
console.log("Ejercicio 5: Programa que cuente hacia atrás")
let e5 = parseInt(prompt("Indique el valor de inicio: "))
while(e5+1 != 0){
    console.log(e5--)
} 
 
// Ejercicio 2 - While
console.log()
console.log("Ejercicio 6: sume números ingresados por el usuario hasta que se ingrese un número negativo")
let suma2 = 0
let e6 = 0
while(e6 >= 0){
    e6 = parseInt(prompt("Ingresa un numero, si ingresar un numero negativo, cerraras el programa: "))
    console.log("La suma de",suma2,"+",e6,"es")
    console.log(suma2 += e6)
}

// Ejercicio 3 - While
console.log()
console.log("Ejercicio 7: Implementa un juego de adivinanza en el que el usuario debe adivinar un número secreto.")
let ns = 10 * 45 - 10 / 4 - 0.5 - 444;
let e7 = 0;
while(ns != e7){
    e7 = parseInt(prompt("Intenta adivinar el numero [1-10]: "))
    if(ns == e7){
        console.log()
        console.log("Bien hecho!",e7,"era el numero secreto")
        break
    } else if (e7 > 10 || e7 < 1) {
        console.log()
        console.log("Hablo en chino o que papi?, dije del 1 al 10...")
    } else if(isNaN(e7)){
        console.log()
        console.log("A ver... repasemos que es un numero: ")
        console.log("Un número es una abstracción matemática que representa una cantidad, magnitud o posición en una secuencia,")
        console.log("utilizada para contar, medir, ordenar o etiquetar elementos. Es una herramienta fundamental que permite cuantificar la realidad y realizar operaciones aritméticas.")
        console.log("Fuente: https://portalacademico.cch.unam.mx/sumate/asignaturas/matematicas-1/numeros-clasificacion/numero/")
        console.log()
        console.log("Quedo claro? Bien, ahora intentalo de nuevo y no me hagas enojar, gracias")
        console.log()
    } else {
        console.log()
        console.log("Que mal!",e7,"no es el numero secreto, intentalo de nuevo")
    }
}


// Ejercicio 4 - While
console.log()
console.log("Ejercicio 8: Calcula el factorial de un número ingresado por el usuario")
console.log("Ejercicio 8: Factorial de un número");
let e8 = parseInt(prompt("Ingresa el número: "));

let resultado = 1; // El acumulador empieza en 1

// Guardado del valor
let original = e8;

while (e8 > 1) {
    resultado *= e8; // Multiplicamos lo que ya tenemos por el número actual
    e8--;           // Bajamos al siguiente número (ej: de 5 a 4)
    console.log(resultado)
}

console.log(`El resultado de ${original}! es: ${resultado}`);

// Ejercicio 5 - While - Saltar

console.log()
console.log("Ejercicio 9: Genere la secuencia de Fibonacci")
let e9 = parseInt(prompt("Vale, hasta donde hacemos nuestro Fibonacci?: "))

let rel1 = 0;
let rel2 = 1;
let rel3 = 0;

while(true){
    console.log(rel3)
    if(rel3>e9){break}
    rel3=rel1+rel2
    console.log(rel1)
    if(rel1>e9){break}
    rel1=rel2+rel3
    console.log(rel2)
    if(rel2>e9){break}
    rel2=rel1+rel3
}

// Ejercicio 1 - if
console.log()
console.log("Ejercicio 10: Determine si un número ingresado por el usuario es positivo o cero")
let e10 = parseInt(prompt("Ingrese un numero para identificar si es positivo o negartivo: "))
if(e10 <= -1){
    console.log()
    console.log(e10,"es negativo")
} else if(e10==0) {
    console.log()
    console.log(e10,"es neutro")
} else if(e10 >= 1) {
    console.log()
    console.log(e10,"es positivo")
} else if(isNaN(e10)) {
    console.log()
    console.log("Pa' ti, https://youtu.be/Ycu4W5mNkAY?si=afkYSj9VUZM1CkM2&t=11")
}

// Ejercicio 2 - if
console.log()
console.log("Ejercicio 11: Verifique si un número es par o impar")
let e11 = parseInt(prompt("Ingrese un numero para identificar si es par o impar: "))
if(e11 % 2 == 0){
    console.log()
    console.log(e11,"es par")
} else if(isNaN(e11)) {
    console.log()
    console.log("...")
    console.log("Sabes? ya ni me esforzare para explicarte que ***** es un numero")
} else if(e11%2!=0) {
    console.log()
    console.log(e11,"es impar")
} 

// Ejercicio 3 - if
console.log()
console.log("Ejercicio 12: Determine si un año ingresado por el usuario es bisiesto o no")
let e12 = parseInt(prompt("Ingrese un año para validar si el año es bisiesto o no: "))
if((e12 % 4 == 0 && e12 % 100 != 0) || ( e12 % 400 == 0)){
    console.log()
    console.log("El año",e12,"es bisiesto")
    } else {
        console.log()
        console.log("El año",e12,"no es bisiesto")
    }


// Ejercicio 4 - if
console.log()
console.log("Ejercicio 13: Ingresar dos números y determina cuál de ellos es mayor")
let e13a = parseInt(prompt("Ingrese su primer numero para validar cual es el numero mayor: "))
let e13b = parseInt(prompt("Ingrese su segundo numero para validar cual es el numero mayor: "))
if(e13a > e13b){
    console.log()
    console.log("El numero",e13a,"es mayor que",e13b)
    } else if(isNaN(e13a) || isNaN(e13b)){
        console.log()
        console.log(`Bro, si quieres ver el orden del abecedario, programa tu codigo y no me hagas perder el tiempo.`);
        console.log("Aquí comparamos magnitudes reales, no el orden de tus apuntes.");
    } else if(e13a < e13b) {
        console.log()
        console.log("El numero",e13a,"es menor que",e13b)
    } else if(e13a == e13b){
        console.log(`${e13a} es igual que ${e13b}`)
    }