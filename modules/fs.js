const fs = require("fs");

function readMyFile(root, cb) {
  fs.readFile(root, (err, data) => {
    console.log(data.toString());
  });
}

function writeMyFile(root, content, cb) {
  fs.writeFile(root, content, (err) => {
    if (err) {
      console.error("No se ha podido escribir el archivo");
      return;
    }
    console.log("Archivo creado");
  });
}

function deleteMyFile(root, callback) {
  fs.unlink(root, (err) => {
    if (err) {
      console.error("No se ha podido eliminar el archivo");
      return;
    }
    console.log("Archivo eliminado");
  });
}

readMyFile(__dirname + "/note.txt");
// What a crazy, jaja, things of the backends, I created a file with JavaScript 🤯
writeMyFile(__dirname + "/note.txt", "Hello, I'm Wilberk Ledezma");
deleteMyFile(__dirname + "/note.txt");
