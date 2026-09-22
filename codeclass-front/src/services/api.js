export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

export function obterSessao() {
  const data = sessionStorage.getItem('codeclass.sessao');
  return data ? JSON.parse(data) : null;
}

export function salvarSessao(dados) {
  sessionStorage.setItem('codeclass.sessao', JSON.stringify(dados));
}

export function limparSessao() {
  sessionStorage.removeItem('codeclass.sessao');
}

export function exigirSessao() {
  if (!obterSessao()) {
    window.location.href = '/login.html';
  }
}

export async function requisitar(caminho, { metodo = 'GET', corpo = null, autenticado = true } = {}) {
  const baseUrl = import.meta.env.VITE_API_URL ?? '/api/v1';
  const url = `${baseUrl}${caminho}`;

  const headers = {
    'Content-Type': 'application/json',
  };

  if (autenticado) {
    const sessao = obterSessao();
    if (sessao && sessao.access_token) {
      headers['Authorization'] = `Bearer ${sessao.access_token}`;
    }
  }

  const opcoes = {
    method: metodo,
    headers,
  };

  if (corpo) {
    opcoes.body = JSON.stringify(corpo);
  }

  const resposta = await fetch(url, opcoes);

  if (resposta.status === 401) {
    limparSessao();
    window.location.href = '/login.html';
    return;
  }

  if (resposta.status === 204) {
    return null;
  }

  const dados = await resposta.json();

  if (!resposta.ok) {
    throw new ApiError(dados.detail || 'Ocorreu um erro inesperado', resposta.status);
  }

  return dados;
}
