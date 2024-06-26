// imc

// Dados do usuário (substitua pelos valores desejados)
let peso = 95; // em quilogramas
let altura = 1.81; // em metros

// Cálculo do IMC
let imc = peso / (altura * altura);

// Verificação do status e exibição no console
console.log("IMC calculado: " + imc.toFixed(2));

if (imc < 18.5) {
    console.log("Status: Abaixo do peso");
} else if (imc < 25) {
    console.log("Status: Peso normal");
} else if (imc < 30) {
    console.log("Status: Sobrepeso");
} else if (imc < 35) {
    console.log("Status: Obesidade grau I");
} else if (imc < 40) {
    console.log("Status: Obesidade grau II");
} else {
    console.log("Status: Obesidade grau III");
}

// Simulação da tabela do IMC
console.log("\nTabela do IMC:");
console.log("------------------------------------");
console.log("| IMC             | Classificação   |");
console.log("------------------------------------");
console.log("| Abaixo de 18.5  | Abaixo do peso  |");
console.log("| 18.5 - 24.9    | Peso normal     |");
console.log("| 25.0 - 29.9    | Sobrepeso       |");
console.log("| 30.0 - 34.9    | Obesidade grau I |");
console.log("| 35.0 - 39.9    | Obesidade grau II|");
console.log("| Acima de 40.0  | Obesidade grau III|");
console.log("------------------------------------");
