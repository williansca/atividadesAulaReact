// 8. Faça um programa que receba 10 números, 
// calcule e imprima a soma dos números pares e a soma dos números primos.

let somaPrimo = 0;
let somaPares = 0;
let determinadoNumero = 10;

function evenNumber(num) {
    for (let i = 2; i <= num; i++) {
        if (num % 2 == 0) {
            return true;
        }
    }
    return false;
}

function primeNumber(num) {
    for (let divisor = 2; divisor < num; divisor++) {
        if (num % divisor == 0) {
            return false;
        }
    }
    return true;
}

for (let i = 2; i <= determinadoNumero; i++) {
    if (primeNumber(i)) {
        //console.log(i);
        somaPrimo += i;
    }
    if (evenNumber(i)) {
        //console.log(i);
        somaPares += i;
    }
}

console.log(`Soma dos pares: ${somaPares}`);
console.log(`Soma dos primos: ${somaPrimo}`);