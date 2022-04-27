const Aluno = require('./alunoClass');

/**
 * Micro desafio - Passo 7
 * 
 * Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo
 * que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela
 * lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os
 * métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).
 * 
 */

let estudantesLista = [];

estudantesLista.push(new Aluno('Ana', [8, 3, 5]));
estudantesLista.push(new Aluno('Pedro', [9, 6, 4]));
estudantesLista.push(new Aluno('Bruno', [10, 10, 10]));


// estudantesLista.forEach((estudante) => {
//     console.log(`Estudante ${estudante.nome} adicionado(a) ao Curso`);
// })

module.exports = {estudantesLista, Aluno};