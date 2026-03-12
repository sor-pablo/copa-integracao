const timesFutebol = [
    "Elite ADM", "Meia Boca Jr", "Tempestade de Açúcar",
    "Real Confeiteiros", "Real Marcenaria", "Marceneiros de Madrid",
    "Sabor na Rede", "Meu Gastrônomo Favorito", "Designer United",
    "Athletic Adobe Juniors", "Codificando", "Os Scripters"
];

const timesVolei = [
    "Comando ADM", "Bloqueio do Excel", "Fora da Curva",
    "Fornadas de Ouro", "Os Sem Receita", "Real Marcenaria",
    "Marceneiros de Madrid", "Sabor na Rede", "Meu Gastrônomo Favorito",
    "Designer United", "Athletic Adobe Juniors", "Codificando", "Os Scripters"
];

document.getElementById("gerarChaves").addEventListener("click", function() {
    const futebolManha = [];
    const futebolTarde = [];
    const voleiManha = [];
    const voleiTarde = [];

    // Embaralhando e separando os times
    const embaralhar = (array) => array.sort(() => Math.random() - 0.5);
    const timesFutebolEmbaralhados = embaralhar(timesFutebol);
    const timesVoleiEmbaralhados = embaralhar(timesVolei);

    // Separando por turno
    timesFutebolEmbaralhados.forEach(time => {
        if (time.includes("manhã")) {
            futebolManha.push(time);
        } else {
            futebolTarde.push(time);
        }
    });

    timesVoleiEmbaralhados.forEach(time => {
        if (time.includes("manhã")) {
            voleiManha.push(time);
        } else {
            voleiTarde.push(time);
        }
    });

    // Gerando jogos
    document.getElementById("futebolManha").innerHTML = gerarJogos(futebolManha, "Futebol Manhã");
    document.getElementById("futebolTarde").innerHTML = gerarJogos(futebolTarde, "Futebol Tarde");
    document.getElementById("voleiManha").innerHTML = gerarJogos(voleiManha, "Vôlei Manhã");
    document.getElementById("voleiTarde").innerHTML = gerarJogos(voleiTarde, "Vôlei Tarde");

    // Salvar no localStorage
    localStorage.setItem("chaves", JSON.stringify({ futebolManha, futebolTarde, voleiManha, voleiTarde }));
});

function gerarJogos(times, turno) {
    let jogosHtml = `<h4>${turno}</h4><ul>`;
    for (let i = 0; i < times.length; i += 2) {
        if (times[i + 1]) {
            jogosHtml += `<li>${times[i]} vs ${times[i + 1]} - Placar: <span>0:0</span></li>`;
        }
    }
    jogosHtml += `</ul>`;
    return jogosHtml;
}