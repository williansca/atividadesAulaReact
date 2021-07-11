// 6. Tem-se um conjunto de dados contendo a altura  de 15 pessoas. 
// Faça um programa que calcule e escreva:
// a maior e a menor altura do grupo;
// a média de altura;
// o número de pessoas com mais de 1.81 de altura.

let maior = 0.;
let totalAltura = 0;
let qtdMaiores = 0;
let altura = [1.82, 1.51, 1.95, 1.65, 1.87, 1.63, 1.69, 1.93, 1.79, 1.82, 1.72, 1.75, 1.89, 1.91, 1.81];
let menor = altura[0];
let totalPessoas = 0;

for (let index = 0; index < altura.length; index++) {
    totalPessoas++;
    totalAltura = totalAltura + altura[index];
    if (altura[index] > maior) {
        maior = altura[index];
    } else if (altura[index] < menor) {
        menor = altura[index];
    };
    if (altura[index] > 1.81) {
        qtdMaiores++;
    }
}
console.log('O menor altura é ' + menor);
console.log('A maior altura é ' + maior);
console.log('A média total é ' + (totalAltura / totalPessoas));
console.log('A quantidade de pessoas maiores do que 1.81 é de ' + qtdMaiores);

