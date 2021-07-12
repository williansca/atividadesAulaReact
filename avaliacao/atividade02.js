//2 - Crie um programa que apresente no console todos os números pares de 1 a 50, um ao lado 
//do outro na mesma linha. Ex.: 2 – 4 – 6 – 8 – 10... 

const numbers = [];

for (let i = 1; i <= 50; i++){
    //console.log(i);
    if(i % 2 == 0){
        numbers.push(i);
    }
}
//join junta algo 
console.log(numbers.join(` - `));
