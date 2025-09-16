const Usuario = require("./Usuario")

class Coordenador extends Usuario{
    acessoPainel() {
        return "Painel do Coordenador: administração escolar"
    }
}

module.exports = Coordenador