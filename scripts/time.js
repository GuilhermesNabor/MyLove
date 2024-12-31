function calcularTempo() {
    const dataInicio = new Date('2024-11-22T00:00:00');
    const dataAtual = new Date();
    const tempo = dataAtual - dataInicio;

    const dias = Math.floor(tempo / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempo % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempo % (1000 * 60)) / 1000);

    document.getElementById('time-elapsed').textContent = 
        `Nos conhecemos há ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
}

setInterval(calcularTempo, 1000);
