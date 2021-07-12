// 5 - Crie um programa que apresente no console todos os números múltiplos 
// de três de 1 a 100, um ao lado do outro. Ao final, na linha seguinte, apresente 
// a quantidade de números apresentados. 
// (utilizando 'for')

let numbers = [];

for (let i = 3; i <= 100; i++) {
    if(i % 3 == 0){
        numbers.push(i);
    }
}
console.log(numbers);
