// ⦁ Crie um programa de cadastro de veículos de uma loja de seminovos (utilizando array). O programa deve implementar as funcionalidades descritas na figura abaixo:

// (1) - Cadastrar automóvel;
// (2) - Pesquisar automóvel;
// (3) - Excluir automóvel;
// (4) - Alterar automóvel;
// (0) - Sair;

// O cadastro do automóvel deve solicitar modelo do veículo, marca, placa e ano de fabricação. O programa deve respeitar as seguintes restrições:
// ⦁ Não se pode cadastrar uma placa previamente cadastrada;
// ⦁ A pesquisa deve ser feita pela placa, marca ou modelo e deve listar todos os resultados que correspondem à pesquisa;
// ⦁ A exclusão deve ser feita pela placa do veículo;
// ⦁ O usuário deve pesquisar um veículo pela placa para alterar o cadastro e só deve permitir alterar o modelo e marca;

class Veiculo {
    constructor(modelo, marca, placa, ano) {
        this.modelo = modelo;
        this.marca = marca;
        this.placa = placa;
        this.ano = ano;
    };
};

// let veiculo = new Veiculo(`Creta`, `Hyndai`, `BR12290`, 2021);
// console.log(veiculo);
