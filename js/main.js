// EJERCICIO 1
let notas = [10, 7, 8];
let mediaDeLasNotas = notas.reduce(function (acumulador, num) {
  return acumulador + num / 3;
}, 0);
console.log(mediaDeLasNotas);
if (mediaDeLasNotas >=7) {
console.log("SOBRESALIENTE");
} else if (mediaDeLasNotas >=5) {
  console.log("APROBADO");
} else {
  console.log("SUSPENSO");
}


// EJERCICIO 2
let numero = 1000;

if (numero < 10) {
  console.log("Es un número de 1 cifra");
} else if (numero < 100) {
  console.log("Es un número de 2 cifras");
} else {
  console.log("Es un número de 3 cifras");
}


// EJERCICIO 3
let color = prompt("Por favor ingrese un color:");
switch (color) {
  case "azul":
    console.log("blue");
    break;
  case "rojo":
    console.log("red");
    break;
  case "morado":
    console.log("purple");
    break;
  case "verde":
    console.log("green");
    break;
  case "naranja":
    console.log("orange");
    break;
  case "negro":
    console.log("black");
    break;
  case "blanco":
    console.log("white");
    break;
  default:
    console.log("Color inválido");
}

// EJERCICIO 4
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numeros.filter(checkConditions);
function checkConditions(numeros) {
  return numero / 2 === 0;
}