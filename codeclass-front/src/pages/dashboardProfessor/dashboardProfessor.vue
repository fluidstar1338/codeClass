<script setup>
import { onMounted, ref } from 'vue'

import Button from 'primevue/button'

import SidebarLayout from 'primevue/sidebarlayout'
import SidebarMain from 'primevue/sidebarmain'

import BellIcon from '@primeicons/vue/bell'

import SidebarProfessor from '../../components/sidebarProfessor.vue'
import ClassroomCard from '../../components/ClassroomCard.vue'

import { buscarDashboardProfessor } from './service'

const dados = ref(null)

onMounted(async () => {
  dados.value = await buscarDashboardProfessor()
})
</script>

<template>
  <SidebarLayout
    v-if="dados"
    class="dashboard-layout"
  >
    <SidebarProfessor />

    <SidebarMain>
      <main class="dashboard-content">

        <section class="dashboard-heading">
          <div class="dashboard-heading-left">
            <div class="page-heading">
              <h1>Dashboard</h1>

              <p>
                Acompanhe suas salas, alunos e atividades.
              </p>
            </div>
          </div>

          <Button
            class="dashboard-notification-button"
            text
            rounded
            aria-label="Notificações"
          >
            <BellIcon :size="22" />
          </Button>
        </section>

        <section class="salas-section">
          <div class="section-header">
            <h2>Salas recentes</h2>

            <a
              class="section-link"
              :href="dados.links.todasSalas"
            >
              Ver todas
            </a>
          </div>

          <div
            v-if="dados.salasRecentes.length"
            class="salas-grid"
          >
            <ClassroomCard
              v-for="sala in dados.salasRecentes"
              :key="sala.id"
              :sala="sala"
            />
          </div>

          <p
            v-else
            class="salas-empty"
          >
            Nenhuma sala acessada recentemente.
          </p>
        </section>

        <div class="dashboard-secondary-grid">

          <section class="dashboard-panel">
            <div class="dashboard-panel-header">
              <h2>Correções pendentes</h2>
            </div>

            <div
              v-if="dados.correcoesPendentes.length"
              class="correction-list"
            >
              <article
                v-for="correcao in dados.correcoesPendentes"
                :key="correcao.id"
                class="correction-item"
              >
                <div class="correction-copy">
                  <h3>
                    {{ correcao.atividade }}
                  </h3>

                  <p>
                    {{ correcao.sala }}
                  </p>
                </div>

                <div class="correction-count">
                  <strong>
                    {{ correcao.quantidade }}
                  </strong>

                  <span>
                    aguardando correção
                  </span>
                </div>
              </article>
            </div>

            <p
              v-else
              class="dashboard-panel-empty"
            >
              Nenhuma correção pendente.
            </p>
          </section>

          <section class="dashboard-panel">
            <div class="dashboard-panel-header">
              <h2>Entregas recentes</h2>
            </div>

            <div
              v-if="dados.entregasRecentes.length"
              class="submission-list"
            >
              <article
                v-for="entrega in dados.entregasRecentes"
                :key="entrega.id"
                class="submission-item"
              >
                <div class="submission-copy">
                  <p class="submission-message">
                    <strong>{{ entrega.aluno }}</strong>
                    enviou
                    <strong>{{ entrega.atividade }}</strong>
                  </p>

                  <span>
                    {{ entrega.sala }}
                  </span>
                </div>

                <time
                  class="submission-time"
                  :datetime="entrega.enviadoEm"
                >
                  {{ entrega.tempo }}
                </time>
              </article>
            </div>

            <p
              v-else
              class="dashboard-panel-empty"
            >
              Nenhuma entrega recente.
            </p>
          </section>

        </div>

        <section class="locked-activities-section">
          <div class="section-header">
            <h2>Atividades trancadas</h2>

            <a
              class="section-link"
              :href="dados.links.todasTarefas"
            >
              Ver todas
            </a>
          </div>

          <div
            v-if="dados.atividadesTrancadas.length"
            class="locked-activities-grid"
          >
            <article
              v-for="atividade in dados.atividadesTrancadas"
              :key="atividade.id"
              class="locked-activity-card"
            >
              <div class="locked-activity-status">
                <span aria-hidden="true">●</span>
                Trancada
              </div>

              <h3>
                {{ atividade.titulo }}
              </h3>

              <p>
                {{ atividade.sala }}
              </p>

              <div class="locked-activity-meta">
                <span>
                  {{ atividade.tipo }}
                </span>

                <span>
                  Criada em {{ atividade.criadaEmTexto }}
                </span>
              </div>
            </article>
          </div>

          <p
            v-else
            class="dashboard-panel-empty"
          >
            Nenhuma atividade trancada.
          </p>
        </section>

      </main>
    </SidebarMain>
  </SidebarLayout>
</template>
