
// ¿Qué se implementó en ES8?

// Object.entries devolver clave y valores de una matriz

const data = {
    frontend: "Daniel",
    backend: "Isabel",
    design: "Ana",
}

const entries = Object.entries(data);

console.log(entries); // Mostrará un arreglo por cada elemento dentro de un arreglo

// .length

console.log(entries.length); // para conocer cuantos elementos hay

// Object.values

const values = Object.values(data);

console.log(values); // Mostrará los valores de los elementos dentro de un array

console.log(values.length);

// Padding

const string = "hello";

// el primer parámetro será el max length del string

console.log(string.padStart(7, "hi")); // agregará "hi" al principio de string
console.log(string.padEnd(12, " -----")); // agregará " -----" al final del string
console.log("food".padEnd(12, " -----"));

// Trailing-comas

const obj = {
    name: "Daniel", // trailing-coma, para no obtener errores al momento de agregar más elementos
}