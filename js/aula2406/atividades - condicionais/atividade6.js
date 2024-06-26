// Definição do ano (substitua pelo valor desejado)
let ano = 2400;

// Verificação se o ano é bissexto
if ((ano % 4 === 0 && ano % 100 !== 0) ||
    (ano % 400 === 0 && ano % 100 === 0 && ano % 4 === 0)) {
    console.log(ano + " é um ano bissexto.");
} else {
    console.log(ano + " não é um ano bissexto.");
}
