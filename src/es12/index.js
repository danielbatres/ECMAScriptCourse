
// ECMAScript 2021

// replace all

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";

const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");

console.log(replacedString2); // reemplaza todas las coincidencias

// métodos privados

class Message {
    #show(val) { // método privado y solo será accedido dentro de la clase
        console.log(val);
    }

    get #add() { // getter
        console.log()
    }
}

const message = new Message();

message.show("Hola!");

// Promise any

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response)); // retorna el valor que se resuelva primero

// WeakRef

class AnyClass {
    constructor(element) {
        this.ref = new WeakRef(element)
    }
}

let isTrue = true;
let isFalse = false;

console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);
console.log(isTrue ??= isFalse);