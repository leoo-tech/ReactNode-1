console.log("Atividades com strings");
console.log("=========================================");
console.log("");
console.log("Atividade 1 - Inverter uma string");
console.log("=========================================");
console.log("");
const texto = "Inverter esta frase!";
const textoInvertido1 = inverterString(texto);
console.log(`texto original: ${texto} \ntexto inverso: ${textoInvertido1}`); // texto original e inverso

function inverterString(texto) {

    let textoInvertido1 = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido1 += texto[i];
    }
    return textoInvertido1;
}
console.log("=========================================");
console.log("");
// versão 2

function inverterString(str) {
    return str.split('').reverse().join('');
}

const textoOriginal = "Olá, mundo!";
const textoInvertido2 = inverterString(textoOriginal);
console.log(textoInvertido2); // "!odnum ,alO"
console.log("=========================================");
console.log("");
// versao 3

let ola = "hello";
let inverso = "";
for (let i = ola.length - 1; i >= 0; i--) {
    console.log(ola[i]);
    inverso += ola[i];
}

console.log(inverso);

console.log("=========================================");
console.log("atividade 2 - trocar por ###");
console.log("");
// atividade 2 - trocar por ###

const fraseOriginal = "Este é um EXEMPLO de frase para teste.";
const palavraRemover = "exemplo";

// Usando replace() para remover e substituir
const novaFrase = fraseOriginal.replace(new RegExp(palavraRemover, "gi"), "###");

console.log(novaFrase); // Saída: "Este é um ### de frase para teste."

console.log("=========================================");
console.log("atividade 3 - verficando o dominio de um email");
console.log("");
// atividade 3 - verficando o dominio de um email

const email = "usuario@soulcode.com"; // Email para teste

// Usando endsWith()
if (email.endsWith("@soulcode.com")) {
    console.log("O email pertence ao domínio soulcode.com");
} else {
    console.log("O email não pertence ao domínio soulcode.com");
}

// Usando includes() com split()
const partesEmail = email.split("@");
if (partesEmail.length === 2 && partesEmail[1] === "soulcode.com") {
    console.log("O email pertence ao domínio soulcode.com");
} else {
    console.log("O email não pertence ao domínio soulcode.com");
}
console.log("=========================================");
console.log("");
console.log("obrigado por executar este código!");
console.log("");