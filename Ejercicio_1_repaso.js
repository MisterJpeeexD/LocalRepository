    // # Variables

// Ejercicio 1
var fname = "Jean Paul";
var lname = "Santander";

// Ejercicio 2
let num = 10;

// Ejercicio 3
var cf = "Completos";

// Ejercicio 4
var a = 10;
var b = 3;

// Ejercicio 5
let edad = 15;

// Ejercicio 6
var numero = 8;

// Ejercicio 7
var nota = 6;

// Ejercicio 8
var temperatura = 15;

// Ejercicio 9
var n1 = 20;
var n2 = 30;

// Ejercicio 10
// Ir directamente al Ejercicio

// Ejercicio 11
let usuario="admin";
let password="1234";

    // # Ejercicios

// Ejercicio 1
console.log("Ejercicio 1:");
console.log(fname,lname);

// Ejercicio 2
console.log();
console.log("Ejercicio 2:");
console.log("Variable inicial: ",num);
console.log("Sumamdo 5: ",num = num + 5); // num += 5
console.log("Multiplicando por 3: ",num * 3);

// Ejercicio 3
console.log();
console.log("Ejercicio 3:");
console.log("Aguanten los",cf);

// Ejercicio 4
console.log();
console.log("Ejercicio 4:");
console.log("Suma a + b:",a+b);
console.log("Resta a + b:",a-b);
console.log("Multiplicacion a + b:",a*b);
console.log("Modulo:",a%b);
console.log((typeof a) + b);

// Ejercicio 5
console.log();
console.log("Ejercicio 5.1: Ejecucion de codigo si es mayor a 10:");
if(edad >= 10){
    console.log("La edad",edad,"es mayor que 10");
}
console.log();
console.log("Ejercicio 5.2: Ejecucion de codigo si es menor que 18:");
if(edad <= 18){
    console.log("La edad",edad,"es menor que 18");
}  

// Ejercicio 6
console.log();
console.log("Ejercicio 6: Ejecucion de codigo si es mayor que 5 y menor que 10:");
if(numero >= 5 && numero <= 10){
    console.log("El numero es",numero);
}

// Ejercicio 7
console.log();
console.log("Ejercicio 7: Ejecucion de codigo si es igual a 7");
if(nota == 7){
    console.log("La nota es",nota);
}

// Ejercicio 8
console.log();
console.log("Ejercicio 8: Ejecucion de codigo si es mayor o igual a 30");
if(temperatura >= 30){
    console.log("La temperatura es de",temperatura);
}

// Ejercicio 9
console.log();
console.log("Ejercicio 9.1: Ejecucion de codigo si son iguales");
if(n1 == n2){
    console.log(n1,"es igual que",n2);
}
console.log("Ejercicio 9.2: Ejecucion de codigo si uno es mayor que otro");
if(n1 <= n2){
    console.log(n1,"es menor que",n2);
}
if(n1 >= n2 ){
    console.log(n1,"es mayor que",n2);
}
if(n1 != n2 ){
    console.log("Por lo tanto",n1,"es diferente que",n2);
}

// Ejercicio 10
    
    // Variable 10
edad = 17;
let tienePermiso=true;

    // Ejercicio 10
console.log()
console.log("Ejercicio 10: Verificacion de edad para licencia de conducir");
if(edad >= 18 || tienePermiso){
    console.log("La edad del usuario es de",edad,"y cumple con requisito +18");
}

// Ejercicio 11
console.log()
console.log("Ejercicio 11: Ingreso de usuario y contraseña");
console.log("Iniciando sesion...");
console.log();
console.log("Sesion iniciada");
console.log("Usuario",usuario);
console.log("Password",password);