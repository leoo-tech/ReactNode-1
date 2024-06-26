// let cont = 1;
// let soma = 0;

// while (cont <= 10) {    
//     soma += cont;
//     cont++;
// }
// console.log(`A soma dos números de 1 a 10 é: ${soma}`);

function fibonacci(n) {
    let fib = [0, 1]; // Inicializa a sequência com os dois primeiros números
    for (let i = 2; i < n; i++) { // Começa do terceiro elemento até n
        fib[i] = fib[i - 1] + fib[i - 2]; // Soma os dois últimos números para obter o próximo
    }
    return fib.slice(0, n); // Retorna a sequência até n elementos
}

console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]