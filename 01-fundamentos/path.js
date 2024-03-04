const path = require("path");

console.log(path.sep);
console.log(path.join("/public", "dist", "/styles", "main.css"));
const filePath = path.join("/public", "dist", "/styles", "main.css");
console.log(filePath);
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.parse(filePath));
console.log(path.resolve("dist"));
