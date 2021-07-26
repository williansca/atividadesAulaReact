class Elevador {
    constructor(qtdMaximaPessoas, andarMaximo) {
        this.andar = 0;
        this.terreo = 0;
        this.qtdPessoas = 0;
        this.qtdMaximaPessoas = qtdMaximaPessoas;
        this.andarMaximo = andarMaximo;
    };

    subir() {
        console.log(`Elevador no andar ${this.andar}`);
        if (this.andar >= this.andarMaximo) {
            return window.alert("Chegou no andar maximo");;
        } else {
            this.andar++;
            console.log(`Elevador no andar ${this.andar}`);
            return window.alert(`O Elevador subiu para o andar ${this.andar}`);
        }

    };

    descer() {
        console.log(`Elevador no andar ${this.andar}`);
        if (this.andar == this.terreo) {
            return window.alert("Elevador no andar Térreo");
        } else {
            this.andar--;
            console.log(`Elevador no andar ${this.andar}`);
            return window.alert(`O Elevador desceu para o andar ${this.andar}`);
        }

    };

    sair() {
        console.log(`Quantidade de pessoas ${this.qtdPessoas}`);
        if (this.qtdPessoas == 0) {
            return window.alert("Elevador Vazio");
        } else {
            this.qtdPessoas--;
            console.log(`Quantidade de pessoas ${this.qtdPessoas}`);
            return window.alert(`A quantidade de pessoas dentro do elevador é ${this.qtdPessoas}`);
        }
    };

    entrar() {
        console.log(`Quantidade de pessoas ${this.qtdPessoas}`);
        if (this.qtdPessoas >= this.qtdMaximaPessoas) {
            return window.alert("Capacidade máxima de pessoas atingida");
        } else {
            this.qtdPessoas++;
            console.log(`Quantidade de pessoas ${this.qtdPessoas}`);
            return window.alert(`A quantidade de pessoas dentro do elevador é de ${this.qtdPessoas} pessoas`);
        }
    }
}