export default function initNewsletter(){
    const newsletter = document.querySelector('[data-newsletter]');
    if(newsletter){
        function Activenewsletter(){
            newsletter.classList.add("active")
            outsideClick(newsletter, ()=>{
                newsletter.classList.remove("active")
            })
        }
       setInterval(() => {
            Activenewsletter()
       }, 1000);
    }
    function outsideClick(el, callback){
        const html = document.documentElement;
        const attribute = 'data-outside';
        if(!el.hasAttribute(attribute)){
            html.addEventListener("click", handleOutsideClick);
            el.setAttribute(attribute, "")
        }
        function handleOutsideClick(event){
            if(!el.contains(event.target)){
                callback()
                el.style.display="none";
            }
        }
    }
}
