// 13 - Crie um programa que solicite um inteiro X ao usuário (exemplo let numero = 33). Apresente todos os números inteiros pares de 0 a X.

let inteiros = [];
let x  = 40;

for(let i = 2; i <= x; i++) {
    if(i % 2 == 0) {
        inteiros.push(i);
    }
}
console.log(`Numeros inteiros pares de 0 a ${x}: ${inteiros}`);