const { exec, spawn } = require("child_process");

/* exec("node ../modules/console", (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(stdout);
});
 */

let process = spawn("ls", ["-la"]);
console.log(process.pid);
console.log(process.connected);

process.stdout.on("data", (data) => {
  console.log("¿Está muerto?");
  console.log(process.killed);
  console.log(data.toString());
});

process.on("exit", () => {
  console.log("El proceso terminó");
});
