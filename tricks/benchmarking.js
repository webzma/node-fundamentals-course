let num = 0;

console.time("benchmarking");

for (let i; i < 100000000; i++) {
  num++;
  console.log(num);
}

console.timeEnd("benchmarking");
