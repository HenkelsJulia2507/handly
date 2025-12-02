function showToast(msg, isError = false) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `toast show ${isError ? 'error' : 'success'}`;
  setTimeout(() => t.classList.remove('show'), 3000);
}

// cards de exemplo (mock) enquanto carrega
const PROFISSIONAIS_MOCK = [
  { id_prestador: 1, nome: 'João Silva', especialidade: 'Encanador', descricao: 'Profissional com 10 anos de experiência', avaliacao: 4.8 },
  { id_prestador: 2, nome: 'Maria Santos', especialidade: 'Eletricista', descricao: 'Trabalhos residenciais e comerciais', avaliacao: 4.9 },
  { id_prestador: 3, nome: 'Carlos Oliveira', especialidade: 'Pintor', descricao: 'Pintura interna e externa', avaliacao: 4.7 },
  { id_prestador: 4, nome: 'Ana Costa', especialidade: 'Limpeza', descricao: 'Limpeza profissional de imóveis', avaliacao: 5.0 },
];

async function carregarProfissionais(filtro = '') {
  try {
    const url = filtro
      ? `http://localhost:3000/profissionais?especialidade=${encodeURIComponent(filtro)}`
      : 'http://localhost:3000/profissionais';

    console.log('🔍 Buscando em:', url); // debug

    const res = await fetch(url);
    console.log('📊 Status da resposta:', res.status); // debug

    if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`);
    
    const profissionais = await res.json();
    console.log('✅ Dados recebidos:', profissionais); // debug

    renderizarCards(profissionais.length > 0 ? profissionais : PROFISSIONAIS_MOCK);
  } catch (err) {
    console.error('❌ Erro ao buscar:', err.message); // debug melhorado
    renderizarCards(PROFISSIONAIS_MOCK);
    showToast('Usando dados locais', false);
  }
}

function renderizarCards(profissionais) {
  const container = document.getElementById('listaProfissionais');
  if (!profissionais || profissionais.length === 0) {
    container.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Nenhum profissional encontrado.</p>';
    return;
  }

  container.innerHTML = profissionais.map(prof => `
    <div class="card" data-id="${prof.id_prestador}">
      <img src="${prof.foto || `https://ui-avatars.com/api/?name=${encodeURIComponent(prof.nome)}&size=80&background=193D2A&color=fff&bold=true`}" alt="${prof.nome}">
      <div class="info">
        <h3>${prof.nome}</h3>
        <p class="especialidade">${prof.especialidade}</p>
        <p>${prof.descricao || 'Profissional qualificado'}</p>
        <div class="rating">⭐ ${prof.avaliacao && !isNaN(prof.avaliacao) ? parseFloat(prof.avaliacao).toFixed(1) : 'N/A'}</div>
        <a href="https://wa.me/5511999999999?text=Olá ${encodeURIComponent(prof.nome)}! Preciso de ${encodeURIComponent(prof.especialidade)}" 
           class="btn-whatsapp" target="_blank">
          💬 Falar no WhatsApp
        </a>
      </div>
    </div>
  `).join('');
}



document.getElementById('btnBuscar').addEventListener('click', () => {
  const filtro = document.getElementById('busca').value;
  console.log('🔎 Filtro digitado:', filtro);
  carregarProfissionais(filtro);
});


window.addEventListener('load', () => {
  carregarProfissionais();
  
  document.getElementById('btnBuscar').addEventListener('click', () => {
    const filtro = document.getElementById('busca').value;
    carregarProfissionais(filtro);
  });

  document.getElementById('busca').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      document.getElementById('btnBuscar').click();
    }
  });

  // 🔍 BUSCA EM TEMPO REAL
  let timeout;
  document.getElementById('busca').addEventListener('input', (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      carregarProfissionais(e.target.value);
    }, 300);
  });
});


