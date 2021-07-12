// 3. Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais devem
// ser somado os dois, caso contrário multiplique A por B, ao final do cálculo atribuir o valor para uma variável C. 

const A = 10;
const B = 10;

if (typeof A == 'number' &&  typeof B == 'number') {
    let C;
    if (A == B) {
        C = A + B;
        console.log('O valor de C é: ' + C);
    } else {
        C = A * B;
        console.log('O valor de C é: ' + C);
    }
} else {
    console.log('Tipo de dado errado.')
}
