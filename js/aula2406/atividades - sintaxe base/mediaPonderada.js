// 1. Criar as variáveis para as notas
let nota1 = 8.5;
let nota2 = 7.0;
let nota3 = 6.2;
let nota4 = 9.3;
let nota5 = 8.8;

// 2. Definir os pesos das notas
const peso1 = 3;
const peso2 = 2;
const peso3 = 1;
const peso4 = 4;
const peso5 = 5;

// 3. Calcular a média ponderada
let somaNotasComPeso = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4) + (nota5 * peso5);
let somaPesos = peso1 + peso2 + peso3 + peso4 + peso5;
let mediaPonderada = somaNotasComPeso / somaPesos;

// 4. Exibir o resultado
console.log(`A média ponderada das notas é: ${mediaPonderada.toFixed(2)}`);
