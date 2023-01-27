export default function AccordionList(){
        const termo = document.querySelectorAll('[data-accordion="accordion"] dt');
        if(termo.length){
            function AtivarDescricao(){
                this.nextElementSibling.classList.toggle("ativo")
            }
            termo.forEach((item) =>{
                item.addEventListener("click", AtivarDescricao)
            })
        }
}
    