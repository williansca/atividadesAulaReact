// 6. Tem-se um conjunto de dados contendo a altura  de 15 pessoas. 
// Faça um programa que calcule e escreva:
// a maior e a menor altura do grupo;
// a média de altura;
// o número de pessoas com mais de 1.81 de altura.

let alturas = [1.82, 1.51, 1.95, 1.65, 1.87, 1.63, 1.69, 1.93, 1.79, 1.82, 1.72, 1.75, 1.89, 1.91, 1.81];
let totalPessoas = 0;
let menor = alturas[0];
let maior = 0;
let totalAltura = 0;
let media = 0;
let maiores = 0;

alturas.forEach((altura) => {
    totalAltura = totalAltura + altura;
    totalPessoas++;
    if (altura <= menor) {
        menor = altura;
        //console.log(menor);
    }
    if (altura > maior) {
        maior = altura;
        //console.log(maior);
    }
    if (altura >= 1.81) {
        maiores++;
    }
})
media = totalAltura / totalPessoas;

console.log(`Menor altura: ${menor}\nMaior altura: ${maior}\nAltura media: ${media}\nPessoas com mais de 1.81: ${maiores}`);
