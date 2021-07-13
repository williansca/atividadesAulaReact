// 7. Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em 
// relação ao filme: 
// ótimo: 3
//  bom: 2 
// regular: 1
// 8. Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
// a média das idades das pessoas que responderam ótimo;
// a quantidade de pessoas que responderam regular;
// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

let idade = [40,25,19,36,25,18,35,32,51,32,17,23,33,27,29];
let opiniao = [3,2,1,1,3,3,2,3,1,2,3,1,2,3,2];

let total = 0;

let idadePessoasOtimo = 0;
let mediaIdadePessoasOtimo = 0;
let totalPessoasOtimo = 0;
let mediaOtimo = 0;

let regular = 0;

let bom = 0;
let mediaBom = 0;

for (let index = 0; index < opiniao.length; index ++) {
    total++;
    if (opiniao[index] == 3) {
        totalPessoasOtimo++;
        idadePessoasOtimo = idade[index] + idadePessoasOtimo;
        //console.log(totalPessoasOtimo);
        //console.log(idadePessoasOtimo);
        
    } else if (opiniao[index] == 1) {
        regular++;
        //console.log(regular);
    } else {
        bom++;
        //console.log(bom);
    }
}
//console.log(total)
//console.log(totalPessoasOtimo);
//console.log(idadePessoasOtimo);
mediaOtimo = idadePessoasOtimo / totalPessoasOtimo;
mediaBom = (bom / total) * 100;

console.log("A porcentagem de pessoas que responderam bom foi de: " + mediaBom + "%");
console.log("A média de idade das pessoas que responderam ótimo é: " + mediaOtimo);
console.log("O total de pessoas que responderam regular foi: " + regular);

