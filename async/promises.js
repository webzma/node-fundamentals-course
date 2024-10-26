function hello(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola ${name}`);
      resolve(name);
    }, 1000);
  });
}

function toSpeak() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`bla bla bla...`);
      resolve();
    }, 1000);
  });
}

function goodbye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${name}`);
      resolve(name);
    }, 3000);
  });
}

console.log("Iniciando el proceso");

hello("Wilberk")
  .then(toSpeak)
  .then(toSpeak)
  .then(toSpeak)
  .then(() => {
    goodbye("Wilberk");
  })
  .catch((error) => {
    console.log(error);
  });
