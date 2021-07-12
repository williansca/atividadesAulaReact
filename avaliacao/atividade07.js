// 7 - Crie um programa que apresente os 10 primeiros números da série de Fibonacci. Ex.: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

let numbers = 0;
const fibonacci = (num) => {
    if (num <= 1) return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  };


console.log();