
// ECMAScript 2020

// importación dinámica

const button = document.getElementById("btn");

button.addEventListener("click", async () => {
    const module = await import("./file.js");
    module.hello();
});