
// ECMAScript 2020

// importación dinámica

const button = document.getElementById("btn");

button.addEventListener("click", async () => {
    const module = await import("./file.js");
    module.hello();
});


// ECMAScript 2020 - características importantes

// big int: dos formas para trabajar con estos números

const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber); // 9007199254740991n
console.log(anotherBigNumber); // 9007199254740991n

// Promise.allSettled()

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve1"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response))

// Mientras todas las promesas sean ejecutadas

// globalThis

console.log(window);
console.log(globalThis);

// Nullish: Para trabajar valores nulos

const fooo = null ?? "default string";
console.log(fooo);

const foo = "asd" ?? "default string";
console.log(foo);

// Optional chaining

const user = {};

console.log(user?.profile?.email);

if (user?.profile?.email) {
    console.log("email");
} else {
    console.log("fail");
}