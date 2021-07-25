let veiculos = [];

function cadastrarVeiculo() {
    let modelo = window.prompt(`Modelo`);
    let marca = window.prompt(`Marca`);
    let placaTeste = window.prompt(`Placa`);
    let ano = window.prompt(`Ano`);

    //let veiculo = new Veiculo(modelo, marca, placa, ano);
    veiculos.push(new Veiculo(modelo, marca, placaTeste, ano));
};

//funcao abaixo verifica se placa digitada ja existe
function cadastroPlaca(placaTeste) {
    let placa = null;
    veiculos.forEach(veiculo => {
        while (veiculo.placa == placaTeste) {
            placa = window.prompt(`Placa ja cadastrada, digite outra placa: `);
            if (placa != placaTeste) {
                placaTeste = placa;
            }
        }
        return placaTeste;

    });
}

//array de veiculos e filtrar
function pesquisarVeiculo(pesquisa) {
    let retorno = [];
    //forEach para percorrer cada veiculo e comparar com o que foi digitado na pesquisa
    veiculos.forEach(veiculo => {
        if (veiculo.modelo == pesquisa || veiculo.marca == pesquisa || veiculo.placa == pesquisa) {
            retorno.push(veiculo);
        }
    });
    return retorno;
};

function excluirVeiculo(placa) {
    veiculos.forEach((x, i) => {
        if (x.placa == placa) {
            veiculos.splice(i, 1);
        }
    });
};

function alterarVeiculo(alterarPlaca) {
    //forEach para percorrer cada veiculo e comparar com o que foi digitado na placa
    veiculos.forEach(veiculo => {
        if (veiculo.placa == alterarPlaca) {
            veiculo.marca = window.prompt(`Informe a marca nova do carro`, veiculo.marca);
            veiculo.modelo = window.prompt(`Informe o novo modelo do carro`, veiculo.modelo);
        }
    });
};

function placaExiste(placa) {
    veiculos.forEach(veiculo => {
        if (veiculo.placa != placa) {
            placa = placa;
        } else {
            window.alert(`Ja existe um veiculo cadastrado com essa placa`);
        }
    });
};