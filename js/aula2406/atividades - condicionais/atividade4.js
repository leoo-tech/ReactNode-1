// Definição das variáveis (substitua pelos valores desejados)
let salario = 3500;
let quantidadeDependentes = 3;

// Cálculo do ajuste salarial
let novoSalario = salario; // Inicializa com o salário original

if (quantidadeDependentes >= 1 && quantidadeDependentes <= 5) {
    novoSalario *= 1.30; // Aumento de 30%
} else if (quantidadeDependentes > 5) {
    novoSalario *= 1.40; // Aumento de 40%
}

// Exibição dos resultados
console.log("Salário original: R$" + salario.toFixed(2));
console.log("Quantidade de dependentes: " + quantidadeDependentes);
console.log("Novo salário: R$" + novoSalario.toFixed(2));
