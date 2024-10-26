const http = require("http");

http.createServer(router).listen(3000);

function router(req, res) {
  console.log("Nueva petición HTTP");
  console.log(res.url);

  switch (req.url) {
    case "/hola":
      res.write("Hola, ¿qué tal?");
      res.end();
      break;
    default:
      res.write("Error 404: No sé lo que quieres");
      res.end();
  }
}

console.log("Servidor escuchando en el puerto 3000");
