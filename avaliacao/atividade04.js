// 4 - Crie um programa que apresente no console todos os números ímpares de 1 a 100, 
// um ao lado do outro na mesma linha. 

// (utilizando 'forEach')

let oddNumbers = [];

for(let i = 1; i <= 100; i++) {
    if(i % 2 != 0){
        oddNumbers.push(i);
    }
}
//console.log(oddNumbers);

oddNumbers.forEach((item) => {
    console.log(item);
});
