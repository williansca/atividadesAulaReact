// 15 - Crie um programa que apresente a soma dos números pares e dos ímpares de 0 a 50.

let somaPares = 0;
let somaImpares = 0;

for(let i = 1; i <= 50; i++) {
    if(i % 2 == 0) {
        //console.log(i);
        somaPares += i;
    } else {
        //console.log(i);
        somaImpares += i;
    }
}
console.log(`Soma dos numeros pares: ${somaPares}`);
console.log(`Soma dos numeros impares: ${somaImpares}`);
