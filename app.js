let amigos = [];

const nomeInput = document.getElementById("amigo");
const adicionarBtn = document.getElementById("adicionarBtn");
const sortearBtn = document.getElementById("sortearBtn");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

adicionarBtn.addEventListener("click", adicionarAmigo);
sortearBtn.addEventListener("click", sortearAmigo);
nomeInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    adicionarAmigo();
  }
});

function adicionarAmigo() {
  const nome = nomeInput.value.trim();
  const nomeNormalizado = nome.toLowerCase();

  if (!nome) {
    alert("Por favor, insira um nome.");
    return;
  }

  const nomesNormalizados = amigos.map(n => n.toLowerCase());
  if (nomesNormalizados.includes(nomeNormalizado)) {
    alert("Este nome já foi adicionado.");
    return;
  }

  amigos.push(nome);
  nomeInput.value = "";
  nomeInput.focus();
  renderLista();
}

function renderLista() {
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista de amigos está vazia. Adicione nomes antes de sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const nome = amigos[indice];

  resultado.innerHTML = `🎉 O amigo secreto sorteado é: <strong>${nome}</strong>`;

  setTimeout(() => {
    const opcao = window.prompt("Deseja fazer um novo sorteio? Digite 'sim' para recomeçar ou 'não' para sair.").toLowerCase();

    if (opcao === "sim") {
      amigos = [];
      listaAmigos.innerHTML = "";
      resultado.innerHTML = "";
      alert("Vamos começar de novo!");
    } else {
      alert("Obrigado por usar o sorteador de amigo secreto!");
      location.reload();
    }
  }, 3000);
} 