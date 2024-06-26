
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
let caractere = "a" + "j";
let resultado = contarOcorrencias(texto, caractere);
console.log(`O caractere "${caractere}" aparece ${resultado} vezes no texto.`);
