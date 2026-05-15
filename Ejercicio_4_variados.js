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
let e6 = prompt("Ingrese la cantidad de pesos a calcular en dolar: $");
console.log();
console.log(`Hola, calculemos la relacion de peso/dolar`)
console.log(`Fecha de datos de conversion: 14-05-2026`)
console.log("Valor dolar: 951.15 pesos");
console.log()
console.log("Valor convertido: $",e6/951.15)

// 7. Obtener el descuento de un producto e imprimirlo.
console.log();
console.log(`Ejercicio 7: Obtener el descuento de un producto e imprimirlo`);
console.log();
let e7a = prompt("Ingrese el valor original del producto: $");
let e7b = prompt("Ingrese el valor del producto con descuento: $");
console.log();
console.log(`Hola, el valor original del producto es $${e7a} y con descuento es $${e7b}, por lo que el % de descuento es`,e7a/e7b)

//8. Imprimir el sueldo neto de un empleado considerando impuestos.
console.log();
console.log(`Ejercicio 8: Imprimir el sueldo neto de un empleado considerando impuestos`);
console.log();

// Sueldo bruto
let e8a = parseInt(prompt("Ingrese su sueldo bruto: $"));

// Bonos ++
let e8b = parseInt(prompt("Ingrese los bonos ganados (Si no ha obtenido nada, ingrese 0): "));
let e8c = parseInt(prompt("Ingrese las comisiones (Si recibe comisiones, ingrese 0): "));

// Deducciones --
// AFP
let e8d = parseInt(prompt("Ingrese la comision de su AFP (Si no la conoce, presione enter, se usara el valor por defecto (10%)): "));
if(isNaN(e8d)){
    e8d = 10
}
e8d = e8d / 100

// Institucion previsional de salud (Isapre / Fonasa)
let e8e = parseInt(prompt("Ingrese la comision de su fonasa o isapre (Si no la conoce, se usara el valor por defecto (7%)): "));
if(isNaN(e8e)){
    e8e = 7
}
e8e = e8e / 100

// AFC
let e8f = prompt("¿Tiene contrato indefinido?, si es si, se le realizara un cargo de 0.6% por deduccion de AFC: (si/no)")
if(e8f.toLowerCase() == "si"){
    e8f = 0.6
    e8f = e8f / 100
} else {
    e8f = 0
}

// Codigo de calculo
console.log();
console.log(`NOTA: Los valores a continuacion son valores cercanos y puede que no sean los valores 100% acertados`)
console.log("Sueldo bruto: $"+e8a)
console.log()
console.log("Bonos + Comisiones $"+(gan = e8b + e8c))
console.log("Sueldo imponible $"+(si=gan+e8a))
let afp = si*e8d
let ids = si*e8e
let afc = si*e8f
console.log("Deducciones previsionales: $"+(dp=afp+ids+afc))
console.log("Sueldo tributable $"+(st=si-dp))
console.log()
// Categorizacion de tabla de tramos - Ref 2024-2025
console.log("De acuerdo a tu Categorizacion de tabla de tramos referente al 2024-2025")
if(st >= 19070001){
    ded=(st*0.4)-(19070000*0.4)
    console.log("Te encuentras en el tramo de mas de $19.070.001")
    console.log("Deductible: $"+ded)
} else if(st >= 7380001 && st <= 19070000){
    ded=(st*0.35)-(7380000*0.35)
    console.log("Te encuentras en el tramo $7.380.001 ~ $19.070.000")
    console.log("Deductible: $"+ded)
} else if(st >= 5535001 && st <= 7380000){
    ded=(st*0.304)-(5535000*0.304)
    console.log("Te encuentras en el tramo $5.535.001 ~ $7.380.000")
    console.log("Deductible: $"+ded)
} else if(st >= 4305001 && st <= 5535000){
    ded=(st*0.23)-(4305000*0.23)
    console.log("Te encuentras en el tramo $4.305.001 ~ $5.535.000")
    console.log("Deductible: $"+ded)
} else if(st >= 3075001 && st <= 4305000){
    ded=(st*0.135)-(3075000*0.135)
    console.log("Te encuentras en el tramo $3.075.001 ~ $4.305.000")
    console.log("Deductible: $"+ded)
} else if(st >=1842001 && st <= 3075000){
    ded=(st*0.08)-(1845000*0.08)
    console.log("Te encuentras en el tramo $1.842.001 ~ $3.075.000")
    console.log("Deductible: $"+ded)
} else if(st >=830001 && st <= 1845000){
    ded=(st*0.04)-(830000*0.04)
    console.log("Te encuentras en el tramo $830.001 ~ $1.845.000")
    console.log("Deductible: $"+ded)
} else {
    console.log("Te encuentras en el tramo menos de $830.000")
    console.log("Deductible: $0")
}
console.log()
console.log("Sueldo neto total:",st-ded)

// Actividad 2: Intentar codificar los siguientes ejercicios.
// 1. Un alumno desea saber cuál será su calificación final en una materia. Dicha calificación se compone de los siguientes porcentajes: 50% proyecto integrador, 30% nota técnica y 20% nota tareas.
console.log()
console.log("Ejercicio 9: Obtener calificacion de 50% proyecto integrador, 30% nota técnica y 20% nota tareas")
console.log()
console.log("Estimado alumno, para obtener su clasificacion, favor ingrese los siguientes valores")
let cl50 = prompt("Ingrese el valor de proyecto integrador (50%): ")
let cl30 = prompt("Ingrese el valor de nota tecnica (30%): ")
let cl20 = prompt("Ingrese el valor de nota tareas (20%): ")
console.log()
console.log((cl50*0.5)+(cl30*0.3)+(cl20*0.2))

// 2. Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber cuánto deberá pagar finalmente por su compra.
console.log()
console.log("Ejercicio 10: Obtener costo total con descuento de 15%")
console.log()
let ct = parseInt(prompt("Ingrese la cantidad de productos a ingresar: "))
let warning;
let confirmar = true;
if(ct >= 30){
    while(ct >= 30 && confirmar){
        warning = prompt("Hey! ¿Mas de 30 productos vas a ingresar? ¡¿estas seguro?! (si/no): ")
        console.log()
        if(warning.toLowerCase() == "no"){
            console.log("Pense que estabas loco, que bueno que estas cuerdo xD")
            ct = parseInt(prompt("Ingresa de nuevo la cantidad de productos que quieres ingresar: "))
            console.log()
        } else if(warning.toLowerCase() == "si"){
            console.log("Bueno... No es mi tiempo, adelante")
            console.log()
            confirmar = false
        } else {
            console.log("???")
            console.log("SI O NO, te lo pedire de nuevo, no me hagas perder el tiempo, sino, abajo coloque: Clic derecho => Cerrar la ventana, gracias")
            console.log()
        }
    }
}
let total = 0;
for(let x = 1; x <= ct ; x++){
    product = parseInt(prompt("Ingrese el valor del producto n°"+x+": "))
    if(isNaN(product)){
        product = 0
    }
    total += product
}
let tt = 0
let dt = 0
console.log("El costo total sin descuento de la boleta es de: $"+total)
dt=total*0.15
console.log("El descuento sera de :$"+dt)
tt=total-dt
console.log("El costo total de la boleta con descuentos es de: $"+tt)

//3. Realizar un algoritmo que calcule la edad de una persona.
console.log()
console.log("Ejercicio 11: Obtener la edad de una persona")
console.log()
let ano_nacimiento = parseInt(prompt("Ingresa el año de nacimiento: "))
let ano_actual = parseInt(prompt("Indica el año actual (si es 2026, dale enter): "))
if(isNaN(ano_actual)){
    ano_actual = 2026
}
if(ano_nacimiento > ano_actual){
    console.log()
    let edad 
    edad=ano_nacimiento-ano_actual
    console.log("Supongo que colocaste los años al reves, bueno, no importa, tu edad es o sera de:",edad)
    console.log()
    console.log("O si eres del futuro, soy Jean Paul del pasado, saludos amigo :D")
} else {
    console.log()
    let edad 
    edad=ano_actual-ano_nacimiento
    console.log("Tu edad es o sera de:",edad)
}
//4. Fizz-buzz.
console.log()
console.log("Ejercicio 12: Fizz-buzz")
console.log()
for(let fb = 1 ; fb <= 100 ; fb++ ){
    if(fb % 3 == 0 && fb % 5 == 0){
        console.log("Fizz-Buzz!")
    } else if(fb % 3 == 0){
        console.log("Fizz!")
    } else if(fb % 5 == 0){
        console.log("Buzz")
    } else {
        console.log(fb)
    }
}