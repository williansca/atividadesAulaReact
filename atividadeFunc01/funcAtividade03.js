// 3. Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais devem ser somado os dois, caso contrário multiplique A por B, ao final do cálculo atribuir o valor para uma variável C. 

let a = 5;
let b = 5;
let c = 0;

const somaOuMultiplicacao = (a,b) => {
    if (a == b) {
        c = a + b;
        console.log(`Os números são iguais, o resultado da soma é: ${c}, portanto o valor de C`);
    } else {
        c = a * b;
        console.log(`Os números são diferentes, o resultado da multiplicação é: ${c}, portanto o valor de C`);
    }
}

console.log(somaOuMultiplicacao(a,b));
