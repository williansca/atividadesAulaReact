// 16 - Crie um programa que solicite um número inteiro X. Gere X números aleatórios entre 0 e 100. Após isso apresente o menor número, o maior número e a média dos números gerados.

let array = [];
let total = 0;
let maior = 0;
let menor = 110;

function aleatorio(num) {
    while (array.length < num) {
        let i = Math.floor(Math.random() * 100) + 1;
        if (array.indexOf(i) === -1) array.push(i);
        total = total + i;
        //console.log(total)
        if (i > maior) maior = i;
        //console.log(maior)
        if (i < menor) menor = i;
        //console.log("menor " + menor)
    }
    console.log(array);
}
aleatorio(10);

console.log(`Maior: ${maior}`);
console.log(`Menor: ${menor}`);
console.log(`Media: ${total / array.length}`);
