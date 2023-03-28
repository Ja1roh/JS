
let niveles = document.getElementById("txt");
let boton = document.getElementById("boton");
let resultado = document.getElementById("resultado");



let nombres = ["Sofía", "David", "Juan"];
console.log("***************Ejercicio 1***************");
//Parte 1
console.log(nombres);
//parte 2
nombres.push("Sara");
nombres.push("Agustín");
nombres.shift();
console.log(nombres);
//parte 3
nombres.splice(1, 0, "Renata");
console.log(nombres);

console.log("***************Ejercicio 2***************");
triangulo(5)

function triangulo(nPisos){
    for (let cont = 0; cont<nPisos; cont++){
        let piso = "";
        for (b = 0; b<cont + 1; b++){
            piso = piso + "*";
        }
        console.log(piso);
    }
}
console.log("***************Ejercicio 3***************");
//parte 1
let nCont = 10
while (nCont>=0) {
    console.log(nCont);
    nCont = nCont - 0.5;
}
//parte 2
console.log("---parte 2: impares---");

let impares =100;

for (let cont = 0; cont <= impares; cont++) {
  if (cont % 2 !== 0) {
    console.log(cont);
  }

}
console.log("---parte 3: cuadrados---");
let minimo = 1
function cajitas(nCajitas){
    while ( minimo <= nCajitas) {
        console.log("[" + minimo + "]");
        minimo ++;
    }
}
cajitas(10);

console.log("---parte 4: sumas---");
let cuenta = 1
let suma=0
function num(numeroSuma){
    while (cuenta <= numeroSuma) {
        suma= suma + cuenta;
        cuenta ++;
    }console.log(suma);
}
num(5);
num(10);


