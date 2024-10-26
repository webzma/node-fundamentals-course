//let buffer = Buffer.alloc(4);
let buffer1 = Buffer.from([1, 2, 3]);
let buffer2 = Buffer.from("Hola");
console.log(buffer2);

let abc = Buffer.alloc(26);

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97;
}
console.log(abc.toString());
