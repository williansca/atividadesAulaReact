// 9. Faça um script para o cálculo de uma folha de pagamento, sabendo que os descontos 
// são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) 
// e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado 
// (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. 
// O script deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

//     Desconto do IR:
//     Salário Bruto até 900 (inclusive) - isento
//     Salário Bruto até 1500 (inclusive) - desconto de 5%
//     Salário Bruto até 2500 (inclusive) - desconto de 10%
//     Salário Bruto acima de 2500 - desconto de 20% 
//     
//     Imprima na tela as informações, dispostas conforme o exemplo abaixo. 
//     No exemplo o valor da hora é 5 e a quantidade de hora é 220.

//     Salário Bruto: (5 * 220)        : R$ 1100,00
//     (-) IR (5%)                     : R$   55,00
//     (-) INSS ( 10%)                 : R$  110,00
//     FGTS (11%)                      : R$  121,00
//     Sindicato (3%)                  : R$   33,00
//     Total de descontos              : R$  165,00
//     Salário Liquido                 : R$  935,00

let salarioBruto = 0;
let horasTrabalhadas = 0;
let valorHora = 0;

let impostoRenda = 0;
let inss = 0.10;

let fgts = 0.11;
let sindicato = 0.3;

let descontos = salarioBruto;
let salarioLiquido = 0;

horasTrabalhadas = prompt(`Informe a quantidade de horas trabalhadas`);
valorHora = prompt(`Informe o valor recebido por hora`);
salarioBruto = horasTrabalhadas * valorHora;

if(salarioBruto <= 900) {
    salarioLiquido = (salarioBruto - salarioBruto * inss);
    //console.log(salarioLiquido);
} else if (salarioBruto > 900 && salarioBruto <= 1500) {
    impostoRenda = 0.05;
    salarioLiquido = (salarioBruto - ((salarioBruto * inss) + (salarioBruto * impostoRenda)));
    //console.log(salarioLiquido);
} else if (salarioBruto > 1500 && salarioBruto <= 2500) {
    impostoRenda = 0.10;
    salarioLiquido = (salarioBruto - ((salarioBruto * inss) + (salarioBruto * impostoRenda)));
    //console.log(salarioLiquido);
} else {
    impostoRenda = 0.20;
    salarioLiquido = (salarioBruto - ((salarioBruto * inss) + (salarioBruto * impostoRenda)));
    //console.log(salarioLiquido);
}
//console.log(salarioLiquido);
//console.log(impostoRenda);
//console.log(descontos);
desconto = (salarioBruto*impostoRenda) + (salarioBruto*inss);
console.log(`Salario Bruto: (${horasTrabalhadas} * ${valorHora}: R$${salarioBruto})\n(-) IR (${impostoRenda*100}%): R$${salarioBruto*impostoRenda}\n(-) INSS (10%): R$${salarioBruto*inss}\nFGTS (11%): R$${salarioBruto*fgts}\nSindicato (3%): R$${salarioBruto*sindicato/10}\nTotal de descontos: R$${desconto}\nSalario Liquido: R$${salarioLiquido}\n`);
