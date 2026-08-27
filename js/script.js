const form = document.getElementById("form");
const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("senha");
const inputConfirmaSenha = document.getElementById("confirmaSenha");

form.addEventListener("submit", function(event) {
    
    event.preventDefault();

    const email = inputEmail.value;
    const senha = inputSenha.value;
    const confirmaSenha = inputConfirmaSenha.value;

    if (email === "" || senha === "" || confirmaSenha === "") {
        alert("Preencha todos os campos!");
        return;
    };
    
    if (senha != confirmaSenha) {
        alert("As senhas precisam ser iguais!")
        limpaCampo()
        return;
    } else {
        alert("Senhas iguais")
    }

    window.location.href = "/html/tasks.html";
});

function limpaCampo () {
    inputEmail.value = ""
    inputSenha.value = ""
    inputConfirmaSenha.value = ""
}