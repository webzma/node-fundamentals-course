console.log("Thing");
console.info("Info");
console.error("Error");
console.warn("Warn");
console.table([1, 2, 3, 4, 5]);
console.group("Conversation");
console.log("bla bla bla");
console.log("bla bla bla");
console.groupEnd("Conversation");

function functionOne() {
  console.group("functionOne");
  console.log("This is the first function");
  console.log("This is the first function");
  console.log("This is the first function");
  console.groupEnd("functionOne");

  functionTwo();
}

function functionTwo() {
  console.group("functionTwo");
  console.log("This is the second function");
  console.log("This is the second function");
  console.log("This is the second function");
  console.groupEnd("functionTwo");
}

functionOne();

console.count("Hello");
console.count("Hello");
console.count("Hello");
console.count("Hello");
console.count("Hello");
