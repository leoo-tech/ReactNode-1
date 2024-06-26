// Definição do dia da semana (substitua pelo valor desejado)
let diaDaSemana = 3; // 3 representa terça-feira

// Verificação do tipo de dia
if (diaDaSemana === 1 || diaDaSemana === 7) {
    console.log("É final de semana!");
} else if (diaDaSemana >= 2 && diaDaSemana <= 6) {
    console.log("É dia útil!");
} else {
    console.log("Dia da semana inválido!");
}
