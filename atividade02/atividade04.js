// 4. Faça um script que pede dois inteiros e armazene eles em duas 
// variáveis. Em seguida, troque o valor das variáveis, 
// invertendo e exibindo o antes e o depois em uma janela de alert.

let number1 = 0;
let number2 = 0;

number1 = prompt("Digite um número: ");
number2 = prompt("Digite um número: ");

let number3 = number1;
number1 = number2;
number2 = number3;

window.alert(`O número 1 era: ${number3} agora é: ${number1}\nO número 2 era: ${number1} agora é: ${number2}`);
//console.log(numero1);
