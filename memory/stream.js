const fs = require("fs");
const stream = require("stream");
const util = require("util");

/* let data = "";
let readStream = fs.createReadStream(__dirname + "/input.txt");

readStream.setEncoding("UTF8");

readStream.on("data", (chunk) => {
  data += chunk.toString();
});

readStream.on("end", () => {
  console.log(data);
});

process.stdout.write("Hola");
process.stdout.write("que");
process.stdout.write("tal"); */

const Transform = stream.Transform;

function Mayus() {
  Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
};

let mayus = new Mayus();
ReadableStream.pipe(mayus).pipe(process.stdout);
