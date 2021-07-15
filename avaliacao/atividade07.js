// 7 - Crie um programa que apresente os 10 primeiros números da série de Fibonacci. Ex.: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
let array = [];
let number = 10;
let n1 = 0;
let n2 = 1;
let next;


for (let i = 0; i < number; i++) {
  //console.log(array);
  array.push(n1);
  next = n1 + n2;
  //console.log(next);
  n1 = n2;
  //console.log(n1);
  n2 = next;
  //console.log(n2);
}
console.log(array)