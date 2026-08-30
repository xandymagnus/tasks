const form = document.getElementById("taskForm");
const input = form.querySelector("input");
const lista = document.querySelector(".task-list ul");
const btnSair = document.getElementById("logout");

const STORAGE_KEY = "minhas_tarefas";

// 1. Carrega as tarefas salvas do localStorage ao iniciar a página
let tarefas = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// Renderiza na tela as tarefas que já estavam salvas
tarefas.forEach(tarefa => {
    criarTarefa(tarefa.texto, tarefa.feita, false);
});

btnSair.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "/html/index.html";
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const texto = input.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    // Adiciona no array e salva
    tarefas.push({ texto: texto, feita: false });
    sincronizarStorage();

    // Cria na tela
    criarTarefa(texto, false, true);
    input.value = "";
});

// Função para atualizar o localStorage
function sincronizarStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas));
}

function criarTarefa(texto, feita = false, salvarNoArray = false) {
    const li = document.createElement("li");
    if (feita) li.classList.add("done");

    const span = document.createElement("span");
    span.textContent = texto;

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const btnComplete = document.createElement("button");
    btnComplete.textContent = "✔";
    btnComplete.classList.add("complete");

    btnComplete.addEventListener("click", function() {
        li.classList.toggle("done");
        
        // Atualiza o status 'feita' no array correspondente
        const index = obterIndiceElemento(li);
        if (index !== -1) {
            tarefas[index].feita = li.classList.contains("done");
            sincronizarStorage();
        }
    });
        
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "✖";
    btnDelete.classList.add("delete");

    btnDelete.addEventListener("click", function() {
        // Remove do array correspondente
        const index = obterIndiceElemento(li);
        if (index !== -1) {
            tarefas.splice(index, 1);
            sincronizarStorage();
        }
        li.remove();
    });

    actions.appendChild(btnComplete);
    actions.appendChild(btnDelete);
    li.appendChild(span);
    li.appendChild(actions);
    lista.appendChild(li);
}

// Auxiliar para achar a posição do <li> na lista da tela
function obterIndiceElemento(elementoLi) {
    const itens = Array.from(lista.children);
    return itens.indexOf(elementoLi);
}
