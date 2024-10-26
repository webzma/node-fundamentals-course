// Esta es la mejor forma en mi opinión para manejar asincronismo en JavaScript 🧨

async function hello(name) {
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

console.log("Primera instrucción");

async function main() {
  let myName = "Wilberk";
  await hello(myName);
  await toSpeak();
  await toSpeak();
  await toSpeak();
  await goodbye(myName);
}
console.log("Segunda instrucción");
