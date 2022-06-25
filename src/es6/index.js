
// Defaults Params y Concatenación

// Parámetros

// before es6

function newFunction(name, age, country) {
    var name = name || "Daniel";
    var age = age || 16;
    var country = country || "SV";

    console.log(name, age, country);
}

// after es6

function newFunction2(name = "Daniel", age = 16, country = "SV") {
    console.log(name, age, country);
}

newFunction2(); // Si no recibe ningún argumento, tomará los parámetros por defecto

newFunction2("Ricardo", 23, "CO"); // Toma los argumentos y omite los parámetros por defecto

// Concatenación

// before es6

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;

console.log(epicPhrase);

// after es6

let epicPhrase2 = `${hello} ${world}`;

console.log(epicPhrase2);