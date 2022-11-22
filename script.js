const button = document.querySelector(".carta")
function mostrar(){
    const texto = document.querySelector(".carta-p")
    const texto1 = document.querySelector(".carta-p-2")
    const gato = document.querySelector(".gato-feio")
    const decl = document.querySelector(".decl")
    const cont = document.querySelector(".card")
    texto.classList.toggle("ativar")
    texto1.classList.toggle("ativar")
    gato.classList.toggle("ativar")
    decl.classList.toggle("ativar")
    cont.classList.toggle("ativar")
}
button.addEventListener("click", mostrar)

