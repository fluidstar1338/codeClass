<script setup>
import UsersIcon from '@primeicons/vue/users'

defineProps({
  sala: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="classroom-card">
    <div class="classroom-card-content">
      <div class="classroom-card-heading">
        <span
          class="classroom-card-code-tag"
          aria-hidden="true"
        >
          &lt;&gt;
        </span>

        <h3 class="classroom-card-title">
          {{ sala.nome }}
        </h3>
      </div>

      <p class="classroom-card-description">
        {{ sala.descricao }}
      </p>

      <div class="classroom-card-meta">
        <span class="classroom-card-students">
          <UsersIcon :size="15" />

          <span>
            {{ sala.alunos }}
          </span>
        </span>

        <span>
          {{ sala.atividadesPendentes }}
          {{ sala.atividadesPendentes === 1 ? 'atividade pendente' : 'atividades pendentes' }}
        </span>
      </div>
    </div>
  </article>
</template>

<style src="./ClassroomCard.css"></style>
