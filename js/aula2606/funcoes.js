// funções

// function nome_da_função(parametros){
//     // bloco de código
// }

// função de media de 4 notas
console.log('versao sem retorno e sem parametro\n===============================================');
function media() {

    let nota1 = 10;
    let nota2 = 8;
    let nota3 = 7;
    let nota4 = 6;

    let primeiroSemestre = (nota1 + nota2) / 2;
    let segundoSemestre = (nota3 + nota4) / 2;
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    console.log(`primeiro semestre: ${primeiroSemestre}\n================================`)
    console.log(`segundo semestre: ${segundoSemestre}\n=================================`)
    console.log(`=================================A média das notas é: ${media}=================================`);
}

media();

// função com retorno
console.log('versao com retorno e parametro\n===============================================');
function calculaMedia(n1,n2,n3,n4){
    let media = (n1+n2+n3+n4)/4;
    console.log(`media: ${media}`);

    // retorno - saida da função
    return media + "";
}

let aluno1 = calculaMedia(10,8,7,6);
let aluno2 = calculaMedia(7,8,9,10);
let aluno3 = calculaMedia(5,6,7,8);

console.log(`aluno1: ${aluno1}`);
console.log(`aluno2: ${aluno2}`);
console.log(`aluno3: ${aluno3}`);
