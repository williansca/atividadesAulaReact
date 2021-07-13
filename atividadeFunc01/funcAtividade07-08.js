// 7. Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em 
// relação ao filme: 
// ótimo: 3
//  bom: 2 
// regular: 1
// 8. Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
// a média das idades das pessoas que responderam ótimo;
// a quantidade de pessoas que responderam regular;
// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

let idades = [40,25,19,36,25,18,35,32,51,32,17,23,33,27,29];
let opiniao = [3,2,1,1,3,3,2,3,1,2,3,1,2,3,2];

let totalPessoas = 0;
let totalOtimo = 0;
let somaOtimo = 0;
let regular = 0;
let bom = 0;

idades.forEach((idade,index) => {
    totalPessoas++;
    if (opiniao[index] == 3) {
        totalOtimo++;
        somaOtimo += idade;
    } else if (opiniao[index] == 1) {
        regular++;
    } else {
        bom++
    }
})

console.log(`Média das idades das pessoas que responderam ótimo: ${somaOtimo/totalOtimo}`);
console.log(`Quantidade de pessoas que responderam regular: ${regular}`);
console.log(`Porcentagem das pessoas que responderam bom: ${bom/totalPessoas * 100}%`);
//console.log(totalOtimo);
//console.log(somaOtimo);
//console.log(rgular);
//console.log(bom);
