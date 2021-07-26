
let elevador = new Elevador(10, 10,);

executarSistema();

function executarSistema() {
    let key = showMenu()

    switch (key) {
        case "1":
            elevador.subir();
            executarSistema();

        case "2":
            elevador.descer();
            executarSistema();

        case "3":
            elevador.sair();
            executarSistema();

        case "4":
            elevador.entrar();
            executarSistema();


    }
};

function showMenu() {
    return window.prompt(`
    (1) - Subir;
    (2) - Descer;
    (3) - Sair;
    (4) - Entrar;
`)
};


// function sair(qtdPessoas) {
//     elevador.sai;
//     console.log(qtdPessoas);
//     alert(`Uma pessoa saiu do elevador ${elevador.qtdPessoas}`)

// }
// function entrar() {
//     if (elevador.entra()) {
//         alert(`Uma pessoa entrou elevador ${elevador.qtdPessoas}`)
//     } else {
//         alert("Elevador cheio ")
//     }
// }

