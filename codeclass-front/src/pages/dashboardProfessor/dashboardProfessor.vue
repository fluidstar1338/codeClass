<script setup>
import { onMounted, ref } from 'vue'

import Card from 'primevue/card'
import Button from 'primevue/button'

import SidebarLayout from 'primevue/sidebarlayout'
import SidebarMain from 'primevue/sidebarmain'
import SidebarTrigger from 'primevue/sidebartrigger'

import SidebarIcon from '@primeicons/vue/sidebar'
import UserIcon from '@primeicons/vue/user'

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

        <section class="page-heading">
          <h1>Dashboard</h1>

          <p>
            Acompanhe suas salas, alunos e atividades.
          </p>
        </section>

        <!-- suas sections de indicadores,
             salas etc. continuam aqui -->

      </main>

    </SidebarMain>

  </SidebarLayout>
</template>