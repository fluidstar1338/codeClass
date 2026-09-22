import { requisitar, obterSessao, exigirSessao } from '../../services/api'

export async function buscarDashboardProfessor() {
  exigirSessao();
  const sessao = obterSessao();
  
  let dadosTurmas = { total_classrooms: 0, total_students: 0, classrooms: [] };
  try {
    dadosTurmas = await requisitar('/classrooms/dashboard');
  } catch (error) {
    console.error('Falha ao buscar dados do dashboard:', error);
  }

  return {
    professor: {
      id: sessao?.user?.id || 1,
      nome: sessao?.user?.full_name || 'Professor'
    },

    indicadores: {
      salasAtivas: dadosTurmas.total_classrooms,
      totalAlunos: dadosTurmas.total_students,
      correcoesPendentes: 25,
      entregasHoje: 27
    },

    focoPrincipal: {
      tipo: 'correcao',
      atividade: 'Lista Encadeada',
      sala: 'Estrutura de Dados',
      quantidade: 12,
      descricao: 'atividade com maior fila de correção',
      href: '/corrigirEntrega.html'
    },

    /*
     * Contrato da dashboard:
     * - no máximo 4 salas;
     * - já ordenadas da mais recentemente acessada para a menos recente;
     * - o componente não deve ordenar nem limitar esta lista.
     */
    salasRecentes: dadosTurmas.classrooms.slice(0, 4).map(c => ({
      id: c.id,
      codigo: 'CC.' + c.id.substring(0, 4).toUpperCase(),
      nome: c.name,
      descricao: c.description || 'Sem descrição',
      alunos: c.student_count,
      atividadesPendentes: 0,
      href: '/sala.html'
    })),

    correcoesPendentes: [
      {
        id: 1,
        atividade: 'Lista Encadeada',
        sala: 'Estrutura de Dados',
        quantidade: 12,
        href: '/corrigirEntrega.html'
      },
      {
        id: 2,
        atividade: 'Herança e Polimorfismo',
        sala: 'Programação Orientada a Objetos',
        quantidade: 8,
        href: '/corrigirEntrega.html'
      },
      {
        id: 3,
        atividade: 'Busca Binária',
        sala: 'Algoritmos',
        quantidade: 5,
        href: '/corrigirEntrega.html'
      }
    ],

    entregasRecentes: [
      {
        id: 201,
        aluno: 'Lucas Ferreira',
        atividade: 'Lista Encadeada',
        sala: 'Estrutura de Dados',
        enviadoEm: '2026-09-01T21:16:00-03:00',
        tempo: 'há 17 min'
      },
      {
        id: 202,
        aluno: 'Mariana Costa',
        atividade: 'Herança e Polimorfismo',
        sala: 'Programação Orientada a Objetos',
        enviadoEm: '2026-09-01T20:40:00-03:00',
        tempo: 'há 53 min'
      },
      {
        id: 203,
        aluno: 'Rafael Souza',
        atividade: 'Busca Binária',
        sala: 'Algoritmos',
        enviadoEm: '2026-09-01T20:02:00-03:00',
        tempo: 'há 1 h'
      },
      {
        id: 204,
        aluno: 'Ana Oliveira',
        atividade: 'Laços de Repetição',
        sala: 'Lógica de Programação',
        enviadoEm: '2026-09-01T19:28:00-03:00',
        tempo: 'há 2 h'
      }
    ],

    proximosPrazos: [
      {
        id: 301,
        atividade: 'Árvores Binárias',
        sala: 'Estrutura de Dados',
        prazo: '2026-09-02T23:59:00-03:00',
        dataCurta: '02 SET',
        hora: '23:59',
        status: 'Amanhã',
        urgente: true
      },
      {
        id: 302,
        atividade: 'Interfaces e Classes Abstratas',
        sala: 'Programação Orientada a Objetos',
        prazo: '2026-09-04T23:59:00-03:00',
        dataCurta: '04 SET',
        hora: '23:59',
        status: 'Em 3 dias',
        urgente: false
      },
      {
        id: 303,
        atividade: 'Busca em Grafos',
        sala: 'Algoritmos',
        prazo: '2026-09-07T18:00:00-03:00',
        dataCurta: '07 SET',
        hora: '18:00',
        status: 'Em 6 dias',
        urgente: false
      }
    ],

    links: {
      todasSalas: '/salas.html',
      todasTarefas: '/tarefas.html',
      criarTarefa: '/criarTarefa.html'
    }
  }
}
