
// ¿Qué se implementó en ES10?

// array.flat()

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2)); // valor de la profundidad por la cual se trabajara con el método flat

// array.flatMap()

let array1 = [1, 2, 3, 4, 5];

console.log(array1.flatMap(value => [value, value * 2]));

// string.trimStart()

let hello = "       hello world";

console.log(hello);
console.log(hello.trimStart()); // elimina los espacios al inicio

// string.trimEnd()

let hello1 = "hello world        ";

console.log(hello1);
console.log(hello1.trimEnd()); // elimina los espacios al final

// try and catch

try {

} catch { // sin parámetro

}

// Object.fromEntries()

let entries = [["name", "Daniel",], ["age", 16]];

console.log(Object.fromEntries(entries)); // devuelve un objeto partiendo de una matriz

// Objeto de tipo símbolo

let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);

console.log(symbol.description);