// Definição das variáveis
let nomeHeroi = "Anon"  // nome do herói
let xpHeroi = 1300      // pontos de experiência do herói
let nivelHeroi          // nível do herói

// Condições para transformar os pontos de experiência no nível do herói
if(xpHeroi <= 1000) {
    nivelHeroi = "Ferro"
} else if(xpHeroi <= 2000) {
    nivelHeroi = "Bronze"
} else if(xpHeroi <= 5000) {
    nivelHeroi = "Prata"
} else if(xpHeroi <= 7000) {
    nivelHeroi = "Ouro"
} else if(xpHeroi <= 8000) {
    nivelHeroi = "Platina"
} else if(xpHeroi <= 9000) {
    nivelHeroi = "Ascendente"
} else if(xpHeroi <= 10000) {
    nivelHeroi = "Imortal"
} else if(xpHeroi > 10000) {
    nivelHeroi = "Radiante"
} else {
    nivelHeroi = "não definido"
}

// Mensagem de saída baseada nas variáveis definidas
console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi)