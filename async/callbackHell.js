function hello(name, myCallback) {
  setTimeout(() => {
    console.log(`Hola ${name}`);
    myCallback();
  }, 1000);
}

function toSpeak(speakCallback) {
  setTimeout(() => {
    console.log(`bla bla bla...`);
    speakCallback();
  }, 1000);
}

function goodbye(name, anotherCallback) {
  setTimeout(() => {
    console.log(`Adios ${name}`);
    anotherCallback();
  }, 3000);
}

function conversation(name, times, callback) {
  if (times > 0) {
    toSpeak(() => {
      conversation(name, times - 1, callback);
    });
  } else {
    goodbye(name, callback);
  }
}

console.log("Iniciando proceso...");
hello("Wilberk", () => {
  conversation("Wilberk", 3, () => {
    console.log("Proceso terminado");
  });
});
