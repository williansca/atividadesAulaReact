// 5. Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao
// final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média
// para aprovação é igual ou superior a 8.  

let nome = "Willian Britez";
let notas = [10,10,9];
let soma = 0;
let media = 0;

notas.forEach((nota, index) => {
    soma = soma + nota;
    //console.log(soma);
    if (index == notas.length - 1) {
        media = soma / notas.length;
        if (media >= 8) {
            console.log(`Nome do aluno: ${nome}\nMédia: ${media}\nAluno Aprovado.`)
        } else (
            console.log(`Nome do aluno: ${nome}\nMédia: ${media}\nAluno Reprovado.`)
        )     
    }
})

notas.forEach;