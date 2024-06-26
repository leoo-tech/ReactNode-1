/* Estruturas condicionais (If-Else)

    if (condicao) {
        // instruções caso verdadeiro
    } else {
        // instruções caso falso 
    }
*/

// let idade = 18;

// if (idade < 16) {

//     console.log('Não vota');

// }

// else if (idade < 18 || idade > 65) {

//     console.log('Voto opcional');

// }

// else {

//     console.log('Voto obrigatório');

// }

// let maior18 = true;

// let temRG = true;

// if (maior18 && temRG) {

//     console.log('Pode dirigir');

// }

// else {

//     console.log('Não pode dirigir');

// }

// let media = 10.0;
// let sabeIngles = true;
// let aprovado = media >= 7.0;


// if (aprovado) {
//     console.log("aprovado! ")
// } else {
//     console.log("reprovado! ")
// }

// if (aprovado && sabeIngles) {
//     console.log("Parabéns! contratado!")
// } else {
//     console.log("Não contratado!")
// }

// positivo, negativo ou zero
// let numero = 50;

// if (numero > 0) {
//     console.log("o numero ", numero, " é positivo")
// } else if (numero < 0) {
//     console.log("o numero ", numero, " é negativo")
// } else {
//     console.log("o numero é zero")
// }


// divisivel ou nao por 2?
// let n = 8;


// if (n % 2 === 0) {

//     console.log("o numero ", n, " é divisivel por 2")

// } else {

//     console.log("o numero ", n, " não é divisivel por 2")

// }

// função switch case para dias da semana

let dia = 1;

switch (dia) {

    case 1:

        console.log("Domingo");

        break;

    case 2:

        console.log("Segunda");

        break;

    case 3:

        console.log("Terça");

        break;

    case 4:

        console.log("Quarta");

        break;

    case 5:

        console.log("Quinta");

        break;

    case 6:

        console.log("Sexta");

        break;

    case 7:

        console.log("Sábado");

        break;

    default:

        console.log("Dia inválido");

}
console.log("FIM!")