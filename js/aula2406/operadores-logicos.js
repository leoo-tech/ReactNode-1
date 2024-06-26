//operadores lógicos

// && e
// || ou
// ! negação

// Incremento -> Somar de 1 em 1
// Decremento -> Subtrair de 1 em 1

// let a = 0;
// // a = a + 1; // 0 + 1 = 1, o novo valor de a é 1
// // a = a + 1; // 1 + 1 = 2, o novo valor de a é 2
// // a = a + 1; // 2 + 1 = 3, o novo valor de a é 3
// a++; // a = a + 1
// a++; // a = a + 1
// a++; // a = a + 1
// a--; // a = a - 1
// console.log(a);

// let idade = 18;
// idade = idade + 5;
// idade = idade + 10;
// idade = idade - 3;
// console.log(idade);


//let c = 5;
//let d = 3;
//let e = 2;
//console.log(c > d && d > e); //true
//console.log(c > d && d == e); //false
//console.log(c > d || d == e); //true
//console.log(c == d || d == e); //false
//console.log(!(c == d || d == e)); //true
//console.log(!(c == d && d == e)); //true
// console.log((true || false) && (true || false))


// ordem: ! > && > ||

// console.log(!true || false)
// console.log(true || true && false)
// console.log(!false && true || false)

// let idade = 80;

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

// if(maior18 && temRG){
//     console.log('Pode dirigir');
// }

// else{
//     console.log('Não pode dirigir');
// }


let media = 10.0

let sabeIngles = false;

let aprovado = media >= 7.0;
console.log("aprovado? ", aprovado);

let podeParticipar = aprovado && sabeIngles;
console.log("pode participar? ", podeParticipar);

let reprovado = !aprovado;