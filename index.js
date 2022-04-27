const {estudantesLista, Aluno} = require('./estudantes');

/**
 * Micro desafio - Passo 3
 * Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do
 * curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de
 * estudantes (um array composto pelos alunos criados no passo 1).
 */

let curso = {
    nome: 'Programação Imperativa',
    notaAprovacao: 6,
    maxFaltas: 6,
    estudantes: estudantesLista,

    /**
     * Micro desafio - Passo 4
     * 
     * Crie o método que permite adicionar alunos à lista do curso, ou seja, quando
     * chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na
     * propriedade lista de estudantes do objeto curso.
     * 
     * @param {string} name Nome do(a) aluno(a)
     * @param {array} notas Array de notas do aluno(a)
     * @returns 
     */

    adicionarAluno: function(name, notas) {
        return this.estudantes.push(new Aluno(name, notas));
    },

    /**
     * Micro desafio - Passo 5
     * 
     * Crie um método para o objeto curso que receba um aluno (como parâmetro) e
     * retorne true se ele aprovou no curso ou false em caso de reprovação.
     * 
     * Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota
     * de aprovação e ter menos faltas que faltas máximas.
     * 
     * Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
     * 
     * @param {object} aluno 
     * @returns
     */

    alunoAprovou(aluno) {
        if (aluno.calcularMedia() >= this.notaAprovacao && aluno.qtdFaltas < this.maxFaltas) {
            return true;
        }
        else if (aluno.qtdFaltas == this.maxFaltas && aluno.calcularMedia() > (this.notaAprovacao*0,1 + this.notaAprovacao)) {
            return true;
        } else {
            return false;
        }
    },

    /**
     * Micro desafio - Passo 6
     * 
     * Crie um método para o objeto curso que percorra a lista de estudantes e retorne um
     * array de booleanos com os resultados se os alunos aprovaram ou não
     */

    alunosAprovaram() {
        let resultado = [];

        this.estudantes.forEach(estudante => {
            resultado.push(this.alunoAprovou(estudante))
        });

        return resultado;
    }
    
};
// console.log('\n/----------- Micro desafio - Passo 7 -----------/');
// console.log('\nLista de Estudantes Importada de estudantes.js');
// console.table(curso.estudantes);

// console.log('\n/----------- Micro desafio - Passo 1 -----------/');
// console.log('\nObjeto Aluno criado via Classe');
// console.log(Aluno);

// console.log('\n/----------- Micro desafio - Passo 2.1 -----------/');
// console.log(`\nA média do(a) estudante ${curso.estudantes[0].nome} é ${curso.estudantes[0].calcularMedia().toFixed(2)}`);

// console.log('\n/----------- Micro desafio - Passo 2.2 -----------/');
// console.log(`\nAdicionar Falta a(o) Estudante ${curso.estudantes[1].nome}`);
// curso.estudantes[1].faltas();
// curso.estudantes[1].faltas();
// curso.estudantes[1].faltas();
// curso.estudantes[1].faltas();
// curso.estudantes[1].faltas();
// curso.estudantes[1].faltas();
// console.table(curso.estudantes);

// console.log('\n/----------- Micro desafio - Passo 3 -----------/');
// console.log('\nObjeto Literal curso criado');
// console.log(curso);

// console.log('\n/----------- Micro desafio - Passo 4 -----------/');
// curso.adicionarAluno('Marcela', [0, 10, 8]);
// console.log(`\nNovo(a) Estudante: ${curso.estudantes[curso.estudantes.length-1].nome}, adicionado(a) ao Curso`);
// console.table(curso.estudantes);

// console.log('\n/----------- Micro desafio - Passo 5 -----------/');
// if (curso.alunoAprovou(curso.estudantes[1])) {
//     console.log(`\nO aluno ${curso.estudantes[1].nome} está aprovado`);
// } else {
//     console.log(`\nO aluno ${curso.estudantes[1].nome} está reprovado`);
// }

// console.log('\n/----------- Micro desafio - Passo 6 -----------/');
// console.log(curso.alunosAprovaram());

console.log(Aluno);