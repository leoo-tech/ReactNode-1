// tabuada completa 1 a 10

for (let i = 1; i <= 10; i++) { // Loop para o multiplicando (1 a 10)
    console.log('=============================')
    console.log(`Tabuada do ${i}:`); // Título da tabuada
    console.log('=============================')
    for (let j = 1; j <= 10; j++) { // Loop para o multiplicador (1 a 10)
        const resultado = i * j; // Calcula o resultado
        console.log(`${i} x ${j} = ${resultado}`); // Exibe a linha da tabuada
    }

    console.log(""); // Linha em branco para separar as tabuadas
}


// sequencia de fibonacci no loop for

let a = 0;

let b = 1;

let c = 0;

for (let i = 0; i < 11; i++) {

    console.log(c);

    a = b;

    b = c;

    c = a + b;

}

// versao 2 fibonacci

let termoAnterior = 0;
let termoAtual = 1;

for (let i = 0; i < 10; i++) { // Loop para calcular e imprimir os próximos termos
    let proximoTermo = termoAnterior + termoAtual; // Calcula o próximo termo    
    termoAnterior = termoAtual; // Atualiza o termo anterior
    termoAtual = proximoTermo; // Atualiza o termo atual
    console.log(termoAnterior); // Imprime o anterior
}



// decrescente 10 a 1

for (let i = 10; i >= 1; i--) {
    console.log(i);
}



// fatorial


// versao 1

let f = 5; // Número para calcular o fatorial
let produto = 1; // Inicializa o produto

for (let i = f; i >= 1; i--) { // Loop para calcular o fatorial
    produto *= i; // Multiplica o produto pelo valor atual de i
    console.log(`Iteração ${f - i + 1}: produto = ${produto}`); // Exibe o produto após cada multiplicação
}

console.log(`O fatorial de ${f} é ${produto}`); // Exibe o resultado

// versao 2
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1; // Fatorial de 0 e 1 é 1
    }

    let fatorial = 1;
    console.log(`===== Iteração 0: fatorial = ${fatorial} ======\n`); // Valor inicial
    for (let i = 2; i <= numero; i++) {
        fatorial *= i; // Equivalente a fatorial = fatorial * i
        console.log(`===== Iteração ${i - 1}: fatorial = ${fatorial} =====\n`); // Valor após cada multiplicação
    }
    return fatorial;
}

// Exemplo de uso
const numero = 5;
const resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);





//  multiplo de 7

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(`${i} é múltiplo de 7`);
    }
}


// soma do 50 ate o 100

let soma = 0; // Inicializa a variável para armazenar a soma

for (let i = 50; i <= 100; i++) {
    soma += i; // Adiciona o valor atual de i à soma acumulada
    console.log(``); // Linha em branco para separar as iterações
    console.log(`i = ${i}`); // Exibe o valor atual de i
    console.log(`Soma parcial: ${soma}`); // Exibe a soma parcial
}

console.log(""); // Linha em branco para separar a soma do restante do código
console.log(`A soma dos números de 50 a 100 é: ${soma}`);


// ******

for (let i = 1; i <= 5; i++) { // Loop para controlar as linhas
    let linha = "";
    for (let j = 1; j <= i; j++) { // Loop para controlar os asteriscos em cada linha
        linha += "*"; // Adiciona um asterisco à linha. 
        // Equivalente a linha = linha + "*".  linha somada com asterisco. variavel linha com o resultado anterior mais o asterisco
    }
    console.log(`início do loop ${i}`); // Exibe o início do loop
    console.log(linha);
    console.log(``);
}

// versao 2

for (let c = "*"; c < "******"; c = c + "*") {
    console.log(c);
}


// versao 3

let linha = "";
let altura = 9;

for(let c = 0; c<altura;c++){
    linha += "";
    console.log(linha);
}
