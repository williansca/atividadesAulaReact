// 8. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver um script que calculará os reajustes.



// Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

//     salários até R$ 280,00 (incluindo) : aumento de 20%
//     salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
//     salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
//     salários de R$ 1500,00 em diante : aumento de 5% 
//     Após o aumento ser realizado, informe na tela:
//     o salário antes do reajuste;
//     o percentual de aumento aplicado;
//     o valor do aumento;
//     o novo salário, após o aumento.

let salario = 0;
let novoSalario = 0;
let valorDoAumento = 0;
let percentualUsado = 0;
let percentual5 = 0.05;
let percentual10 = 0.1;
let percentual15 = 0.15;
let percentual20 = 0.20;

salario = prompt("Digite um salario: ");

if(salario <= 280.0) {
    //console.log(salario);
    novoSalario = (salario + salario * percentual20) / 100;
    //console.log(novoSalario);
    percentualUsado = percentual20;
} else if (salario > 280.0 && salario <= 700.0) {
    //console.log(salario);
    novoSalario = (salario + salario * percentual15) / 100;
    percentualUsado = percentual5;
} else if (salario > 700.0 && salario <= 1500.0){
    //console.log(salario);
    novoSalario = (salario + salario * percentual10) / 100;
    percentualUsado = percentual10;
} else {
    //console.log(salario);
    novoSalario = (salario + salario * percentual5) / 100;
    percentualUsado = percentual5;
}

valorDoAumento = (novoSalario - salario) * 100;
percentualUsado = percentualUsado * 100;

console.log(`Salario: R$${salario}\nPercentual de aumento: ${percentualUsado}%\nValor do aumento: R$${valorDoAumento}\nSalario atualizado: R$${novoSalario}`);

