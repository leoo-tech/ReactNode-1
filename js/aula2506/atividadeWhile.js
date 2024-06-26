// atividade 1
let cont1 = 2; // Começamos com o número 2

while (cont1 <= 10) { // Enquanto o número for menor ou igual a 10
    console.log(cont1); // Imprimimos o número atual
    cont1 += 2;        // Incrementamos o número em 2 para obter o próximo par
}

// atividade 2

//  let multiplicador = 1; // Começamos com o multiplicador
//  while (multiplicador <= 10) { // Enquanto o multiplicador for menor ou igual a 10
//      let resultado = 7 * multiplicador; // Calculamos o resultado da multiplicação
//      console.log(`7 x ${multiplicador} = ${resultado}`); // Imprimimos a linha da tabuada
//      multiplicador++; // Incrementamos o multiplicador para a próxima iteração
//  }


// versao 2

let cont2 = 1;
let n = 8;

while (cont2 <= 10) {
    let resultado = n * cont2;
    console.log(`${n} x ${cont2} = ${resultado}`);
    cont2++;

}


// atividade 3

let cont3 = 1; // Começamos com o número 1
let soma = 0; // Inicializamos a soma em 0
while (cont3 <= 999) { // Enquanto o número for menor ou igual a 999
    if (cont3 % 2 !== 0) { // Verificamos se o número é ímpar (resto da divisão por 2 diferente de 0)
        soma += cont3;     // Se for ímpar, adicionamos o número à soma
    }
    cont3++; // Incrementamos o número para a próxima iteração
}
console.log("A soma dos números ímpares de 1 a 999 é:", soma); // Imprimimos o resultado


// atividade 4

let cont4 = 1;      // Começamos com o número 1
let totalDivisiveis = 0; // Contador para os números divisíveis por 9

while (cont4 <= 1000) { // Enquanto o número for menor ou igual a 1000
    if (cont4 % 9 === 0) { // Verificamos se o número é divisível por 9 (resto da divisão por 9 igual a 0)
        console.log(cont4, " é divisível por 9"); // Se for divisível, imprimimos o número
        totalDivisiveis++;   // Incrementamos o contador de divisíveis
    } else {
        console.log(cont4, " não é divisível por 9"); // Se não for divisível, imprimimos o número
    }
    cont4++;             // Incrementamos o número para a próxima iteração

}

console.log("-----------------------ACABOU! CHEGA!---------------------------")
console.log("Total de números divisíveis por 9:", totalDivisiveis); // Imprimimos o total