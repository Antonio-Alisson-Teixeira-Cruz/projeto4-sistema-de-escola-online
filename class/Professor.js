const Usuario = require("./Usuario")

class Professor extends Usuario{
    acessoPainel() {
        return "Painel do Professor: gerenciar notas e turmas"
    }
}

module.exports = Professor