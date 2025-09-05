// Função para calcular o saldo de vitórias do jogador
function calcularSaldoVitorias(numVitorias, numDerrotas) {
    let saldoVitorias = numVitorias - numDerrotas   // saldo de vitórias do jogador
    let nivelJogador                                // nível do jogador

    // Condições para transformar o saldo de vitórias no nível do jogador
    if(saldoVitorias <= 10) {
        nivelJogador = "Ferro"
    } else if(saldoVitorias <= 20) {
        nivelJogador = "Bronze"
    } else if(saldoVitorias <= 50) {
        nivelJogador = "Prata"
    } else if(saldoVitorias <= 80) {
        nivelJogador = "Ouro"
    } else if(saldoVitorias <= 90) {
        nivelJogador = "Diamante"
    } else if(saldoVitorias <= 100) {
        nivelJogador = "Lendário"
    } else if(saldoVitorias > 100) {
        nivelJogador = "Imortal"
    } else {
        nivelJogador = "não definido"
    }

    // Mensagem de saída baseada nas variáveis definidas
    return `O Herói tem de saldo de ${saldoVitorias} e está no nível ${nivelJogador}`
}

// Exemplo para testar o código
let resultado = calcularSaldoVitorias(77, 4)
console.log(resultado)