// 4. A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o
// valor da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for
// parcelado em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o
// parcelamento for em 5 vezes, o acréscimo será de 20%. 

let valor = 1000.0;
let total = 0.0;
let valorParcela = 0.0;

let parcelas = [3, 5];
let juros = [0.1, 0.2];


const calculoPrazo = (parcelas, juros) => {
    for (let i = 0; i < parcelas.length; i++) {
        total = (valor * juros[i]) + valor;
        valorParcela = total / parcelas[i];
        console.log('O total parcelando em ' + parcelas[i] + ' vezes é R$' + total + ', o valor da parcela é R$' + valorParcela)
    }
}

calculoPrazo(parcelas, juros);
