// versao switch case

// Definição do turno (substitua pela letra desejada)
// let turno = 'V'; // Exemplo: Vespertino

// Verificação do turno e exibição da mensagem
// switch (turno.toUpperCase()) { // Converte para maiúscula para não ter problemas com letras minúsculas
//     case 'M':
//         console.log("Bom Dia!");
//         break;
//     case 'V':
//         console.log("Boa Tarde!");
//         break;
//     case 'N':
//         console.log("Boa Noite!");
//         break;
//     default:
//         console.log("Valor Inválido!");
// }


// versao if else

let turno = 'm';

if (turno.toUpperCase() === 'M') {
    console.log("Bom Dia!");
} else if (turno.toUpperCase() === 'V') {
    console.log("Boa Tarde!");
} else if (turno.toUpperCase() === 'N') {
    console.log("Boa Noite!");
} else {
    console.log("Valor Inválido!");
}

// versao objeto
// let turno = 'V';

// const saudacoes = {
//     'M': "Bom Dia!",
//     'V': "Boa Tarde!",
//     'N': "Boa Noite!"
// };

// let saudacao = saudacoes[turno.toUpperCase()];
// console.log(saudacao || "Valor Inválido!"); 
