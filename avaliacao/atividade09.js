// 9 - Crie um programa que gere 10 números inteiros randômicos entre 1 e 100. Apresente o maior e o menor deles. (crie uma função para pegar o maior numero do array);

let random = [];
let menor = 101;
let maior = 0;

for (let i = 0; i < 10; i++) {
    random[i] = generateRandomInteger(100);
}

const number = (random) => {
    for (let j = 0; j < random.length; j++) {
        if (random[j] > maior) {
            maior = random[j];
        }
        if (random[j] < menor) {
            menor = random[j];
        }
    }
    console.log(maior);
    console.log(menor);
}

console.log(random);
console.log(number(random));

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}