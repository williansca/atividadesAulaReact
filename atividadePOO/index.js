// array funciona como o banco de dados

rodarSistema();

function rodarSistema() {
    let key = apresentarMenu();
    switch (key) {
        case `1`:
            cadastrarVeiculo();
            window.alert(apresentarVeiculos(veiculos));
            rodarSistema();
        case `2`:
            let pesquisa = window.prompt(`Digite a placa, marca ou modelo`);
            let veiculosPesquisa = pesquisarVeiculo(pesquisa);
            window.alert(apresentarVeiculos(veiculosPesquisa));
            rodarSistema();
        case `3`:
            let placa = window.prompt(`Digite a placa do veiculo que deseja excluir`);
            excluirVeiculo(placa);
            window.alert(apresentarVeiculos(veiculos));
            rodarSistema();
        case `4`:
            let alterarPlaca = window.prompt(`Digite a placa do veiculo que deseja alterar`);
            alterarVeiculo(alterarPlaca);
            window.alert(apresentarVeiculos(veiculos));
            rodarSistema();
    };
};

function apresentarMenu() {
    return window.prompt(`
        (1) - Cadastrar automóvel;
        (2) - Pesquisar automóvel;
        (3) - Excluir automóvel;
        (4) - Alterar automóvel;
        (0) - Sair;
    `);
};
//console.log(apresentarMenu());


function apresentarVeiculos(veiculos) {
    let msg = ``;
    veiculos.forEach(x => {
        msg += `Modelo: ${x.modelo}\nMarca: ${x.marca}\nPlaca: ${x.placa}\nAno: ${x.ano}\n\n`;
    });
    return msg;
};