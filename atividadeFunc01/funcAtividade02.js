//  2. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

//      A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//      A mensagem "Reprovado", se a média for menor do que sete;
//      A mensagem "Aprovado com Distinção", se a média for igual a dez.

let notas = [10, 10];
let soma = 0;
let media = 0;

notas.forEach;

notas.forEach((nota, index, notas) => {
    soma = soma + nota;
    //console.log(soma);
    //console.log(index);
    if (index == notas.length - 1) {
        media = soma / notas.length;
        if (media >= 7 && media < 10) {
            console.log(`Média ${media} Aprovado`)
        } else if (media < 7) {
            console.log(`Média ${media} Reprovado`)
        } else {
            console.log(`Média ${media} Aprovado com Distinção`)
        }
    }
})
