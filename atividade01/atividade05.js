// 5. Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao
// final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média
// para aprovação é igual ou superior a 8.  

const notas = [4,5,4];
let nomeAluno = "Willian Britez";
let notaNecessaria = 8;
let soma = 0;
let media = 0;


for (let index = 0; index < notas.length; index++) {
    soma = soma + notas[index];
}
media = soma / 3;
if (media >= notaNecessaria) {
    console.log(nomeAluno + " teve a média de: " + media + ", Aprovado");
} else {
    console.log(nomeAluno + " teve a média de: " + media + ", Reprovado");
};
