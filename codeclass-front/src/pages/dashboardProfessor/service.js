export async function buscarDashboardProfessor() {
  return {
    professor: {
      id: 1,
      nome: 'André'
    },

    indicadores: {
      salasAtivas: 3,
      totalAlunos: 84,
      correcoesPendentes: 12
    },

    salas: [
      {
        id: 1,
        nome: 'Estrutura de Dados',
        descricao: 'Grafos, árvores e algoritmos',
        alunos: 28,
        atividadesPendentes: 4
      },
      {
        id: 2,
        nome: 'Programação Orientada a Objetos',
        descricao: 'Classes, objetos, herança e polimorfismo',
        alunos: 31,
        atividadesPendentes: 5
      },
      {
        id: 3,
        nome: 'Algoritmos',
        descricao: 'Fundamentos de lógica e programação',
        alunos: 25,
        atividadesPendentes: 3
      }
    ]
  }
}