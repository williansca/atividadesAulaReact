// 14 - Crie um programa que solicite dois números inteiros ao usuário: A e X. Apresente todos os números pares de A até X.

let a = 2;
let x = 15;

for(let i = a; i <= x; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}
