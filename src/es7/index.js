
// ¿Qué se implementó en ES7?

// includes: saber si hay un valor especifico

let numbers = [1, 2, 3, 7, 8];

if (numbers.includes(7)) {
    console.log("Si se encuentra el valor 7");
} else {
    console.log("No se encuentra.");
}

// elevar a la potencia

let base = 4;
let exponent = 3;

let result = base ** exponent; // operador especial para elevar a la potencia

console.log(result);