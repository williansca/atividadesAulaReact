// 10. Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:
// total de homens;
// total de mulheres;
// média das idades dos homens;
// média dos pesos das mulheres.

let idade = [18,19,20,21,22,23,24,25,26,27];
let peso = [80,90,55,65,75,70,85,63,72,83];
let sexo = ["M","M","F","F","F","M","M","F","M","F"];

let totalHomens = 0;
let totalIdadeHomens = 0;
let mediaIdadeHomens = 0;

let totalMulheres = 0;
let totalPesoMulheres = 0;
let mediaPesoMulheres = 0;

for (let index = 0; index < idade.length; index++) {
    if (sexo[index] == "M") {
        totalHomens++;
        //console.log(totalHomens);
        totalIdadeHomens = totalIdadeHomens + idade[index];
        //console.log(mediaIdadeHomens);
    } else {
        totalMulheres++;
        //console.log(totalMulheres);
        totalPesoMulheres = totalPesoMulheres + peso[index];
        //console.log(totalPesoMulheres);
    }
}
mediaIdadeHomens = totalIdadeHomens / totalHomens;
console.log("O total de homens é: " + totalHomens);
console.log("A média de idade dos homens é: " + mediaIdadeHomens);

mediaPesoMulheres = totalPesoMulheres / totalMulheres;
console.log("O total de mulheres é: " + totalMulheres);
console.log("A média do peso das mulheres é: " + mediaPesoMulheres);

