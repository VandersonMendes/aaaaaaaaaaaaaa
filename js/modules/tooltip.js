export default function initTooltip(){
        // O efeito TOLLTIP é um efeito de quando vc passa o mouse emcima de um elemento, irá aparecer junto com o mouse uma mensagem de informação
    //--------------------------------------------------------------------------------

    // Pegar o elemento htm "No caso é uma imagem"
    const tooltips = document.querySelectorAll('[ data-tooltip]');

   if(tooltips){
     // Esse forEach irá pegar cada item e irá passa um evento de mouseover "Quando o mouse está emcima daquele obejeto"
     tooltips.forEach((item) =>{
        item.addEventListener("mouseover", onMouseOver)
    });
    // Esse vai ser o evento quando hover emcima do elemento selecionado
    function onMouseOver(event){
        // o This faz referencia a função criaTollltipBox q faz a criação de um elemento (Esse elemento que séra quando hover a mensagem aparecerá )
        const tolltipBox =  criaTolltipBox(this);

        // Ent a const tooltipBox, séra o elemento com a mensagem que irá aparecer na tela

        // "tolltipBox.style.top = event.pageY + 'px' " esse codigo ésta pegando a relação do mouse com o topo do site, e calculando isso para o top que é a posição do topo da tela que o elemento irá ficar colocando em PX(pixels)
        tolltipBox.style.top = event.pageY + 'px'
        tolltipBox.style.left = event.pageX + 'px'
        // " onMouseLeave" e " onMouseMove" eles são um objeto é dentro deles tem um metodo de função (handleEvent);
        onMouseLeave.tolltipBox = tolltipBox;
        onMouseMove.tolltipBox = tolltipBox
        onMouseLeave.element = this;
        this.addEventListener('mouseleave' ,onMouseLeave)
        this.addEventListener("mousemove", onMouseMove) 
    }
    const onMouseLeave = {
        handleEvent(){
            this.tolltipBox.remove();
            // this.removeEventListener('mouseleave', onMouseMove)
        }
    }
    const onMouseMove = {
           // "tolltipBox.style.top = event.pageY + 'px' " esse codigo ésta pegando a relação do mouse com o topo do site, e calculando isso para o top que é a posição do topo da tela que o elemento irá ficar colocando em PX(pixels)
        handleEvent(event){
            this.tolltipBox.style.top = event.pageY + 'px'
            this.tolltipBox.style.left = event.pageX + 'px'
        }
    }
    function criaTolltipBox(el){
        // Aqui ele cria um elemento, e na arial-label ele pega o texto que estiver dentro dele, e adiciona a class para a estilização, e coloca o elemento la em baixo do body, mas com a função acima (onMouseMove), ele aparece por cima do elemento selecionado
        const tolltipBox = document.createElement("div");
        const text = el.getAttribute('aria-label');
        tolltipBox.classList.add("tolltip");
        tolltipBox.innerText = text;
        document.body.append(tolltipBox)
        // Não esquecer de retorna essa função!!
        return tolltipBox
    }
   }
}

