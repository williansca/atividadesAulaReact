// 7. Faça um script que pergunte em que turno você estuda. 
// Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. 
// Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" 
// ou "Valor Inválido!", conforme o caso.

let turno = null;

turno = prompt("Em que turno você estuda? (M-matutino ou V-Vespertino ou N- Noturno)");
//console.log(turno);
let turnoUpper = turno.toUpperCase();
if (turnoUpper === "M"){
    console.log("Bom dia");
} else if(turnoUpper === "V"){
    console.log("Boa tarde!");
} else if(turnoUpper === "N") {
    console.log("Boa noite!")
} else {
    console.log("Valor Inválido!")
}
