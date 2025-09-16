class Usuario {
    #nome
    #idade
    constructor(nome, idade){
        this.#nome = nome
        this.#idade = idade
    }

    get nome() {
        return this.#nome
    }

    get idade() {
        return this.#idade
    }

    set nome(valor) {
        this.#nome = valor
    }

    set idade(valor) {
        this.#idade = valor
    }

    acessoPainel() {
        return "Acesso ao sistema escolar";
    }
}

module.exports = Usuario