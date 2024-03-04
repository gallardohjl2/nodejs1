const fs = require("fs");

// Leer un archivo
// const first = fs.readFileSync("./data/fisrt.txt", "utf-8");
// const second = fs.readFileSync("./data/second.txt");
// console.log(first);
// console.log(second.toString());

// // Crear Archivos

// fs.writeFileSync("./data/third.txt", "Este es un tercer archivo");

// const title = "Este es el contenido del archivo";
// fs.writeFileSync("./data/fourth.txt", title);

// // Añadir texto al archivo
// const title2 = "Este contenido se ha añadido";
// fs.writeFileSync("./data/fourth.txt", title, {
// flag: "a",
// });

fs.readFile("./data/fisrt.txt", (error, data) => {
  if (error) {
    console.log(error);
  }

  console.log(data.toString());
});

fs.readFile("./data/fisrt.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }

  console.log(data);
});
