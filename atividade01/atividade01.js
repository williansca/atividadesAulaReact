// 1.  Faça um programa que entre com três números, faça a média aritmética e mostre o
// resultado. 

let scores = [10, 9, 8];

// let average = (scores[0] + scores[1] + scores[2]) / scores.length;
// console.log('A média entre as notas é: ' + average);

let total = 0;
for (let index = 0; index < scores.length; index++) {
    total += scores[index];
}

let average = total / scores.length;
console.log('A média entre as notas é: ' + average);