// 8 e 9. Faça um programa que receba 10 números, 
// calcule e imprima a soma dos números pares e a soma dos números primos.

let numeros = [15,10,8,36,44,85,66,74,55,24];
let somaPares = 0;
let somaImpares = 0;

for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] % 2 == 0) {
        somaPares = somaPares + numeros[index];
        //console.log(somaPares);
    } else {
        somaImpares = somaImpares + numeros[index];
        //console.log(somaImpares);
    }
}
console.log("O total da soma dos números pares é: " + somaPares);
console.log("O total da soma dos números ímpares é: " + somaImpares);

