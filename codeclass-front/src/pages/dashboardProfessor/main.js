import { createApp } from 'vue'

import DashboardProfessor from './dashboardProfessor.vue'

import { configurarPrimeVue } from '../../config/primevue'

import './estilos.css'

const app = createApp(DashboardProfessor)

configurarPrimeVue(app)

app.mount('#app')