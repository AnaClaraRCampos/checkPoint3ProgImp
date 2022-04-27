/**
 * 
 * Micro desafio - Passo 1
 * Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas
 * (number) e notas (array de números). Crie um construtor para ele e importe-o como o
 * módulo aluno. 
 * 
 * 
 */
 const Aluno = class {
    
    /** 
     * @param {string} name Nome do(a) aluno(a)
     * @param {array} notas Array de notas do aluno(a)
     */
    constructor(nome, notas) {
        this.nome = nome;
        this.qtdFaltas = 0;
        this.notas = notas ? notas : [];
    }

    /**
     * Micro desafio - Passo 2
     * Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas.
     */
    
    calcularMedia() {
        let somaNotas = 0;

        this.notas.forEach(notas => {
            somaNotas += notas;
        });

        return somaNotas / this.notas.length;
    }
    
    /**
     * Também terá um método chamado faltas, que simplesmente aumenta o número de faltas
     * em 1;
     */

    faltas() {
        this.qtdFaltas++;
    }
};

module.exports = Aluno;

