// 6. Faça um script que leia três números e 
// mostre-os em ordem decrescente.


const ordemDescrecente = function (numeros) {

    let maior = 0;
    let menor = numeros[0];
    let meio = 0;

    for (i = 0; i < numeros.length; i++) {

        if (numeros[i] > maior) {
            maior = numeros[i];
        }

        if (numeros[i] < menor) {
            menor = numeros[i];
        }

    }

    if (numeros[0] < maior && numeros[0] > menor) {
        meio = numeros[0];
    }
    if (numeros[1] < maior && numeros[1] > menor) {
        meio = numeros[1];
    }
    if (numeros[2] < maior && numeros[2] > menor) {
        meio = numeros[2];
    }

    console.log(`${maior},${meio},${menor}`);
}


const results = ordemDescrecente([40, 20, 30]);
