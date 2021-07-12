// 6 - Crie um programa que solicite ao usuário um número inteiro entre 0 e 100 (exemplo let numero = 33)
//  (o programa não deve prosseguir se o número não estiver nesse intervalo). 
//  Após, gere 10 números randômicos entre 0 e 100 e apresente quantos randômicos 
//  são maiores ou iguais ao número do usuário.
let i = 0;
let random = [];
let number = 0;
let totalIgualMaior = 0;
let numerosIgualMaiores = [];

number = prompt("Digite um numero inteiro entre 0 e 100");

if(number < 0 || number > 100) {
    window.alert("Numero invalido");
} else {
    while(i < 10){
        random[i] = generateRandomInteger(100);
        i++;
    }
}
//console.log(random);
//console.log(number);

random.forEach((item) => {
    if(item == number || item > number){
        totalIgualMaior++;
        //console.log(item);
        numerosIgualMaiores.push(item);
        //console.log(numerosIgualMaiores);
    }
})
console.log(`Número digitado: ${number}\nTotal de número(s) randômicos: ${totalIgualMaior}\nNúmero(s) igual ou maior(es): ${numerosIgualMaiores}`);
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}
