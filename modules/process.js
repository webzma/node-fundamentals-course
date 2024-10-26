process.on("exit", () => {
  console.log("Process is exiting");
});

process.on("beforeExit", () => {
  console.log("Before exit");
});

process.on("uncaughtException", (error, origen) => console.log(error, origen));

ii();
