export default function initFuncionamento(){
    const funcionamento = document.querySelector('[data-semana]');
    if(funcionamento){
        const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
        const diasHorario = funcionamento.dataset.horario.split(',').map(Number);
        // Constando a hora baseado no horario de brasilia
        const novadata = new Date();
        const diaAtual = novadata.getUTCDay();
        const horaAtual = novadata.getUTCHours() - 3;
        // 
        const semanaAberto = diasSemana.indexOf(diaAtual) !== -1;
        const horarioAberto = (horaAtual >= diasHorario[0] && horaAtual < diasHorario[1]);
        if(semanaAberto && horarioAberto){
            funcionamento.classList.add("open")
        }else{
            funcionamento.classList.remove("open")
            funcionamento.innerHTML="Seg a Sex ás 8hrs as 16hrs / fechado"

        }
    }

}
