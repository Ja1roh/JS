
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
