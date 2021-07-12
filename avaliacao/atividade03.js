// 3 - Crie um programa que apresente no console todos os números de 300 a 100. 

// (utilizando 'forEach')

let numero = 100;

let arrayNumero = [];

for( let i = 300;  i >= numero ; i--) {
    arrayNumero.push(i);
}
//console.log(arrayNumero);

arrayNumero.forEach((entry) => {
    console.log(entry);
})
