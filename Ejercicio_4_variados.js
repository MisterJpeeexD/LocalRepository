// Modulos requeridos

const prompt = require("prompt-sync")();

// 1. Obtener la suma de dos números cualesquiera
console.log();
console.log(`Ejercicio 1: Obtener la suma de dos números cualesquiera`);
console.log();
let e1a = prompt("Ingrese un numero para sumar: ");
let e1b = prompt("Ingrese otro numero para sumar: ");
console.log();
console.log(`${e1a} + ${e1b} =`,e1a+e1b);

// 2. Obtener e imprimir el nombre y la edad de una persona
console.log();
console.log(`Ejercicio 2: Obtener e imprimir el nombre y la edad de una persona`);
console.log();
let e2a = prompt("Ingrese su nombre: ");
let e2b = prompt("Ingrese su edad: ");
console.log();
console.log(`Hola ${e2a}, tu edad es ${e2b} años`);

// 3. Obtener e imprimir el nombre, dirección y estado civil de una persona
console.log();
console.log(`Ejercicio 3: Obtener e imprimir el nombre, dirección y estado civil de una persona`);
console.log();
let e3a = prompt("Ingrese su nombre: ");
let e3b = prompt("Ingrese su direccion (Ej: Calle alameda 3241, Santiago): ");
let e3b = prompt("Ingrese su estado  civil: ");
console.log();
console.log(`Hola ${e3a}, vives en ${e3b} y tu estado civil es ${e3c}`);

// 4. Capturar el nombre y dos calificaciones de un alumno e imprimir el promedio de estas.
console.log();
console.log(`Ejercicio 4: Capturar el nombre y dos calificaciones de un alumno e imprimir el promedio de estas`);
console.log();
let e4a = prompt("Ingrese su nombre: ");
let e4b = prompt("Ingrese su primera clasificacion: ");
let e4c = prompt("Ingrese su segunda clasificacion: ");
console.log();
console.log(`Hola ${e4a}, tu promedio de las notas ingresadas es`,((e4b+e4c) / 2));

// 5. Obtener la suma y el promedio de cinco calificaciones que de un alumno
console.log();
console.log(`Ejercicio 5: Obtener la suma y el promedio de cinco calificaciones que de un alumno`);
console.log();
let e5a = prompt("Ingrese su primera clasificacion: ");
let e5b = prompt("Ingrese su segunda clasificacion: ");
let e5c = prompt("Ingrese su tercera clasificacion: ");
let e5d = prompt("Ingrese su cuarta clasificacion: ");
let e5e = prompt("Ingrese su quinta clasificacion: ");
console.log();
console.log(`Hola, tu promedio de las notas ingresadas es`,((e4a+e4b+e4c+e4d+e4e) / 5));

// 6. Convertir dólares a pesos
console.log();
console.log(`Ejercicio 6: Convertir dólares a pesos`);
console.log();
let e6 = prompt("Ingrese la cantidad de pesos a calcular en dolar: ");
console.log();
console.log(`Hola, siendo hoy 14-05-2026, el costo de dolar es de 951.15 pesos / 1 dolar, la conversion de los pesos ingresados es de `,((e4a+e4b+e4c+e4d+e4e) / 5));

7. Obtener el descuento de un producto e imprimirlo.
8. Imprimir el sueldo neto de un empleado considerando impuestos.

Actividad 2: Intentar codificar los siguientes ejercicios.

1. Un alumno desea saber cuál será su calificación final en una materia. Dicha calificación se compone de los siguientes porcentajes: 50% proyecto integrador, 30% nota técnica y 20% nota tareas.
2. Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber cuánto deberá pagar finalmente por su compra.
3. Realizar un algoritmo que calcule la edad de una persona.