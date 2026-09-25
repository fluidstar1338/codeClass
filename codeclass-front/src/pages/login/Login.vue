<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import { requisitar, salvarSessao } from '../../services/api'

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')

async function login() {
  if (!email.value || !password.value) {
    errorMessage.value = 'Preencha todos os campos.'
    return
  }

  loading.value = true
  errorMessage.value = ''

  try {
    const dados = await requisitar('/auth/login', {
      metodo: 'POST',
      corpo: { email: email.value, password: password.value },
      autenticado: false
    })

    salvarSessao(dados)
    
    // Redireciona de acordo com o papel, ou para o dashboard do professor provisoriamente
    window.location.href = '/dashboardProfessor.html'
  } catch (error) {
    errorMessage.value = error.message || 'Falha ao autenticar. Verifique suas credenciais.'
  } finally {
    loading.value = false
  }
}
</script>
<!-- teste -->
<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Entrar na CodeClass</h2>
      
      <form @submit.prevent="login" class="login-form">
        <div class="field">
          <label for="email">E-mail</label>
          <InputText id="email" v-model="email" type="email" placeholder="Seu e-mail" fluid />
        </div>
        
        <div class="field">
          <label for="password">Senha</label>
          <Password id="password" v-model="password" :feedback="false" placeholder="Sua senha" fluid toggleMask />
        </div>
        
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>
        
        <Button type="submit" label="Entrar" :loading="loading" fluid />
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--p-surface-50);
}

.login-box {
  background: var(--p-surface-0);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--p-text-color);
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 500;
  color: var(--p-text-color);
}

.error-message {
  color: var(--p-red-500);
  font-size: 0.875rem;
  text-align: center;
}
</style>
