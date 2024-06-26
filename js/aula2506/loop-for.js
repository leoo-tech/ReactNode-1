// exemplo para o laço de repetição for

// for (inicialização; condição; incremento) {

// }

// for (let i = 0; i < 10; i++) {

//     console.log(i);

// }


// sequencia de fibonacci no loop for

let a = 0;

let b = 1;

let c = 0;

for (let i = 0; i < 15; i++) {

    console.log(c);

    a = b;

    b = c;

    c = a + b;

}

// tabuada do 7

let n = 7;
console.log(`===============\n Tabuada do ${n}\n=================`);
for (c = 1; c <= 10; c++) {

    console.log(`${n} x ${c} = ${n * c}`);

}

//soma dos impares de 1 a 999

let soma = 0;
for (let c = 1; c <= 999; c++) {
    if (c % 2 !== 0) {
        soma += c;
    }
}
console.log(`soma dos impares: ${soma}`);



//quantidade de numeros divisíveis por 9 de 1 a 1000

let qtd = 0;

for (let c = 1; c <= 1000; c++) {
    if (c % 9 === 0) {
        console.log(`${c} é divisivel por 9`);
        qtd++
    }
}

console.log(`Quantidade de numeros divisíveis por 9: ${qtd}`);