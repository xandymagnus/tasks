const form = document.getElementById("taskForm");
const input = document.querySelector("input");
const lista = Document.querySelector(".task-list ul");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const texto = input.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    criarTarefa(texto);
    input.value = "";
});

function criarTarefa (texto) {
    const li = document.createElement("li");
    const span = document.createElement("span");
        span.textContent = texto;

    const actions = document.createElement("div");
        actions.classList.add("actions");

    const btnComplete = document.createElement("button");
        btnComplete.textContent = "✔";
        btnComplete.classList.add("complete");

        btnComplete.addEventListener("click", function() {
            li.classList.toggle("done");
        });
    
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "✖";
    btnDelete.classList.add("delete");

    btnDelete.addEventListener("click", function() {
        li.remove() ;
    });

    actions.appendChild(btnComplete);
    actions.appendChild(btnDelete);

    li.appendChild(btnComplete);
    li.appendChild(btnDelete);

    lista.appendChild(li)

}