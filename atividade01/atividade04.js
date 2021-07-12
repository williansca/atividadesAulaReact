// 4. A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o
// valor da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for
// parcelado em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o
// parcelamento for em 5 vezes, o acréscimo será de 20%. 

let valorProduto = 1000;
let total = 0;
let valorParcela = 0;

let parcelas = [3, 5];
let juros = [0.10, 0.20];

for (let index = 0; index < parcelas.length; index++) {

    total = (valorProduto * juros[index]) + valorProduto;
    valorParcela = total / parcelas[index];
    console.log('O total parcelando em ' + parcelas[index] + ' vezes é R$' + total + ', o valor da parcela é R$' + valorParcela);
}
