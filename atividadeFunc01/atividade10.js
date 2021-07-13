// 10. Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:
// total de homens;
// total de mulheres;
// média das idades dos homens;
// média dos pesos das mulheres.

let idade = [18,19,20,21,22,23,24,25,26,27];
let peso = [80,90,55,65,75,70,85,63,72,83];
let sexo = ["M","M","F","F","F","M","M","F","M","F"];
let totalHomens = 0;
let totalMulheres = 0;
let totalIdadeHomens = 0;
let totalIdadeMulheres = 0;

sexo.forEach((sex, index) => {
    if (sex == "M") {
        totalHomens++;
        //console.log(totalHomens);
        totalIdadeHomens += idade[index];
        //console.log(totalIdadeHomens);
    } else {
        totalMulheres++;
        //console.log(totalMulheres);
        totalIdadeMulheres += idade[index];
        //console.log(totalIdadeMulheres);
    }
})

console.log(`Total de homens: ${totalHomens}`);
console.log(`Total de mulheres: ${totalMulheres}`);
console.log(`Média de idade dos homens: ${totalIdadeHomens / totalHomens}`);
console.log(`Média de idade das mulheres: ${totalIdadeMulheres / totalMulheres}`);
