const button = document.querySelector(".carta")
function mostrar(){
    const texto = document.querySelector(".carta-p")
    const gato = document.querySelector(".gato-feio")
    const decl = document.querySelector(".decl")
    texto.classList.toggle("ativar")
    gato.classList.toggle("ativar")
    decl.classList.toggle("ativar")
}
button.addEventListener("click", mostrar)

