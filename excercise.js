const prompt = require("prompt-sync")();

// Variable
let name = prompt("What is your name: ");
let jn = prompt("Are you studying for?: ");
let fa = prompt("How did your group feel? ");
let sa = prompt("How did you feel, your teacher?: ");
let ff = prompt("What did you have for lunch today?: ");
let sf = prompt("What will you eat for a snack?: ");
let af = prompt("How do you feel?: ");

// Excercise
console.log("English / Ingles")
console.log(`${name} started their first Generation course today. They are training as a ${jn}. They found their cohort to be very ${fa} but their teacher was, at least, ${sa}. For lunch they have ${ff} and ${sf} while reviewing their notes. They feel ${af} but are determined to complete the course.`);
console.log()
console.log("Spanish / Español")
console.log(`${name} comenzó hoy su primer curso de Generación. Se está formando como ${jn}. Encontró a su grupo muy ${fa} pero su profesor fue, al menos, ${sa}. Para el almuerzo comerá ${ff} y ${sf} mientras repasa sus apuntes. Se siente ${af} pero está decidido a completar el curso.`);