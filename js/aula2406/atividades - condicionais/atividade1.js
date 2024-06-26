// notas e media

// Definição das notas (substitua pelos valores desejados)
let nota1 = 8.5;
let nota2 = 6.0;
let nota3 = 9.2;

// Cálculo da média
let media = (nota1 + nota2 + nota3) / 3;

// Verificação do status e exibição no console
if (media >= 7) {
    console.log("Aprovado! Média: " + media.toFixed(2)); // Arredonda para 2 casas decimais
} else if (media >= 5) {
    console.log("Reforço! Média: " + media.toFixed(2));
} else {
    console.log("Reprovado! Média: " + media.toFixed(2));
}
