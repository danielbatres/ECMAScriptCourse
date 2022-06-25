
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


// LET y CONST, Multilínea, Spread Operator y Desestructuración

// Multilínea

// before es6

let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n" + "otra frase epica que necesitamos";

console.log(lorem);

// after es6 

let lorem2 = `Otra frase epica que necesitamos
ahora es otra frase epica`;

console.log(lorem2);

// Desestructuración

// before es6

let person = {
    name: "Daniel",
    age: 16,
    country: "SV",
}

console.log(person.name, person.age);

// after es6

let { name, age, country } = person;

console.log(age, country);

// Spread Operator ...

let team1 = ["Daniel", "Julian", "Ricardo"];
let team2 = ["Valeria", "Jessica", "Camila"];

let education = ["David", ...team1, ...team2]; // creamos un nuevo elemento donde tendremos a "David" con el team1 y team2 unidos.

console.log(education);

// Let y Const 

// before es6

var hola = "Hola"; // disponible de manera global

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet); // si podemos acceder
}

console.log(globalVar);
console.log(globalLet); // no podemos acceder

// after es6

let hola = "Hola"; // disponible de manera local

const a = "b"; // "inmutable" disponible de manera local

a = "a"; // error, no podemos reasignar un valor a const


// Arrow Functions, Promesas y Parámetros en objetos

// Parámetros en objetos

// before es6

let name1 = "Daniel";
let age1 = 16;

obj = { name: name1, age: age1 };

console.log(obj);

// after es6

obj2 = { name1, age1 };

console.log(obj2);

// Arrow functions

const names = [
    { name: "Daniel", age: 16 },
    { name: "Jessica", age: 27 },
];

// before es6

let listOfNames = names.map(function (item) {
    console.log(item.name);
});

// after es6

let listOfNames2 = names.map(item => {
    console.log(item.name);
});

const listOfNames3 = (name, age, country) => {
    console.log(name, age, country);
}

const listOfNames4 = name => { // un solo parámetro
    console.log(name)
}

const square = num => num * num; // una sola línea de código con arrow function sin generar un return

// simplificación del código

// Promesas

// manejar el asincronismo de JS "algo va a pasar"

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (!true) {
            resolve("Hey!");
        } else {
            reject("Ups!!");
        }
    });
};

helloPromise()
.then(response => console.log(response)) // resolve
.catch(error => console.log(error)) // reject