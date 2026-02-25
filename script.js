const form = document.getElementById("form");
const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("senha");

form.addEventListener("submit", function(event){
    
    event.defaultPrevented();

    const email = inputEmail.value;
    const senha = inputSenha.value;

    if (email === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    window.location.href = "task.html";
})
