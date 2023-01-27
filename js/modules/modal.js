export default function initModal(){
    const buttonAbrir = document.querySelector('[data-modal="abrir"]');
    const buttonFechar = document.querySelector('[data-modal="form"] .buttonArrow');
    const container = document.querySelector('[data-modal="container"]');
    if(buttonAbrir && buttonFechar && container){
        function toogleModal(event){
            event.preventDefault();
            container.classList.toggle("ativo");
        }
        function fecharContainer(event){
            // se o evento for msm de fechar o this (a section, container q esta segurando o modal) vai remover a classe de ativo, atraves da função fecharModal, caso não tenha esse if verificando se o evento (event.target), for igual o this(section), irá dar erro
            if(event.target === this)
            toogleModal(event);
        }
        buttonAbrir.addEventListener("click", toogleModal);
        buttonFechar.addEventListener("click", toogleModal);
        container.addEventListener("click", fecharContainer)
    }
    // Validação de Menu
    const formulario = document.querySelector('[data-modal="form"]');
    const formEmail = formulario.email[0];
    const formSenha =  formulario.email[1];
    formulario.addEventListener("submit", (e) =>{
        e.preventDefault();
        validarForm()
    })
    function validarForm(event){
        console.log(event.target.value)
    }
}
