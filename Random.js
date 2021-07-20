const xingamento = [
    "VAGABUNDO",
    "CHINELÃO",
    "SEM MÃE",
    "PUTINHA",
    "PREGA PRESA",
    "FEDORENTO",
    "PUNHETEIRO",
    "SEU BOSTA",
]

const efeito02 = document.getElementsByClassName("efeito efeito2")[0];

efeito02.addEventListener("mouseover", (event) => {
    event.target.setAttribute('content-after', xingamento[getRandomInt(0, xingamento.length)]);
    // efeito02.innerHTML = xingamento[getRandomInt(0, xingamento.length)]
})

function getRandomInt(min, max) {
    const numMin = Math.ceil(min);
    const numMax = Math.floor(max);
    return Math.floor(Math.random() * (numMax - numMin)) + numMin;
}