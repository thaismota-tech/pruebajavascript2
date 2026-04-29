// EJERCICIO 1
let n1 = Number(prompt("Introduce la primera nota:"));
let n2 = Number(prompt("Introduce la segunda nota:"));
let n3 = Number(prompt("Introduce la tercera nota:"));
let mediaDeLasNotas = (n1 + n2 + n3) / 3;
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

//EJERCICIO 5
let todosNumeros = [];
let arrayNumeros1 = [];
let arrayNumeros2 = [];

for (let i = 1; i <= 10; i++) {
    let num = Number(prompt(`Ingrese un número ${i} (del 1-500):`));
    if (num >=1 && num<= 500) {
    todosNumeros.push(num); {
    if (num <= 250) {
    arrayNumeros1.push (num);
    } else {
    arrayNumeros2.push (num);
    }
    }
}
console.log("Todos los números:", todosNumeros);
console.log("Rango 1-250:", arrayNumeros1);
console.log("Rango 251-500:", arrayNumeros2);}