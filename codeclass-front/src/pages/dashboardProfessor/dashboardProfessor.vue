<script setup>
import { onMounted, ref } from 'vue'

import Button from 'primevue/button'

import SidebarLayout from 'primevue/sidebarlayout'
import SidebarMain from 'primevue/sidebarmain'
import SidebarTrigger from 'primevue/sidebartrigger'

import SidebarIcon from '@primeicons/vue/sidebar'
import BellIcon from '@primeicons/vue/bell'

import SidebarProfessor from '../../components/sidebarProfessor.vue'

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
    <!-- SIDEBAR -->
    <SidebarProfessor />

    <!-- CONTEÚDO DA PÁGINA -->
    <SidebarMain>
      <main class="dashboard-content">

        <section class="dashboard-heading">

          <div class="dashboard-heading-left">

            <SidebarTrigger
              class="dashboard-sidebar-trigger"
              aria-label="Alternar sidebar"
            >
              <SidebarIcon :size="22" />
            </SidebarTrigger>

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

        <!--
          Aqui entram depois:
          - indicadores
          - salas
          - próximas atividades
          - etc.
        -->

      </main>
    </SidebarMain>
  </SidebarLayout>
</template>
