horario = document.getElementById("horario")
function mostrarHorario() {
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    horario.innerHTML = `${hora}:${minutos}:${segundos}`
}

function digitacao(horario, texto, velocidade){
    return new Promise((resolve) => {
        const medo = document.getElementById(horario);
        medo.textContent = '';
        let i = 0;
   const intervalo = setInterval(() => {
        medo.textContent += texto[i];
        i++;
        if (i === texto.length) {
            clearInterval(intervalo);
            resolve();
            medo.setAttribute('data-text', texto);
        } 
    }, velocidade);
    });
}

async function iniciarDigitacao() {
    await digitacao('horario', `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`, 100);
    setInterval(mostrarHorario, 1000)
    
}
iniciarDigitacao();
