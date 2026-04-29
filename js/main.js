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
let positivos = 0;
let negativos = 0;
let pares = 0;

for (let i = 1; i<10; i++) {
    let num = Number(prompt(`Ingrese el número ${i}:`));
    if (num > 0) {
    positivos++;
    } else if (num < 0) {
    negativos++;
    }
    if (num % 2 ===0) {
    pares++;
    }
}
console.log("Son números positivos: " + positivos);
console.log("Son números negativos: " + negativos);
console.log("Son números pares: " + pares);