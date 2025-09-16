const Aluno = require("./class/Aluno")
const Coordenador = require("./class/Coordenador")
const Disciplina = require("./class/Disciplina")
const Nota = require("./class/Nota")
const Professor = require("./class/Professor")
const Turma = require("./class/Turma")
const Usuario = require("./class/Usuario")

const aluno = new Aluno("Maria", 15);
const professor = new Professor("Everson", 28)
const coordenador = new Coordenador("Jacqueline", 59)

console.log(aluno.acessoPainel())
console.log(professor.acessoPainel())
console.log(coordenador.acessoPainel())

const fisica = new Disciplina("Física", 14)
const turmaB = new Turma("2° B")

turmaB.adicionarDisciplina(fisica)
turmaB.adicionarAluno(aluno)

console.log(turmaB.disciplinas)
console.log(turmaB.alunos)

const notaFisica = new Nota(9, fisica)
aluno.adicionarNota(notaFisica)

console.log(aluno.notas,)