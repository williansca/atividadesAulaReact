// 8 - Crie um programa que apresente todos os anos bissextos entre os anos de 2000 e 2030.

let anoBissextos = [];

for (let i = 1999; i < 2031; i++) {
    if (i % 4 == 00 && i % 100 != 0 || i % 400 == 0) {
        anoBissextos.push(i);
    }
}
console.log(`Anos bissextos entre 2000 a 2030: ${anoBissextos}`);