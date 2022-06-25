
// ¿Qué se implementó en ES9?

// Operador de reposo

const obj = {
    name: "Daniel",
    age: 16,
    country: "SV",
};

let { name, ...all } = obj; // encapsulamos los demás valores por medio de ...all

console.log(name, all);

// Propiedades de propagación

const obj2 = {
    name: "Daniel",
    age: 16,
}

const obj3 = {
    ...obj2,
    country: "SV",
}

console.log(obj3);

// finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Hello World"), 3000)
            : reject(new Error("Test Error"))
    });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log("Finalizo")); // Mostrar la finalización de la ejecución

// regExp

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

const match = regexData.exec("2022-04-20");

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);

// Trabajo con regExp hacia un grupo