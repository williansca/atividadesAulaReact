// 16 - Crie um programa que apresente o quadrado dos números de 0 a 20. Exemplo: 
// 0² = 0
// 1² = 1
// 2² = 4

let array = [];
let square = [];
let result = null;

for(let i = 0; i <= 20; i++) {
    array.push(i);
    square.push(i ** 2);
    result = array[i] + "² = " + square[i];
    console.log(result);
}
