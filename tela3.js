horario = document.getElementById("horario")
function mostrarHorario() {
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    horario.innerHTML = `${hora}:${minutos}:${segundos}`
}

let strobeativo = false;

function mudarcor() {
    strobeativo = true
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
    const strobe = setInterval(() => {
        backgroundColor = strobeativo ? 'darkblue' : 'black';
            document.body.style.backgroundColor = backgroundColor;
                strobeativo = !strobeativo;
    }, 50);
    await new Promise(resolve => setTimeout(resolve, 4000));
    clearInterval(strobe);
        document.body.style.backgroundColor = 'black';
    await digitacao('horario', `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`, 100);
    setInterval(mostrarHorario, 1000)
        document.getElementById("rosto").style.opacity = "1";
        await new Promise(resolve => setTimeout(resolve, 4000));
            document.getElementById("mao").style.animationPlayState = "running";
            await new Promise (resolve => setTimeout(resolve, 1000));
                document.getElementById("glitch").style.animationPlayState = "running";
                document.getElementById("rosto-copia1").style.animationPlayState = "running";
                document.getElementById("rosto-copia2").style.animationPlayState = "running";
                document.getElementById("glitch-copia1").style.animationPlayState = "running";
                document.getElementById("glitch-copia2").style.animationPlayState = "running";
                document.getElementById("rosto-copia1").style.opacity = "0.5";
                document.getElementById("rosto-copia2").style.opacity = "0.5";
                document.getElementById("glitch-copia1").style.opacity = "0.5";
                document.getElementById("glitch-copia2").style.opacity = "0.5";
        await new  Promise(resolve => setTimeout(resolve, 700));
            document.getElementById("mao").style.left = "-1400px";
            document.getElementById("rosto").style.left = "-1400px";
    }

iniciarDigitacao();
