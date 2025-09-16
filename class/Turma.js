class Turma {
    constructor(nome) {
        this.nome = nome
        this.alunos = []
        this.disciplinas = []
    }

    adicionarDisciplina(disciplina) {
        this.disciplinas.push(disciplina)
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno)
    }
}

module.exports = Turma