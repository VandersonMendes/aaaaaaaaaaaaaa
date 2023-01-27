export default function initDropdown(){
    // Funcão que faz o menu DROPDOWN funcionar em dispositivos mobile, e também em desktops etc...
const dropdownMenu = document.querySelectorAll('[data-dropdown]');
dropdownMenu.forEach(menu =>{
    ['touchstart', 'click'].forEach((userEvent) =>{
        menu.addEventListener(userEvent, handleClick);
    })
});
function handleClick(event){
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, () =>{
        this.classList.remove("active");
    });
}

// Função OUTSIDECLICK é quando clicamos no html,  e menu DROPDOWN irá fechar...
// O argumento "element" faz referencia as "this" da funcão "outsideClick" dentro da função handleClick.
// O argumento "callback" faz referencia a função anomina  "outsideClick" dentro da função handleClick.

function outsideClick(element, callback){
    const html = document.documentElement;
    const attribute = 'data-outside';
    // Se caso não exista o 'atributo data-outside' o metodo "hasAttribute" ele adc um atributo caso não tenha
    if(!element.hasAttribute(attribute)){
        html.addEventListener("click", outsideHandleClick);
        element.setAttribute(attribute, "");
    }
    // Esaa função verifica se está clicando dentro menu, caso se sim vai dar true, caso não dar false, a função callback( a função que esta dentro da função "outsideClick" vai remover a classe de ativo, e ira fechar o menu)
    function outsideHandleClick(event){
        if(!element.contains(event.target)){
            element.removeAttribute(attribute, "");
            callback();
        }
        
    }
}
}

//    menu mobile

const menuMobile = document.querySelectorAll(".menu-mobile");
const menu = document.querySelector(".nav");
const buttonfechar = document.querySelectorAll(".sair-menu");
// Abri o menu --------------------
menuMobile.forEach(menu =>{
    ['touchstart', 'click'].forEach((userEvent) =>{
        menu.addEventListener(userEvent, activeMenu);
    });
});
function activeMenu(event){
    event.preventDefault();
    menu.classList.toggle("ativomenu");
}
// Fechar o menu ----------------------
buttonfechar.forEach((fechar) =>{
    ['touchstart', 'click'].forEach((userEvents) =>{
        fechar.addEventListener(userEvents, disableMenu);
    });
})
function disableMenu(event){
    event.preventDefault();
    menu.classList.remove("ativomenu");
}



