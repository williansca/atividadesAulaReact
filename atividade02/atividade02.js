// 2. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

//     A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//     A mensagem "Reprovado", se a média for menor do que sete;
//     A mensagem "Aprovado com Distinção", se a média for igual a dez.

let qtdNotas = 0;
let media = 7;
let total = 0;
let notas = [10,10];
let mediaAluno;


for (let i = 0; i < notas.length; i++) {
    qtdNotas++;
    //console.log(qtdNotas);
    total = total + notas[i];
    //console.log(total);
}

media = total / qtdNotas;
console.log(`A média do aluno é ${media}`);

