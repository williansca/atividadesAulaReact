// 12 -  Crie um programa que apresente quais são e quantos são os números pares entre 0 e 500.

let soma = 0;
let pares = [];

for(let i = 2; i <= 500; i++) {
    if(i % 2 == 0) {
        soma ++;
        pares.push(i);
    }
}
console.log(`Total de numeros pares: ${soma}`);
console.log(`Numeros pares: ${pares}`);
