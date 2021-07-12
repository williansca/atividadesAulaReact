// 1.  Faça um programa que entre com três números, faça a média aritmética e mostre o
// resultado. 

let notas = [8, 9, 10];
let soma = 0;
let media = 0;

notas.forEach;

notas.forEach((nota, index, notas) => {
    soma = soma + nota;
    if (index == notas.length - 1) {
        media = soma / notas.length;
        console.log(`Média: ${media}`);
    }
});


//------------------------------------------------------------------//

//na maneira abaixo chamamos a funcao depois da inicializacao

// const mediaAritmetica = (notas) => {
//     for (let i = 0; i < notas.length; i++) {
//         soma = soma + notas[i];
//     }
//     return soma / notas.length;
// }

// console.log(mediaAritmetica(notas));

//---------------------------------------------------------------------//

//na maneira abaixo podemos chamar a funcao antes da inicializacao

// console.log(mediaAritmetica(notas));

// function mediaAritmetica(notas){
//     for(let i = 0; i < notas.length; i++){
//         soma = soma + notas[i];
//     }
//     return soma / notas.length;
// }
