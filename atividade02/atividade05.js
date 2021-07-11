// 5. Faça um script que leia três números inteiros, 
// em seguida mostre o maior e o menor deles.
let numero = 0;
let maior = 0;
let numbers = [45,15,32];
let menor = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maior){
        maior = numbers[i];
        //console.log(maior);
    }
    if (numbers[i] < menor){
        menor = numbers[i];
        //console.log(menor);
    }
    
}

console.log(`O maior número é: ${maior}`);
console.log(`O menor número é: ${menor}`);
