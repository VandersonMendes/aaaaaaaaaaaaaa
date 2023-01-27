export default function initAnimarNumber(){
    // função de ativação do menu.
    function ativarAnimarMenu(){
        const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((n) =>{
        const total = n.innerHTML
        // O incremento com a math serve para a divisão é retorna um numero inteiro e para tabém que não fique muito devagar a animação.
        const incremento = Math.floor(total / 100)
        let start = 0;
        // Cada 25 milisegundo cada numero será contado
        // Pode ser até menos por causa do math random que irá sortea o tempo
        const time = setInterval(()=>{
            start = start + incremento
            n.innerHTML = start 
            if(start >total ){
                n.innerHTML = total
                clearTimeout(time)
            }
        },25 * Math.random())
    })
    }
    // ----------------MUTATION---------------------
    // Mutation é uma função que fica observando o elemento x "observeItem" no caso
    // "const observe " essa variavel passa um metodo de mutation q observa a função handleMutation essa função ela verifica se a classe tem a clase de ativo (por causa do evento de scroll) , caso se tiver o ativo, a  variavel observe com o metodo de mutation vai receber um disconect e, a  função da animação será ativada.
    //  Os attributos como class id data-set não podera mais ser modificado algo do tipo no JavaScript
    
    function handleMutation(mutation){
        if(mutation[0].target.classList.contains('ativo')){
            observer.disconnect()
            ativarAnimarMenu();
    
        }
    }
    const observeItem = document.querySelector(".numeros")
    const observer = new MutationObserver(handleMutation)
    observer.observe(observeItem, {attributes:true})
}
