export default function scrollSuave(){
    const menuA = document.querySelectorAll('[data-menu="menu"] a[href^="#"]')
    function scrollToSection(event){
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
    }
    menuA.forEach((item)=>{
        item.addEventListener("click", scrollToSection)
    })
}
