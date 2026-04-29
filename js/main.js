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