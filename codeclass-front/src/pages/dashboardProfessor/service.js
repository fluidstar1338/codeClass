export async function buscarDashboardProfessor() {
  return {
    professor: {
      id: 1,
      nome: 'André'
    },

    indicadores: {
      salasAtivas: 4,
      totalAlunos: 108,
      correcoesPendentes: 12
    },

    /*
     * Contrato da dashboard:
     * - no máximo 4 salas;
     * - já ordenadas da mais recentemente acessada para a menos recente;
     * - o componente não deve ordenar nem limitar esta lista.
     */
    salasRecentes: [
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
      },
      {
        id: 4,
        nome: 'Lógica de Programação',
        descricao: 'Introdução à resolução de problemas com código',
        alunos: 24,
        atividadesPendentes: 2
      }
    ],

    correcoesPendentes: [
      {
        id: 1,
        atividade: 'Lista Encadeada',
        sala: 'Estrutura de Dados',
        quantidade: 12
      },
      {
        id: 2,
        atividade: 'Herança e Polimorfismo',
        sala: 'Programação Orientada a Objetos',
        quantidade: 8
      },
      {
        id: 3,
        atividade: 'Busca Binária',
        sala: 'Algoritmos',
        quantidade: 5
      }
    ],

    entregasRecentes: [
      {
        id: 201,
        aluno: 'Lucas Ferreira',
        atividade: 'Lista Encadeada',
        sala: 'Estrutura de Dados',
        enviadoEm: '2026-08-29T22:48:00-03:00',
        tempo: 'há 17 min'
      },
      {
        id: 202,
        aluno: 'Mariana Costa',
        atividade: 'Herança e Polimorfismo',
        sala: 'Programação Orientada a Objetos',
        enviadoEm: '2026-08-29T22:12:00-03:00',
        tempo: 'há 53 min'
      },
      {
        id: 203,
        aluno: 'Rafael Souza',
        atividade: 'Busca Binária',
        sala: 'Algoritmos',
        enviadoEm: '2026-08-29T21:36:00-03:00',
        tempo: 'há 1 h'
      },
      {
        id: 204,
        aluno: 'Ana Oliveira',
        atividade: 'Laços de Repetição',
        sala: 'Lógica de Programação',
        enviadoEm: '2026-08-29T20:54:00-03:00',
        tempo: 'há 2 h'
      }
    ],

    atividadesTrancadas: [
      {
        id: 301,
        titulo: 'Árvores Binárias',
        sala: 'Estrutura de Dados',
        tipo: 'Desafio de Codificação',
        criadaEm: '2026-08-27T14:20:00-03:00',
        criadaEmTexto: '27 ago'
      },
      {
        id: 302,
        titulo: 'Interfaces e Classes Abstratas',
        sala: 'Programação Orientada a Objetos',
        tipo: 'Questionário',
        criadaEm: '2026-08-28T09:45:00-03:00',
        criadaEmTexto: '28 ago'
      },
      {
        id: 303,
        titulo: 'Complexidade de Algoritmos',
        sala: 'Algoritmos',
        tipo: 'Trivia',
        criadaEm: '2026-08-29T16:10:00-03:00',
        criadaEmTexto: '29 ago'
      }
    ],

    links: {
      todasSalas: '/salas.html',
      todasTarefas: '/tarefas.html'
    }
  }
}
