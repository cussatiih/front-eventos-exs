const botaoInscrever = document.querySelector(".btn");
const botoesModal = document.querySelectorAll(".modal button");
const botaoConfirmar = document.querySelectorAll(".confirmar");
const modal = document.querySelector(".modal");

botaoInscrever.addEventListener("click", inscrever);

botoesModal.forEach(botao => {
    botao.addEventListener("click", () => {
        modal.classList.add("escondido");
    });
});


botaoConfirmar.addEventListener("click", () => {
    botaoInscrever.textContent = "INSCREVER-SE";
    botaoInscrever.classList.remove("inscrito");

    botaoInscrever.addEventListener("click", inscrever);
});

function inscrever(event) {
    console.log("Inscrito");

    const botaoClicado = event.target;

    botaoClicado.textContent = "INSCRITO";
    botaoClicado.classList.add("inscrito");

    botaoClicado.removeEventListener("click", inscrever);
    botaoClicado.addEventListener("click", () => {
        modal.classList.remove("escondido");
    });
}