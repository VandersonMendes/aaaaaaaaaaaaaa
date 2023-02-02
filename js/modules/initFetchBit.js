export default function InitFetchBit(){
   fetch('https://blockchain.info/ticker').then(response => response.json())
   .then(result =>{
        const bitcoin = document.querySelector('[data-bit]');
        const valorBit = (1000/ result.BRL.sell ).toFixed(4);       
        bitcoin.innerText = valorBit
   }).catch(erro =>{
    console.log(Error(erro));
   })
}