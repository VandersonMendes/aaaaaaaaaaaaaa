export default function AtivarDescricaoAnimal(){
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContainer = document.querySelectorAll('[data-tab="content"] section');
    if(tabContainer.length && tabMenu.length){
        function activeTab(index){
            tabContainer.forEach((content) =>{
                content.classList.remove("ativo")
            });
            const direcao = tabContainer[index].dataset.anime;
            tabContainer[index].classList.add("ativo", direcao);
        }
        tabMenu.forEach((item, index) =>{
            item.addEventListener('click', () =>{
                activeTab(index)
            });
        });
    };
};
