// atividade 1 - imc

function calcularIMC(peso, altura) {
    if (altura <= 0 || peso <= 0) {
        return "Valores inválidos. Peso e altura devem ser maiores que zero.";
    }

    let imc = peso / (altura * altura);
    return imc;
}

function indicarStatusIMC(imc) {
    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc < 25) {
        console.log("Peso normal");
    } else if (imc < 30) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidade");
    }
}

// Exemplo de uso:
// let peso = 79; // kg
// let altura = 1.81; // m

// let imcCalculado = calcularIMC(peso, altura);

// if (typeof imcCalculado === "number") {
//     console.log("Seu IMC é:", imcCalculado.toFixed(2));
//     indicarStatusIMC(imcCalculado);
// } else {
//     console.log(imcCalculado); // Mensagem de erro
// }

// simplificando o código

let imcCalculado = calcularIMC(79, 1.81);
console.log("Seu IMC é:", imcCalculado.toFixed(2));
indicarStatusIMC(imcCalculado);




// atividade 2 - porcentagem

function percentual(numeroDecimal) {
    if (numeroDecimal < 0 || numeroDecimal > 1) {
        return "Número inválido. Deve estar entre 0 e 1.";
    }

    const porcentagem = (numeroDecimal * 100).toFixed(1); // Calcula e formata com 1 casa decimal
    return `${porcentagem}%`; // Adiciona o símbolo de porcentagem
}

// Exemplos de uso:


// Testando a função

console.log(percentual(0.25)); // 25%
console.log(percentual(0.50)); // 50%
console.log(percentual(0.75)); // 75%
console.log(percentual(1)); // 100%
console.log(percentual(1.5)); // Número inválido. Deve estar entre 0 e 1.
console.log(percentual(-0.5)); // Número inválido. Deve estar entre 0 e 1.


// versao 2

function montarPorcentagem(valor) {
    let porcentagem = (`resultado: ${valor * 100}%`);
    return porcentagem;
}

console.log(montarPorcentagem(0.25)); // 25%
console.log(montarPorcentagem(0.50)); // 50%
console.log(montarPorcentagem(0.75)); // 75%

// atividade 3 - ehNegativo

function ehNegativo(numero) {
    return numero < 0;
}

// Exemplos de uso:
console.log(ehNegativo(-2));  // Saída: true
console.log(ehNegativo(5));   // Saída: false
console.log(ehNegativo(0));   // Saída: false
console.log(ehNegativo(-0));  // Saída: false
console.log(ehNegativo(-2.5)); // Saída: true
console.log(ehNegativo(2.5));  // Saída: false


// versao com if else
const meuNumero = -2;
if (ehNegativo(meuNumero)) {
    console.log("O número é negativo.");
} else {
    console.log("O número não é negativo.");
};





// atividade 4 - contagem 1 a n

function contar(numeroLimite) {
    if (numeroLimite <= 0) {
        console.log("O número limite deve ser maior que zero.");
        return; // Encerra a função se o número for inválido
    }

    for (let i = 1; i <= numeroLimite; i++) {
        console.log(i);
    }
}

// Exemplos de uso:
contar(5);      // Saída: 1 2 3 4 5
console.log("-----");
contar(100);   // Saída: 1 2 3 ... 999 1000
console.log("-----");
contar(-5);     // Saída: O número limite deve ser maior que zero.





// atividade 5 - nome sobrenome

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

// Exemplos de uso:
console.log(nomeCompleto("Maria", "Silva"));     // Saída: Maria Silva
console.log(nomeCompleto("João", "Santos"));      // Saída: João Santos
console.log(nomeCompleto("Ana", "Clara"));        // Saída: Ana Clara

// versao melhorada

function nomeCompleto(nome, sobrenome) {

    if (nome === undefined || sobrenome === undefined) {
        return "Por favor, informe o nome e o sobrenome.";
    } else if (typeof nome !== "string" || typeof sobrenome !== "string") {
        return "Os valores informados devem ser do tipo string.";
    }


    const nomeFomatado = nome.trim();
    const sobrenomeFormatado = sobrenome.trim();

    return `${nomeFomatado} ${sobrenomeFormatado}`;

}

// Exemplos de uso:
let nome = "Maria";
let sobrenome = "Silva";
console.log(nomeCompleto(nome, sobrenome));     // Saída: Maria Silva

nome = "João";
sobrenome = "Santos";
console.log(nomeCompleto(nome, sobrenome));      // Saída: João Santos

nome = "Ana";
sobrenome = "Clara";
console.log(nomeCompleto(nome, sobrenome));        // Saída: Ana Clara




// atividade 6 - calculo da area de um circulo - experimentando o Math.PI

function calcularAreaCirculo(raio) {
    if (raio <= 0) {
        return "Raio inválido. Deve ser maior que zero.";
    }

    const PI = 3.14;
    const area = PI * raio ** 2; // Exponenciação com **
    // const area = Math.PI * raio ** 2; // Exponenciação com **
    return area;
}

// Exemplos de uso:

// let raio = 5;
// let areaCalculada = calcularAreaCirculo(raio);
// console.log(`A área do círculo de raio ${raio} é: ${areaCalculada.toFixed(2)}`);

// raio = 10;
// areaCalculada = calcularAreaCirculo(raio);
// console.log(`A área do círculo de raio ${raio} é: ${areaCalculada.toFixed(2)}`);

// raio = -5;
// areaCalculada = calcularAreaCirculo(raio);
// console.log(areaCalculada); // Raio inválido. Deve ser maior que zero.





// atividade 7 - area de um circulo e o nivel

function mostrarNivelCirculo(area) {
    console.log(`analisando circulo de area ${(area).toFixed(2)}`)
    if (area <= 0) {
        return "Área inválida. Deve ser maior que zero.";
    }

    if (area >= 1 && area <= 20) {
        return "Nível I";
    } else if (area >= 21 && area <= 40) {
        return "Nível II";
    } else {
        return "Nível inválido";
    }
}

// Exemplos de uso:
let area = calcularAreaCirculo(1.35);
let nivel = mostrarNivelCirculo(area);
console.log(`O nível do círculo é: ${nivel}`);



// atividade 8 - letras minusculas

function minusculas(minusculo) {
    if (typeof minusculo !== 'string') {
        return "Entrada inválida. Deve ser uma string.";
    }
    return minusculo.toLowerCase();
}

// Exemplos de uso:
let minusculo = "Aprendendo JavaScript";




// atividade 9 - Função para contar ocorrências de um caractere em uma string

function contarOcorrencias(texto, caractere) {
    if (typeof texto !== 'string' || typeof caractere !== 'string' || caractere.length !== 1) {
        return "Entradas inválidas. O texto deve ser uma string e o caractere deve ser uma string de um único caractere.";
    }

    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caractere) {
            contador++;
        }
    }
    return contador;
}

// Exemplos de uso:
let texto = "Aprendendo JavaScript";
let caractere = "a";
let resultado = contarOcorrencias(texto, caractere);
console.log(`O caractere "${caractere}" aparece ${resultado} vezes no texto.`);
